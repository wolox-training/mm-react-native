import { StyleSheet } from 'react-native';

const IMAGE_SIZE = 60;

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
    height: IMAGE_SIZE,
    width: IMAGE_SIZE
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
