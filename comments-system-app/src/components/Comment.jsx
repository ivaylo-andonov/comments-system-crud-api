import React, { PureComponent } from 'react'
import dateFormat from 'dateformat';
import { connect } from 'react-redux'
import { Badge, Card, Button } from 'react-bootstrap';
import { deleteComment } from '../actions/comments.actions';
// import PropTypes from 'prop-types'

class Comment extends PureComponent {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(id) {
        this.props.deleteComment(id);
    }

    render() {
        const { onClick, text, author, dateCreated, commentId } = this.props;
        const formattedDate = dateFormat(new Date(dateCreated), "dddd, mmmm dS, h:MM:ss TT")
        console.log(author)
        return (
            <div onClick={onClick}>
                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Comment by <Badge variant="secondary">{author}</Badge></Card.Title>
                        <Card.Text>{text}</Card.Text>
                        <Card.Subtitle >Created on: {formattedDate}</Card.Subtitle>
                        <Button variant={'danger'} onClick={() => this.handleDelete(commentId)}>Delete</Button>
                        <Button >Edit</Button>
                    </Card.Body>
                </Card>
            </div>);
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (id) => dispatch(deleteComment(id)),
})

export default connect(null, mapDispatchToProps)(Comment)

// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }
