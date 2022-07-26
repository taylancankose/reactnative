import {StyleSheet} from 'react-native';
import colors from '../../../style/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  date: {
    fontFamily: 'Popping-Regular',
    color: 'white',
  },
  message: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
});
