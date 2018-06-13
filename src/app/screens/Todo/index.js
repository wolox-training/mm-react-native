import React, { Component } from 'react';

import Todo from './layout';

class TodoContainer extends Component {
  state = {
    items: [],
    inputValue: ''
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
    this.setState({
      items: newItems,
      inputValue: ''
    });
  };

  handleRemoveItem = rowNumber => {
    const newItems = this.state.items.filter(item => item.rowNumber !== rowNumber);
    this.setState({
      items: newItems
    });
  };

  handleClearComplete = () => {
    const newItems = this.state.items.filter(item => item.complete !== true);
    this.setState({
      items: newItems
    });
  };

  handleToggleComplete = (rowNumber, complete) => {
    const newItems = this.state.items.map(item => {
      if (item.rowNumber !== rowNumber) return item;
      return {
        ...item,
        complete
      };
    });
    this.setState({
      items: newItems
    });
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
        items={this.state.items}
      />
    );
  }
}

export default TodoContainer;
