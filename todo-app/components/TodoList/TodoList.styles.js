import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  list_item: {
    backgroundColor: '#7DA453',
    padding: 10,
    borderRadius: 5,
    margin: 6,
    color: 'white',
  },
  done: {
    backgroundColor: '#37474F',
    padding: 10,
    borderRadius: 5,
    margin: 6,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
});
