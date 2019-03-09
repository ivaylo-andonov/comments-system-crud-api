import {
  REQUEST_REJECTED,
  CREATE_STORE,
  FETCH_STORE,
  UPDATE_STORE,
  UPDATE_COMMENTS
} from '../actions/comments.actions'

const INITIAL_STATE = {
  comments: [],
  error: null
};

const commentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_REJECTED:
      return {
        ...state,
        fetching: INITIAL_STATE.fetching,
        fetched: INITIAL_STATE.fetched,
        error: action.payload.data
      };
    case UPDATE_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case FETCH_STORE:
      return {
        ...state,
        store: action.payload,
        fetching: INITIAL_STATE.fetching,
        fetched: true
      }
    case UPDATE_STORE:
    case CREATE_STORE:
      return {
        ...state,
        store: action.payload.data
      };
    // case REMOVE_STORE:
    //   return {
    //     ...state,
    //     all: state.all.filter(store => store._id !== action.payload)
    //   }
    default:
      return state;
  }
}

export default commentsReducer;