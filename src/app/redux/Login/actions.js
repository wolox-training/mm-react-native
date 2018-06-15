import { createTypes, completeTypes, withFlowDetermination } from 'redux-recompose';

import userService from '../../../services/UserService';

export const actions = createTypes(completeTypes(['USER_LOGIN'], ['USER_LOGOUT']), '@@LOGIN');

const actionCreators = {
  login: (email, password, onSuccess, alertLoginError) => ({
    type: actions.USER_LOGIN,
    service: userService.login,
    target: 'user',
    payload: { email, password },
    injections: [
      withFlowDetermination(response => (response.data.length > 0 ? onSuccess() : alertLoginError()))
    ]
  }),
  logout: () => ({
    type: actions.USER_LOGOUT
  })
};

export default actionCreators;
