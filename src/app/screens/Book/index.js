import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ROUTES } from '../../../constants/routes';

class Book extends Component {
  static navigationOptions = {
    title: ROUTES.bookTitle
  };

  render() {
    return (
      <View>
        <Text> YOOOOOOOOOOOOOO </Text>
      </View>
    );
  }
}

export default Book;
