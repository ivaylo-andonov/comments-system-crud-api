import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Comment from '../components/Comment'
import { fetchComments } from '../actions/comments.actions';

class CommentsList extends PureComponent {

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        console.log('Comments render called');
        const { comments } = this.props;
        return (
            <div>
                {comments.map(comment =>
                    <Comment
                        key={comment._id}
                        text={comment.text}
                        author={comment.author}
                        dateCreated={comment.dateCreated}
                        commentId={comment._id}
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
    fetchComments: () => dispatch(fetchComments())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsList)