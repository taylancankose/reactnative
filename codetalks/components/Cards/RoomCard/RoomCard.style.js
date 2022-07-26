import {StyleSheet} from 'react-native';
import colors from '../../../style/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
    margin: 10,
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },

  text: {
    color: colors.blackColor,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    textAlign: 'center',
  },
});
