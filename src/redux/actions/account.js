import { CALL_API } from '../middleware/api/api';
import * as actionTypes from '../actionTypes';
import * as URLs from './urls';

const fetchUser = () => ({
  [CALL_API]: {
    types: [
      actionTypes.USER_REQUEST,
      actionTypes.USER_SUCCESS,
      actionTypes.USER_FAILURE,
    ],
    url: URLs.GET_ACCOUNT_BY_USERNAME,
    fetchOptions: {
      method: 'GET',
    },
  },
});

export const loadUser = () => (
  dispatch,
  getState
) => {
  const user = getState().users[getState().account.username];
  if (user) {
    return null;
  }
  return dispatch(fetchUser());
};

export const login = (username, password) => ({
  //TODO: login by email, phone
  [CALL_API]: {
    types: [
      actionTypes.LOGIN_REQUEST,
      actionTypes.LOGIN_SUCCESS,
      actionTypes.LOGIN_FAILURE,
    ],
    url: URLs.LOGIN,
    payload: {
      username,
    },
    fetchOptions: {
      method: 'POST',
      body: { username, password },
    },
  },
});


export const createAccount = (
  username,
  password,
  firstName,
  lastName,
  phoneNumber,
  email,
) => ({
  [CALL_API]: {
    types: [
      actionTypes.CREATE_ACCOUNT_REQUEST,
      actionTypes.CREATE_ACCOUNT_SUCCESS,
      actionTypes.CREATE_ACCOUNT_FAILURE,
    ],
    url: URLs.CREATE_ACCOUNT,
    fetchOptions: {
      method: 'POST',
      body: {
        username,
        password,
        firstName,
        lastName,
        phoneNumber,
        email,
      },
    },
  },
})

export const logout = () => ({
  [CALL_API]: {
    types: [
      actionTypes.LOGOUT_REQUEST,
      actionTypes.LOGOUT_SUCCESS,
      actionTypes.LOGOUT_FAILURE,
    ],
    url: URLs.LOGOUT,
    fetchOptions: {
      method: 'POST',
    },
  },
});

export const register = ({ name, phone, password, userType = 'STUDENT' }) => ({
  //TODO:
});

export const registerByGoogle = () => ({
  //TODO:
});

export const loginByGoogle = () => ({
  //TODO:
});