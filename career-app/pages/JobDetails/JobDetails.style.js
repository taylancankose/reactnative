import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
    marginBottom: 5,
  },
  red_titles: {
    color: '#EF5350',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  black_title_parts: {
    color: 'black',
    fontWeight: '600',
  },
  job_details_title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  desc: {
    color: 'black',
  },
  btn_container: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  btn: {
    backgroundColor: '#EF5350',
    height: Dimensions.get('window').width / 10,
    width: Dimensions.get('window').width / 2.5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  action_texts: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
  icons: {
    color: 'white',
  },
});
