import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../style/colors';

const base_style = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40,
    width: Dimensions.get('window').width / 3,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.blackColor,
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.whiteColor,
    },
    title: {
      ...base_style.title,
      color: colors.blackColor,
    },
  }),
  third: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.blackColor,
      width: Dimensions.get('window').width / 1.15,
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  fourth: StyleSheet.create({
    container: {
      padding: 15,
      marginTop: 25,
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.blackColor,
    },
    title: {
      color: 'white',
      fontSize: 15,
      fontFamily: 'Poppins-SemiBold',
    },
  }),
};
