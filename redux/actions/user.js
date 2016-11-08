// import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';

import * as types from '../../constants';
// need to use it to replicate server side session, then we can use react local storage
// otherwise have to use cookies to save the session and check if the user is logged in
// this cookie will be set and/or checked at the beginning of the root app (client.js)

// polyfill();

function makeUserRequest(method, data, api = 'http://localhost:3000/todo/login') {
  return request({
    url: api,
    method: method,
    data: data,
    withCredentials: true
  });
}

// Log In Action Creators
function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess(message) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    message: message
  };
}

function loginError(message) {
  return {
    type: types.LOGIN_ERROR_USER,
    message: message
  };
}

// Sign Up Action Creators
function signUpError(message) {
  return {
    type: types.SIGNUP_ERROR_USER,
    message: message
  };
}

function beginSignUp() {
  return { type: types.SIGNUP_USER };
}

function signUpSuccess(message) {
  return {
    type: types.SIGNUP_SUCCESS_USER,
    message: message
  };
}

// Log Out Action Creators
function beginLogout() {
  return { type: types.LOGOUT_USER};
}

function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER };
}

function logoutError() {
  return { type: types.LOGOUT_ERROR_USER };
}

export function toggleLoginMode() {
  return { type: types.TOGGLE_LOGIN_MODE };
}

export function manualLogin(data) {
  return dispatch => {
    dispatch(beginLogin());
    return makeUserRequest('post', data, 'http://localhost:3000/todo/login')
      .then(response => {
        if (response.status === 200) {
          dispatch(loginSuccess(response.data.message));
          dispatch(push('/'));
        } else {
          dispatch(loginError('Oops! Something went wrong!'));
        }
      })
      .catch(err => {
        // workaround for this error
        window.addEventListener('unhandledrejection', (err)  => {
          var reason = err.reason;
          if (err instanceof Error) {
            Raven.captureException(reason);
          } else if (Object.prototype.toString.call(reason) === '[object String]') {
            Raven.captureMessage(reason);
          }
          dispatch(loginError(err.data.message));
        });
      });
  };
}

export function signUp(data) {
  return dispatch => {
    dispatch(beginSignUp());

    return makeUserRequest('post', data, 'http://localhost:3000/todo/signup')
      .then(response => {
        if (response.status === 200) {
          dispatch(signUpSuccess(response.data.message));
          dispatch(push('/'));
        } else {
          dispatch(signUpError('Oops! Something went wrong'));
        }
      })
      .catch(err => {
        dispatch(signUpError(err.data.message));
      });
  };
}

export function logOut() {
  return dispatch => {
    dispatch(beginLogout());

    return makeUserRequest('post', null, 'http://localhost:3000/todo/logout')
      .then( response => {
        if (response.status === 200) {
          dispatch(logoutSuccess());
        } else {
          dispatch(logoutError());
        }
      });
  };
}
