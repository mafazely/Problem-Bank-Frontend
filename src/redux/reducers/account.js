import * as actionTypes from '../../redux/actionTypes';

const initialState = {
  isFetching: false,
  token: '',
}

function account(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_ACCOUNT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.response.token,
      };

    case actionTypes.CREATE_ACCOUNT_FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    //#######################

    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.response.token,
      }

    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
      }

    //#######################

    case actionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
}

export default account;