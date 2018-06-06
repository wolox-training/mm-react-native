import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import gameActions from '../../redux/Game/actions';

import Board from './components/Board';
import './styles.css';

/* eslint-disable react/no-array-index-key */

class Game extends React.Component {
  handleClick(i) {
    this.props.dispatch(gameActions.changeSquareStatus(i, this.props.xIsNext ? 'X' : 'O'));
  }

  jumpTo(step) {
    this.props.dispatch(gameActions.jumpToStep(step));
  }

  render() {
    const { history } = this.props;
    const current = history[this.props.stepNumber];
    const { winner } = this.props;

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squareList} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squareList: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string }))
    })
  ),
  xIsNext: PropTypes.bool,
  stepNumber: PropTypes.number,
  winner: PropTypes.string
};

const mapStateToProps = store => ({
  squareList: store.squareList,
  history: store.history,
  stepNumber: store.stepNumber,
  xIsNext: store.xIsNext,
  winner: store.winner
});

export default connect(mapStateToProps)(Game);
