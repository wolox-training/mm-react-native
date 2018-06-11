import UserService from '../../../services/UserService';

export const actions = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_LOADING: 'USER_LOGIN_LOADING',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_LOGOUT: 'USER_LOGOUT'
};

const privateActionCreators = {
  loginSuccess: (data, onSuccess) => {
    onSuccess();
    return {
      type: actions.USER_LOGIN_SUCCESS,
      payload: data
    };
  },
  loginFailure: alertLoginError => {
    alertLoginError();
    return { type: actions.USER_LOGIN_FAILURE };
  }
};

const actionCreators = {
  login: (email, password, onSuccess, alertLoginError) => async dispatch => {
    dispatch({
      type: actions.USER_LOGIN_LOADING
    });
    const response = await UserService.login(email, password);
    if (response.ok && response.data.length > 0) {
      dispatch(privateActionCreators.loginSuccess(response.data.pop(), onSuccess));
    } else {
      dispatch(privateActionCreators.loginFailure(alertLoginError));
    }
  },
  logout: () => dispatch => {
    dispatch({ type: actions.USER_LOGOUT });
  }
};

export default actionCreators;
