import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Square from './Square';
import './styles.css';

class Board extends Component {
  createTable = () => {
    const table = [];
    for (let i = 0; i < 3; i += 1) {
      const children = [];
      for (let j = 0; j < 3; j += 1) {
        children.push(<td>{this.renderSquare(j)}</td>);
      }
      table.push(<tr>{children}</tr>);
    }
    return table;
  };

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <Fragment>
        <div>{this.createTable()}</div>
      </Fragment>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.node).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Board;

/* <Fragment>
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
</Fragment> */
