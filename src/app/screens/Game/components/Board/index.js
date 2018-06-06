import React from 'react';
import PropTypes from 'prop-types';

import Square from './Square';
import './styles.css';

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i].value} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <React.Fragment>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func
};

export default Board;
