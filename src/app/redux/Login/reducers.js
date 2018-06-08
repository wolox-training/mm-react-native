import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  isLoading: false
};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.USER_LOGIN_LOADING:
      return state.merge({ isLoading: true });
    case actions.USER_LOGIN_SUCCESS: {
      return state.merge({
        token: action.payload.token,
        isLoading: false
      });
    }
    default:
      return state;
  }
}

export default reducer;
