import React, { PureComponent } from 'react'
import dateFormat from 'dateformat';
import { connect } from 'react-redux'
import { Badge, Card, Button } from 'react-bootstrap';
import { deleteComment, editComment } from '../actions/comments.actions';
import EditCommentModal from '../components/EditCommentModal';
import PropTypes from 'prop-types';

class Comment extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            textEdit: '',
            showEditModal: false
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleEdit(id, text) {
        this.props.editComment(id, text);
        this.setState({ textEdit: '' })
    }

    handleChange(evt) {
        this.setState({ textEdit: evt.target.value });
    }

    formatDate(dateCreated) {
        return dateFormat(new Date(dateCreated), "dddd, mmmm dS, h:MM:ss TT")
    }

    showModal = () => {
        this.setState({ showEditModal: true });
    }

    hideModal = () => {
        this.setState({ showEditModal: false, textEdit: '' });
    }

    render() {
        const { textEdit, showEditModal } = this.state;
        const { id, text, author, dateCreated, deleteComment } = this.props;

        return (
            <Card>
                <Card.Body>
                    <Card.Title>Comment by <Badge variant="secondary">{author}</Badge></Card.Title>
                    <EditCommentModal
                        show={showEditModal}
                        textEdit={textEdit}
                        handleClose={this.hideModal}
                        handleChange={this.handleChange}
                        handleEdit={() => this.handleEdit(id, textEdit)} />
                    <Button className='btn-comment' variant="success" onClick={this.showModal}>Edit</Button>
                    <Button className='btn-comment' variant={'danger'} onClick={() => deleteComment(id)}>Delete</Button>
                    <Card.Text>{text}</Card.Text>
                    <Card.Subtitle >Created on: {this.formatDate(dateCreated)}</Card.Subtitle>
                </Card.Body>
            </Card>)
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (id) => dispatch(deleteComment(id)),
    editComment: (id, text) => dispatch(editComment(id, text)),
})

export default connect(null, mapDispatchToProps)(Comment)

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    deleteComment: PropTypes.func
}
