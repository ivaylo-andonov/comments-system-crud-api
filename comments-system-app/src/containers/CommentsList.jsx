import React, { Component } from 'react';
import { connect } from 'react-redux'
import Comments from '../components/CommentList'
import { fetchComments } from '../actions/comments.actions';

class CommentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showExportPopup: false
        };
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <>
                <Comments data={this.props.comments} />
            </>
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