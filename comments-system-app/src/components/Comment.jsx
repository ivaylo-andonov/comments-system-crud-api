import React from 'react'
import dateFormat from 'dateformat';
import { Badge, Card, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types'

const Comment = ({ onClick, text, author, dateCreated }) => {

    const formattedDate = dateFormat(new Date(dateCreated), "dddd, mmmm dS, h:MM:ss TT")
    return (
        <div onClick={onClick}>
            <Card style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title>Comment by <Badge variant="secondary">{author}</Badge></Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Subtitle >Created on: {formattedDate}</Card.Subtitle>
                    <Button variant={'danger'} onClick={onClick} >Delete</Button>
                    <Button onClick={onClick} >Edit</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Comment