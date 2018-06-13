import React, { Component } from 'react';
import { ListView } from 'react-native';

import Todo from './layout';

class TodoContainer extends Component {
  state = {
    items: [],
    inputValue: '',
    dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  };

  setSource = (items, otherState = {}) => {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(items),
      ...otherState
    });
  };

  handleAddItem = () => {
    if (!this.state.inputValue) return;
    const newItems = [
      ...this.state.items,
      {
        rowNumber: Date.now().toString(),
        text: this.state.inputValue,
        complete: false
      }
    ];
    this.setSource(newItems, { inputValue: '' });
  };

  handleRemoveItem = rowNumber => {
    const newItems = this.state.items.filter(item => item.rowNumber !== rowNumber);
    this.setSource(newItems);
  };

  handleClearComplete = () => {
    const newItems = this.state.items.filter(item => item.complete !== true);
    this.setSource(newItems);
  };

  handleToggleComplete = (rowNumber, complete) => {
    const newItems = this.state.items.map(item => {
      if (item.rowNumber !== rowNumber) return item;
      return {
        ...item,
        complete
      };
    });
    this.setSource(newItems);
  };

  handleInputChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <Todo
        handleAddItem={this.handleAddItem}
        handleRemoveItem={this.handleRemoveItem}
        handleClearComplete={this.handleClearComplete}
        handleToggleComplete={this.handleToggleComplete}
        handleInputChange={this.handleInputChange}
        inputValue={this.state.inputValue}
        dataSource={this.state.dataSource}
      />
    );
  }
}

export default TodoContainer;
