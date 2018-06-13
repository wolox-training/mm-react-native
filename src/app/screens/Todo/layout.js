import React, { Component } from 'react';
import { View, ListView, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';
import Row from './components/Row';
import styles from './styles';

class Todo extends Component {
  dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  renderRow = ({ rowNumber, ...value }) => (
    <Row
      rowNumber={rowNumber}
      onRemove={this.props.handleRemoveItem}
      onComplete={this.props.handleToggleComplete}
      {...value}
    />
  );

  render() {
    const { handleAddItem, handleClearComplete, handleInputChange, inputValue, dataSource } = this.props;
    return (
      <View style={styles.container}>
        <Header inputValue={inputValue} onAddItem={handleAddItem} onChange={handleInputChange} />
        <View style={styles.content}>
          <ListView
            style={styles.list}
            enableEmptySections
            dataSource={dataSource}
            onScroll={this.dismissKeyboard}
            renderRow={this.renderRow}
          />
        </View>
        <Footer onClearComplete={handleClearComplete} />
      </View>
    );
  }
}

Todo.propTypes = {
  handleAddItem: PropTypes.func,
  handleRemoveItem: PropTypes.func,
  handleClearComplete: PropTypes.func,
  handleToggleComplete: PropTypes.func,
  handleInputChange: PropTypes.func,
  inputValue: PropTypes.string
};

export default Todo;
