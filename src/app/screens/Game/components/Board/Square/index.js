import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
