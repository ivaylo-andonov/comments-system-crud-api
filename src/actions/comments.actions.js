import qs from 'qs';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/comments';

export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const fetchCommentsData = () => {
  return async (dispatch) => {
    return axios.get(API_URL)
      .then(({ data }) => {
        dispatch(updateCommentsList(data));
      })
      .catch((error) => {
        dispatch(requestFailed(error));
      });
  };
}

export const addComment = (commentData) => {
  return async (dispatch) => {
    return axios.post(`${API_URL}/add`, qs.stringify(commentData))
      .then(() => {
        dispatch(fetchCommentsData());
      })
      .catch((error) => {
        dispatch(requestFailed(error));
      })
  };
}

export const deleteComment = (id) => {
  return async (dispatch) => {
    return axios.post(`${API_URL}/delete/${id}`)
      .then(function (response) {
        dispatch(fetchCommentsData());
      })
      .catch(function (error) {
        dispatch(requestFailed(error));
      })
  };
}

export const updateCommentsList = (data) => {
  return {
    type: UPDATE_COMMENTS,
    payload: data
  };
}

export const requestFailed = (response) => {
  return {
    type: REQUEST_FAILED,
    payload: response
  };
}