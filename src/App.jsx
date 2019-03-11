import React, { Component } from 'react';
import { Provider } from 'react-redux'
import CommentsList from './containers/CommentsList'
import AddComment from './containers/AddComment'
import AppLayout from './components/AppLayout'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <AppLayout>
          <AddComment/>
          <CommentsList/>
        </AppLayout>
      </Provider>
    );
  }
}

export default App;
