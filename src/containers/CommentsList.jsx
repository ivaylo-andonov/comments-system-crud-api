import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCommentsData } from '../actions/comments.actions';
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentsList extends Component {

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <div className='comments-list'>
                {this.props.comments.map((comment) =>
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