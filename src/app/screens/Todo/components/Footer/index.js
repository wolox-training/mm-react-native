import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { strings } from './strings.js';
import styles from './styles.js';

function Footer({ onClearComplete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={onClearComplete}>
        <Text style={styles.removeButton}>{strings.removeCompleted}</Text>
      </TouchableOpacity>
    </View>
  );
}

Footer.propTypes = {
  onClearComplete: PropTypes.func
};

export default Footer;
