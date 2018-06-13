import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import defaultImage from '../../../../../assets/defaultImage.png';

import styles from './styles.js';

class Row extends Component {
  render() {
    const item = this.props;

    return (
      <View style={styles.container}>
        {item.image_url ? (
          <Image style={styles.image} key={item.id} source={{ uri: item.image_url }} />
        ) : (
          <Image key={item.id} style={styles.image} source={defaultImage} />
        )}
        <View style={styles.text}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </View>
    );
  }
}

export default Row;
