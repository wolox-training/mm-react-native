import React, { Component } from 'react';
import { View, FlatList, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';
import Row from './components/Row';
import styles from './styles';

class Todo extends Component {
  dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  keyExtractor = item => item.rowNumber;

  renderRow = ({ item }) => (
    <Row
      rowNumber={item.rowNumber}
      onRemove={this.props.handleRemoveItem}
      onComplete={this.props.handleToggleComplete}
      {...item}
    />
  );

  render() {
    const { handleAddItem, handleClearComplete, handleInputChange, inputValue, items } = this.props;
    return (
      <View style={styles.container}>
        <Header inputValue={inputValue} onAddItem={handleAddItem} onChange={handleInputChange} />
        <View style={styles.content}>
          <FlatList
            style={styles.list}
            data={items}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderRow}
            onScrollBeginDrag={this.dismissKeyboard}
          />
        </View>
        <Footer onClearComplete={handleClearComplete} />
      </View>
    );
  }
}

Todo.propTypes = {
  handleAddItem: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleClearComplete: PropTypes.func.isRequired,
  handleToggleComplete: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ rowNumber: PropTypes.string, text: PropTypes.string, complete: PropTypes.bool })
  )
};

export default Todo;
