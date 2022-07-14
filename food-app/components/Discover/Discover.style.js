import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#10365C',
    fontFamily: 'Roboto ',
  },
  inner_container: {
    marginTop: 10,
    paddingRight: 10,
    width: Dimensions.get('window').width / 1.14,
    height: Dimensions.get('window').height / 4,
    backgroundColor: '#FF8450',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: Dimensions.get('window').width / 1.14,
    height: Dimensions.get('window').height / 4,
    borderRadius: 20,
    overflow: 'hidden',
    resizeMode: 'contain',
  },
  bg_container: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flex: 1,
  },
  food_container: {
    marginLeft: 15,
    marginRight: 10,
    padding: 10,
    justifyContent: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
  desc: {
    fontWeight: '500',
    color: 'white',
    fontSize: 15,
  },
  detail_container: {
    flexDirection: 'row',
  },
  category: {
    color: 'white',
    marginRight: 10,
  },
  area: {
    color: 'white',
  },
});
