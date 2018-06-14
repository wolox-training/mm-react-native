import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  removeButton: {
    alignSelf: 'stretch',
    color: COLORS.red
  }
});

export default styles;
