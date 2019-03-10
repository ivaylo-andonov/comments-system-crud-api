import {
  FETCH_FAILED,
  UPDATE_COMMENTS
} from '../actions/comments.actions'

const INITIAL_STATE = {
  comments: [],
  error: null
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case FETCH_FAILED:
      return {
        ...state,
        error: action.payload.data
      };

    default:
      return state;
  }
}

export default commentsReducer;