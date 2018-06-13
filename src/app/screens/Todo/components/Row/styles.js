import { StyleSheet } from 'react-native';

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
    backgroundColor: 'lightgrey'
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  destroy: {
    fontSize: 20,
    color: 'red',
    marginLeft: 5
  }
});

export default styles;
