export const actions = { CHANGE_SQUARE_STATUS: 'CHANGE_SQUARE_STATUS', JUMP_TO_STEP: 'JUMP_TO_STEP' };

const actionCreators = {
  changeSquareStatus(idSquare, value) {
    return dispatch => {
      dispatch({
        type: actions.CHANGE_SQUARE_STATUS,
        payload: { idSquare, value }
      });
    };
  },
  jumpToStep(step) {
    return dispatch => {
      dispatch({
        type: actions.JUMP_TO_STEP,
        payload: { step }
      });
    };
  }
};

export default actionCreators;
