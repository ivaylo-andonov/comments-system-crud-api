import React from 'react'
import { FormControl, Button } from 'react-bootstrap';

const EditCommentModal = ({ textEdit, show, handleEdit, handleChange, handleClose, }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    const isDisabledSubmit = textEdit === '' || textEdit.length >= 100;

    return (
        <div className={showHideClassName}>
            <div className='modal-main'>
                <h4>Edit your comment here</h4>
                <FormControl
                    name="edit"
                    type="text"
                    value={textEdit}
                    onChange={handleChange} />
                <Button className='btn-comment' onClick={handleClose}>Close</Button>
                <Button disabled={isDisabledSubmit} className='btn-comment' type='submit' onClick={handleEdit}>Submit</Button>
            </div>
        </div>
    );
};

export default EditCommentModal;