import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import gameActions from '../../redux/Game/actions';

import Board from './components/Board';
import './styles.css';

/* eslint-disable react/no-array-index-key */

class Game extends Component {
  getStatus(winner) {
    return winner ? `Winner: ${winner}` : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
  }

  getMoves(history) {
    return history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  }

  handleClick = index => {
    if (this.props && !this.props.winner && !this.props.squareList[index].value)
      this.props.dispatch(gameActions.changeSquareStatus(index, this.props.xIsNext ? 'X' : 'O'));
  };

  jumpTo(step) {
    this.props.dispatch(gameActions.jumpToStep(step));
  }

  render() {
    const { history } = this.props;
    const current = history[this.props.stepNumber];
    const { winner } = this.props;

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squareList} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{this.getStatus(winner)}</div>
          <ol>{this.getMoves(history)}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  squareList: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string })),
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squareList: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string }))
    })
  ),
  xIsNext: PropTypes.bool,
  stepNumber: PropTypes.number,
  winner: PropTypes.string
};

const mapStateToProps = state => ({
  squareList: state.game.squareList,
  history: state.game.history,
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext,
  winner: state.game.winner
});

export default connect(mapStateToProps)(Game);
