import * as Immutable from 'seamless-immutable';

import { editSquare } from '../../../utils/utils';
import { lines } from '../../screens/Game/constants';

import { actions } from './actions';

const initialState = {
  stepNumber: 0,
  xIsNext: true,
  winner: '',
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
  history: [
    {
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
      ]
    }
  ]
};

function calculateWinner(squares) {
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a].value && squares[a].value === squares[b].value && squares[a].value === squares[c].value) {
      return squares[a].value;
    }
  }
  return null;
}

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.CHANGE_SQUARE_STATUS: {
      const newList = editSquare(state.squareList, action.payload.idSquare, action.payload.value);
      if (state.winner || state.squareList[action.payload.idSquare].value) return state;
      return state.merge({
        squareList: newList,
        history: state.history.concat({ squareList: newList }),
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext,
        winner: calculateWinner(newList)
      });
    }
    case actions.JUMP_TO_STEP:
      return state.merge({
        stepNumber: action.payload.step,
        xIsNext: action.payload.step % 2 === 0
      });
    default:
      return state;
  }
}

export default reducer;
