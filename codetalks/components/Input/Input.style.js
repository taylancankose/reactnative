import {StyleSheet, Platform} from 'react-native';
import colors from '../../style/colors';

export default StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40,
    backgroundColor: colors.bgColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_style: {
    flex: 1,
    padding: Platform.OS === 'android' ? 18 : 18,
  },
});
