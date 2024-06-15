import './index.css'
import {formatDistanceToNow} from 'date-fns'

const AddUserComment = props => {
  const {commentDetail, likedButton, deleteComment} = props
  const {id, name, comments, userBackgroundColor, isLiked, date} = commentDetail
  const likedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeButtonClass = isLiked ? 'likeButtonTrue' : ''
  const changeLikeButton = () => {
    likedButton(id)
  }
  const deletelist = () => {
    deleteComment(id)
  }
  return (
    <li className="commentListContainer">
      <div>
        <div className="commentsContainer">
          <div className={`userprofile ${userBackgroundColor}`}>
            <p>{name[0]}</p>
          </div>
          <div className="commentNameContainer">
            <div className="commentNameDetailConatainer">
              <p>{name}</p>
              <p className="commentDate">{formatDistanceToNow(date)} ago</p>
            </div>
            <div>
              <p>{comments}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="commentFunctionContainer">
        <div className="likeSection">
          <img src={likedImg} alt="like" />
          <button
            type="button"
            onClick={changeLikeButton}
            className={`${likeButtonClass} likeButton`}
          >
            Like
          </button>
        </div>
        <div>
          <button type="button" onClick={deletelist} data-testid="delete">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default AddUserComment
