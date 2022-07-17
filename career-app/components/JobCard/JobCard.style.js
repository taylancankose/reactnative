import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 3,
  },
  card: {
    backgroundColor: 'white',
  },
  upper_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  job_title: {
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 250,
    fontSize: 15,
  },
  image_container: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  image: {
    height: 30,
    width: 30,
  },
  bottom_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  level: {
    color: '#FEA28D',
    fontWeight: '500',
  },
  icon_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
