import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import defaultImage from '../../../../../assets/defaultImage.png';

import { strings } from './strings.js';
import styles from './styles.js';

class BookDetail extends Component {
  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <View style={styles.container}>
        <Image
          key={item.id}
          source={item.image_url ? { uri: item.image_url } : defaultImage}
          style={styles.image}
        />
        <Text>
          {strings.author}
          {item.author}
        </Text>
        <Text>
          {strings.genre}
          {item.genre}
        </Text>
        <Text>
          {strings.publisher}
          {item.publisher}
        </Text>
        <Text>
          {strings.year}
          {item.year}
        </Text>
      </View>
    );
  }
}

BookDetail.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired
  })
};

export default BookDetail;
