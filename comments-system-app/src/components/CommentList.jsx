import React from 'react'
// import PropTypes from 'prop-types'
import Comment from './Comment'

const CommentList = ({ data }) => (
  <div>
    {data.map(comment =>
      <Comment
        key={comment._id}
        text={comment.text}
        author={comment.author}
        dateCreated={comment.dateCreated}
      />
    )}
  </div>
)

// TodoList.propTypes = {
//     comments: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   toggleTodo: PropTypes.func.isRequired
// }

export default CommentList