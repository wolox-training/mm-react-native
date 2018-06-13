import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import { ROUTES } from '../../../constants/routes';
import Row from '../Book/components/Row';

import styles from './styles.js';
import { bookData } from './bookData';

class Book extends Component {
  static navigationOptions = {
    title: ROUTES.bookTitle
  };

  keyExtractor = item => item.id;

  renderRow = ({ item }) => <Row {...item} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={bookData} keyEstractor={this.keyExtractor} renderItem={this.renderRow} />
      </View>
    );
  }
}

export default Book;
