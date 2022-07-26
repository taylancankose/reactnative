import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../style/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  upper_container: {
    flex: 0.25,
    margin: 20,
    justifyContent: 'center',
    marginTop: 30,
  },
  header: {
    color: colors.blackColor,
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
  },
  sub_header: {
    color: colors.blackColor,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  bottom_container: {
    flex: 0.75,
    backgroundColor: colors.whiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
