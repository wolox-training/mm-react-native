import { createTypes, completeTypes } from 'redux-recompose';

export const actions = createTypes(completeTypes(['CHANGE_SQUARE_STATUS', 'JUMP_TO_STEP']), '@@GAME');

const actionCreators = {
  changeSquareStatus: (idSquare, value) => ({
    type: actions.CHANGE_SQUARE_STATUS,
    payload: { idSquare, value }
  }),
  jumpToStep: step => ({
    type: actions.JUMP_TO_STEP,
    payload: { step }
  })
};

export default actionCreators;
