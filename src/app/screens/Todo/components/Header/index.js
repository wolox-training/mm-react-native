import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { strings } from './strings.js';
import styles from './styles.js';

function Header({ inputValue, onAddItem, onChange }) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>{strings.todo}</Text>
      </View>
      <TextInput
        value={inputValue}
        onChangeText={onChange}
        onSubmitEditing={onAddItem}
        placeholder={strings.enterItem}
        blurOnSubmit={false}
        returnKeyType="done"
        style={styles.input}
      />
    </View>
  );
}

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
  inputValue: PropTypes.string
};

export default Header;
