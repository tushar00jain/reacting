import {
  LOGIN_SUCCESS_USER,
  SIGNUP_SUCCESS_USER
} from '../../constants';

export default function message(state={
  message: '',
  type: 'SUCCESS'
}, action={}) {
  switch (action.type) {
    case LOGIN_SUCCESS_USER:
    case SIGNUP_SUCCESS_USER:
      return Object.assign({}, state, {
        message: action.message,
        type: 'SUCCESS'
      });
    default:
      return state;
  }
}
