import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 1.14,
    height: Dimensions.get('window').height / 5,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  bg: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    flex: 1,
  },
  meal: {
    fontSize: 20,
    textAlignVertical: 'bottom',
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});
