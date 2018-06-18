import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import defaultImage from '../../../../../assets/defaultImage.png';

import styles from './styles.js';

function Row(props) {
  return (
    <View style={styles.container}>
      <Image
        key={props.id}
        style={styles.image}
        source={props.image_url ? { uri: props.image_url } : defaultImage}
      />
      <View style={styles.text}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.author}>{props.author}</Text>
      </View>
    </View>
  );
}

Row.propTypes = {
  id: PropTypes.string,
  image_url: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
};

export default Row;
