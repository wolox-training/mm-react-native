export const actions = { CHANGE_SQUARE_STATUS: 'CHANGE_SQUARE_STATUS' };

const actionCreators = {
  changeSquareStatus(idSquare, value) {
    return dispatch => {
      dispatch({
        type: actions.CHANGE_SQUARE_STATUS,
        payload: { idSquare, value }
      });
    };
  }
};

export default actionCreators;
