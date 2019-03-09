import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { addComment } from '../actions/comments.actions'

class AddComment extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.addComment(data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="author">Author Name</label>
          <input id="author" name="author" type="text" />
        </div>
        <div>
          <label htmlFor="text">Comment text</label>
          <input id="text" name="text" type="text" />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (data) => dispatch(addComment(data))
})

export default connect(null, mapDispatchToProps)(AddComment)