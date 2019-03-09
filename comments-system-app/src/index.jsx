import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import './index.css';

const root = document.getElementById('root');

ReactDOM.render(<App store={store} />, root);