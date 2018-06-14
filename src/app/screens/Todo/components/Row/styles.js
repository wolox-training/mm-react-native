import { StyleSheet } from 'react-native';

import { COLORS } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10
  },
  complete: {
    backgroundColor: COLORS.lightgrey
  },
  text: {
    fontSize: 20,
    color: COLORS.black
  },
  destroy: {
    fontSize: 20,
    color: COLORS.red,
    marginLeft: 5
  }
});

export default styles;
