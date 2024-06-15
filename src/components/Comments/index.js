import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AddUserComment from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: undefined,
    comments: undefined,
    userCommentList: [],
    backgroundColor: initialContainerBackgroundClassNames,
  }

  addingusername = event => {
    this.setState({name: event.target.value})
  }

  addinguserComment = event => {
    this.setState({comments: event.target.value})
  }

  AddingUserComment = event => {
    event.preventDefault()
    const {name, comments, userCommentList, backgroundColor} = this.state
    const userBackgroundColor =
      backgroundColor[Math.ceil(Math.random() * backgroundColor.length - 1)]
    if (name !== " " && comments !== " ") {
      this.setState({
        name:'',comments:''
      })
    }
      const newList = {
        id: uuidv4(),
        name,
        comments,
        userBackgroundColor,
        date: new Date(),
        isLiked: false,
      }
      this.setState({
        userCommentList: [...userCommentList, newList],
      })
    
  }

  likedButton = id => {
    const {userCommentList} = this.state
    console.log(userCommentList)
    const newUserList = userCommentList.map(eachItem => {
      if (eachItem.id === id) {
        return {...eachItem, isLiked: !eachItem.isLiked}
      }
      return eachItem
    })
    this.setState({userCommentList: newUserList})
  }

  deleteComment = id => {
    const {userCommentList} = this.state
    const updatedList = userCommentList.filter(eachitem => eachitem.id !== id)
    this.setState({userCommentList: updatedList})
  }

  render() {
    const {userCommentList} = this.state
    const totalCommentList = userCommentList.length
    console.log(userCommentList)
    return (
      <form onSubmit={this.AddingUserComment}>
        <div className="container-1">
          <div className="containersearch">
            <div>
              <h1>Comments</h1>
              <p>Say something about the 4.0 Technologies</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                onChange={this.addingusername}
              />
            </div>
            <div>
              <textarea
                cols="20"
                rows="10"
                placeholder="Your Comment"
                onChange={this.addinguserComment}
              />
            </div>
            <div>
              <button type="submit">Add Comment</button>
            </div>
            <p>{totalCommentList} comments</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div>
          <ul>
            {userCommentList.map(eachIem => (
              <AddUserComment
                commentDetail={eachIem}
                likedButton={this.likedButton}
                deleteComment={this.deleteComment}
                key={eachIem.id}
              />
            ))}
          </ul>
        </div>
      </form>
    )
  }
}

export default Comments
