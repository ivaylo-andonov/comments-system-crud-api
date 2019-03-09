import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const FETCH_STORES = 'FETCH_STORES';
export const CREATE_STORE = 'CREATE_STORE';
export const FETCH_SEARCH_STORE = 'FETCH_SEARCH_STORE';
export const FETCH_STORE = 'FETCH_STORE';
export const UPDATE_STORE = 'UPDATE_STORE';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';

export const fetchComments = () => {
  return (dispatch) => {
    return axios.get(API_URL)
      .then(function ({
        data
      }) {
        dispatch(updateCommentsList(data));
      })
      .catch(function (error) {
        dispatch(requestRejected(error));
      });
  };
}

const params = new URLSearchParams();

export function addComment(comment) {
  return function (dispatch) {
    params.append('author', comment.get('author'));
    params.append('text', comment.get('text'));
    return axios.post(`${API_URL}/add`, params)
      .then(function (response) {
        window.location = '/'
      })
      .catch(function (error) {
        dispatch(requestRejected(error));
      })
  };
}

export function editStore(store) {
  return function (dispatch) {
    return axios.put(`${API_URL}/stores/${store._id}`, {
        data: store
      })
      .then(function (response) {
        dispatch(updateCommentsList(response));
      })
      .catch(function (error) {
        dispatch(requestRejected(error));
      })
  };
}


export function deleteStore(id) {
  return function (dispatch) {
    return axios.delete(`${API_URL}/stores/${id}`)
      .then(function (response) {
        dispatch(updateCommentsList(id));
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
    type: REQUEST_REJECTED,
    payload: response
  };
}

export function createComment(response) {
  return {
    type: CREATE_STORE,
    payload: response
  }
}

export function editComment(response) {
  return {
    type: UPDATE_STORE,
    payload: response
  }
}