import * as Immutable from 'seamless-immutable';

import { editSquare } from '../../../utils/utils';

import { actions } from './actions';

const initialState = {
  stepNumber: 0,
  squareList: [
    { id: 0, value: '' },
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
    { id: 8, value: '' }
  ],
  history: []
};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.CHANGE_SQUARE_STATUS:
      return state.merge({
        stepNumber: state.stepNumber + 1,
        history: state.history.concat({ ...state.squareList }),
        squareList: editSquare(state.squareList, action.payload.idSquare, action.payload.value)
      });
    default:
      return state;
  }
}

export default reducer;
