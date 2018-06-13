import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: COLORS.skyblue,
    height: 50,
    justifyContent: 'center'
  },
  headerText: {
    color: COLORS.white,
    fontSize: 15
  },
  input: {
    alignSelf: 'stretch',
    fontSize: 20,
    height: 60
  }
});

export default styles;
