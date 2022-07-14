import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '400',
    color: '#507796',
    fontFamily: 'Roboto',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    color: '#10365C',
    fontFamily: 'Roboto ',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
