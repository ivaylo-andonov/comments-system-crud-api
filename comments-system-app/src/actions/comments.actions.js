import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const FETCH_FAILED = 'FETCH_FAILED';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';

export const fetchComments = () => {
  return (dispatch) => {
    return axios.get(API_URL)
      .then(({data}) => {
        dispatch(updateCommentsList(data));
      })
      .catch((error) => {
        dispatch(requestRejected(error));
      });
  };
}

export const addComment = (comment) => {
  return  (dispatch) => {
    const params = getPostParams(comment);
    return axios.post(`${API_URL}/add`, params)
      .then((response) => {
         dispatch(fetchComments());
      })
      .catch((error) => {
        dispatch(requestRejected(error));
      })
  };
}

export const deleteComment = (id)  => {
  return (dispatch) => {
    return axios.delete(`${API_URL}/delete/${id}`)
      .then(function (response) {
        dispatch(fetchComments());
      })
      .catch(function (error) {
        dispatch(requestRejected(error));
      })
  };
}

export function updateCommentsList(data) {
  return {
    type: UPDATE_COMMENTS,
    payload: data
  };
}

export function requestRejected(response) {
  return {
    type: FETCH_FAILED,
    payload: response
  };
}

const getPostParams = (formData) => {
  const params = new URLSearchParams();
  params.append('author', formData.get('author'));
  params.append('text', formData.get('text'));
  return params;
}
