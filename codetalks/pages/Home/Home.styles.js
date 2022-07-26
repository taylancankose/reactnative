import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../style/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  upper_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.55,
  },
  logo: {
    height: Dimensions.get('window').height / 5,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 30,
    fontSize: 50,
    color: colors.blackColor,
    fontFamily: 'Poppins-Bold',
  },
  bottom_container: {
    flex: 0.45,
    backgroundColor: colors.mainColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
  },
  welcome: {
    marginLeft: 20,
    fontSize: 40,
    fontFamily: 'Poppins-SemiBold',
    color: colors.blackColor,
  },
  paragraph: {
    marginLeft: 25,
    color: colors.blackColor,
    fontFamily: 'Poppins-Regular',
    marginRight: 30,
  },
  btn_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
