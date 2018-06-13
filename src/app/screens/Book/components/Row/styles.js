import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 30
  },
  image: {
    borderRadius: 100,
    height: 60,
    width: 60
  },
  text: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  author: {
    alignSelf: 'flex-end'
  }
});

export default styles;
