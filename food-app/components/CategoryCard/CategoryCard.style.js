import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    marginRight: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    width: Dimensions.get('window').width / 2.8,
    height: Dimensions.get('window').height / 8,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  bg: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flex: 1,
    borderRadius: 10,
  },
  category: {
    zIndex: 100,
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 10,
    textAlignVertical: 'bottom',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: -0.5, height: 0.5},
    textShadowRadius: 5,
  },
});
