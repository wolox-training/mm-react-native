import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import defaultImage from '../../../../../assets/defaultImage.png';

import styles from './styles.js';

class Row extends Component {
  handlePress = () => {
    this.props.onPress(this.props.item);
  };

  render() {
    const { item } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this.handlePress} style={styles.container}>
          <Image
            key={item.id}
            style={styles.image}
            source={item.image_url ? { uri: item.image_url } : defaultImage}
          />
          <View style={styles.text}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Row.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string
  })
};

export default Row;
