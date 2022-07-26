import {StyleSheet} from 'react-native';
import colors from '../../style/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  inner_container: {
    width: 60,
    height: 60,
    backgroundColor: colors.mainColor,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
