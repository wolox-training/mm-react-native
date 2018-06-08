import React from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import './styles.css';

function Game({ squareList, getStatus, getMoves, handleClick }) {
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squareList} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{getStatus}</div>
        <ol>{getMoves}</ol>
      </div>
    </div>
  );
}

Game.propTypes = {
  squareList: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string })),
  getStatus: PropTypes.string,
  getMoves: PropTypes.node,
  handleClick: PropTypes.func
};

export default Game;
