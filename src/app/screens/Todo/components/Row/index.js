import React, { Component } from 'react';
import { View, Text, TouchableOpacity, CheckBox } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles.js';

class Row extends Component {
  handleValueChange = complete => {
    this.props.onComplete(this.props.rowNumber, complete);
  };

  handleRemoveItem = () => {
    this.props.onRemove(this.props.rowNumber);
  };

  render() {
    const { complete, text } = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.textWrap, complete && styles.complete]}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <CheckBox value={complete} onValueChange={this.handleValueChange} />
        <TouchableOpacity onPress={this.handleRemoveItem}>
          <Text style={styles.destroy}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Row.propTypes = {
  complete: PropTypes.bool,
  onComplete: PropTypes.func.isRequired,
  text: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
  rowNumber: PropTypes.string
};

export default Row;
