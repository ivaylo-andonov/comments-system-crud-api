import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Button, FormControl, Form } from 'react-bootstrap'
import { addComment } from '../actions/comments.actions';
import PropTypes from 'prop-types'

const maxLengthInput = 100;

class AddComment extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.canBeSubmitted = this.canBeSubmitted.bind(this);
  }

  handleAuthorChange = (evt) => {
    this.setState({ author: evt.target.value });
  };

  handleTextChange = (evt) => {
    this.setState({ text: evt.target.value });
  };

  handleSubmit(evt) {
    if (this.canBeSubmitted()) {
      evt.preventDefault();
      this.props.addComment({ author: this.state.author, text: this.state.text });
      this.setState({ text: '', author: '' })
    }
  }

  canBeSubmitted() {
    const { author, text } = this.state;
    return author !== '' && author.length <= maxLengthInput &&
      text !== '' && text.length <= maxLengthInput
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className='add-comment-form'>
        <Form.Label >Your name</Form.Label>
        <FormControl
          name="author"
          type="text"
          value={this.state.author}
          onChange={this.handleAuthorChange} />
        <Form.Label >Your comment</Form.Label>
        <FormControl
          name="text"
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange} />
        <Button type='submit' disabled={!this.canBeSubmitted()}>Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (data) => dispatch(addComment(data)),
})

export default connect(null, mapDispatchToProps)(AddComment)

Comment.propTypes = {
  addComment: PropTypes.func.isRequired
}