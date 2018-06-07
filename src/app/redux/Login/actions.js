import UserService from '../../../services/UserService';

export const actions = {
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE'
};

const privateActionCreators = {
  loginSuccess: (data, onSuccess) => {
    onSuccess();
    return {
      type: actions.USER_LOGIN_SUCCESS,
      payload: data
    };
  },
  loginFailure: () => {
    alert('Wrong email or password');
  }
};

const actionCreators = {
  login: (event, onSuccess) => async dispatch => {
    const response = await UserService.login(event);
    if (response.data.length > 0) {
      dispatch(privateActionCreators.loginSuccess(response.data.pop(), onSuccess));
    } else {
      privateActionCreators.loginFailure();
    }
  }
};

export default actionCreators;
