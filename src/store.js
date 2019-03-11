import {
    applyMiddleware,
    createStore
} from 'redux';
import thunk from 'redux-thunk';
import commentsReducer from '../src/reducers/comments.reducer.js'

const store = createStore(
    commentsReducer,
    applyMiddleware(
        thunk
    )
);

export default store;