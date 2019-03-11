import React, { PureComponent } from 'react'
import dateFormat from 'dateformat';
import { connect } from 'react-redux'
import { Badge, Card, Button } from 'react-bootstrap';
import { deleteComment } from '../actions/comments.actions';
import PropTypes from 'prop-types';

class Comment extends PureComponent {

    formatDate(dateCreated) {
        return dateFormat(new Date(dateCreated), "dddd, mmmm dS, h:MM:ss TT")
    }

    render() {
        const { text, author, dateCreated, id, deleteComment } = this.props;
        console.log(author)
        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Comment by <Badge variant="secondary">{author}</Badge></Card.Title>
                        <Button className='btn-comment' variant={'danger'} onClick={() => deleteComment(id)}>Delete</Button>
                        <Button className='btn-comment' >Edit</Button>
                        <Card.Text>{text}</Card.Text>
                        <Card.Subtitle >Created on: {this.formatDate(dateCreated)}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>);
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (id) => dispatch(deleteComment(id)),
})

export default connect(null, mapDispatchToProps)(Comment)

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    deleteComment: PropTypes.func
}
