import { completeState, createReducer, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import userService from '../../../services/UserService';

import { actions } from './actions';

const stateDescription = {
  isLoading: false,
  user: null
};

const initialState = completeState(stateDescription, ['isLoading']);

const reducerDescription = {
  primaryActions: [actions.USER_LOGIN],
  override: {
    [actions.USER_LOGOUT]: state => {
      userService.logout();
      return state.merge(initialState);
    }
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
