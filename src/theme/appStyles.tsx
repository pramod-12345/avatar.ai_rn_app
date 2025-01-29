import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {hp} from './fonts';

export const AppStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.Main_Dark,
  },
  mainWithPadding: {
    flex: 1,
    paddingHorizontal: hp(20),
    backgroundColor: colors.Main_Dark,
  },
});
