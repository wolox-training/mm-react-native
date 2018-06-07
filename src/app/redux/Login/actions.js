import UserService from '../../../services/UserService';

export const actions = [
  { GET_USERS: 'GET_USERS' },
  { GET_USERS_SUCCESS: 'GET_USERS_SUCCESS' },
  { GET_USERS_FAILURE: 'GET_USERS_FAILURE' },
  { USER_LOGIN: 'USER_LOGIN' }
];

const actionCreators = {
  // Es una función que devuelve una función.
  // El middleware va a ver que cuando se haga
  // dispatch(actionCreators.getBooks());
  // va a encontrar que el resultado de eso es una función y
  // lo va a invocar con `dispatch` y `getState`.
  getUsers: () => async dispatch => {
    dispatch({ type: actions.GET_USERS });
    const response = await UserService.getBooks();
    if (response.ok) {
      dispatch({
        type: actions.GET_USERS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_USERS_FAILURE,
        payload: response.problem
      });
    }
  },
  login(event) {
    return dispatch => {
      dispatch({
        type: actions.USER_LOGIN,
        payload: { event }
      });
    };
  }
};

export default actionCreators;
