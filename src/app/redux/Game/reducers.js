import { completeState, createReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions as loginActions } from '../Login/actions';
import { lines } from '../../../constants/gameLines';
import { editSquare } from '../../../utils/utils';

import { actions } from './actions';

const emptySquareList = [
  { id: 0, value: '' },
  { id: 1, value: '' },
  { id: 2, value: '' },
  { id: 3, value: '' },
  { id: 4, value: '' },
  { id: 5, value: '' },
  { id: 6, value: '' },
  { id: 7, value: '' },
  { id: 8, value: '' }
];

const stateDescription = {
  stepNumber: 0,
  xIsNext: true,
  winner: '',
  squareList: emptySquareList,
  history: [
    {
      squareList: emptySquareList
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

const initialState = completeState(stateDescription);

const reducerDescription = {
  [actions.CHANGE_SQUARE_STATUS]: (state, action) =>
    state.merge({
      squareList: editSquare(state.squareList, action.payload.idSquare, action.payload.value),
      history: state.history.concat({
        squareList: editSquare(state.squareList, action.payload.idSquare, action.payload.value)
      }),
      stepNumber: state.history.length,
      xIsNext: !state.xIsNext,
      winner: calculateWinner(editSquare(state.squareList, action.payload.idSquare, action.payload.value))
    }),
  [actions.JUMP_TO_STEP]: (state, action) =>
    state.merge({
      stepNumber: action.payload.step,
      xIsNext: action.payload.step % 2 === 0
    }),
  [loginActions.USER_LOGOUT]: state => state.merge(initialState)
};

export default createReducer(Immutable(initialState), reducerDescription);
