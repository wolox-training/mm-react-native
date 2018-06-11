import UserService from '../../../services/UserService';
import localStorageService from '../../../services/localStorageService';
import api from '../../../config/api';

export const actions = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_LOADING: 'USER_LOGIN_LOADING',
  USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
  USER_LOGOUT: 'USER_LOGOUT'
};

const privateActionCreators = {
  loginSuccess: (data, onSuccess) => {
    localStorageService.setToken(data.token);
    onSuccess();
    api.setHeaders({ token: data.token });
    return {
      type: actions.USER_LOGIN_SUCCESS,
      payload: data
    };
  },
  loginFailure: () => {
    alert('Wrong email or password');
    return { type: actions.USER_LOGIN_ERROR };
  }
};

const actionCreators = {
  login: (event, onSuccess) => async dispatch => {
    dispatch({
      type: actions.USER_LOGIN_LOADING
    });
    const response = await UserService.login(event);
    if (response.data.length > 0) {
      dispatch(privateActionCreators.loginSuccess(response.data.pop(), onSuccess));
    } else {
      dispatch(privateActionCreators.loginFailure());
    }
  },
  logout: () => dispatch => {
    dispatch({ type: actions.USER_LOGOUT });
  }
};

export default actionCreators;
