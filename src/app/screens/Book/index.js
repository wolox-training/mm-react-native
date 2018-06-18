import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Row from '../Book/components/Row';
import { ROUTES } from '../../../constants/routes';

import styles from './styles.js';
import { bookData } from './bookData';

class Book extends Component {
  keyExtractor = item => item.id;

  navigateToBook = item => {
    this.props.navigation.navigate(ROUTES.BookDetail, { item, title: item.title });
  };

  renderRow = ({ item }) => <Row onPress={this.navigateToBook} item={item} />;

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={bookData} keyEstractor={this.keyExtractor} renderItem={this.renderRow} />
      </View>
    );
  }
}

Book.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};

export default Book;
