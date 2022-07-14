import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  title: {
    marginLeft: 25,
    marginTop: 15,
    paddingRight: 80,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  ingredients: {
    marginLeft: 25,
    marginTop: 15,
    paddingRight: 80,
    fontSize: 20,
    color: '#0B3B58',
    fontWeight: '600',
  },
  instructions: {
    marginLeft: 25,
    marginRight: 50,
  },
  outer_shell: {
    marginLeft: 25,
    marginTop: 10,
    flexDirection: 'row',
  },
  first_shell: {
    marginRight: 25,
  },
  btn: {
    backgroundColor: '#FF0000',
    margin: 15,
    marginLeft: 25,
    marginRight: 30,
    padding: 10,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btn_text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
