import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Comment from '../components/Comment'
import { fetchCommentsData } from '../actions/comments.actions';
import PropTypes from 'prop-types'

class CommentsList extends PureComponent {

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        const { comments } = this.props;
        return (
            <div className='comments-list'>
                {comments.map(comment =>
                    <Comment
                        key={comment._id}
                        id={comment._id}
                        author={comment.author}
                        text={comment.text}
                        dateCreated={comment.dateCreated}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments
})

const mapDispatchToProps = (dispatch) => ({
    fetchComments: () => dispatch(fetchCommentsData())
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)

Comment.propTypes = {
    comments: PropTypes.array,
    fetchComments: PropTypes.func
}