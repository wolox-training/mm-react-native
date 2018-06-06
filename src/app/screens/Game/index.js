import React, { Component } from 'react';

import './styles.css';

import Board from './components/Board';
import { lines } from './constants';

/* eslint-disable react/no-array-index-key */

function calculateWinner(squares) {
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  };

  getStatus(winner) {
    return winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
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
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history.slice(-1).pop();
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = this.state.xIsNext ? 'X' : 'O';

    this.setState(previousState => ({
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !previousState.xIsNext
    }));
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{this.getStatus(winner)}</div>
          <ol>{this.getMoves(history)}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
