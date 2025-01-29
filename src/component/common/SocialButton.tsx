import React, {FC, ReactNode} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {colors} from '../../theme/colors';
import {commonFontStyle, wp} from '../../theme/fonts';

type Props = {
  onPress?: () => void;
  btnStyle?: ViewStyle;
  leftImg?: ReactNode;
};
const SocialButton: FC<Props> = ({btnStyle, leftImg, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[styles.buttonStyle, btnStyle]}>
      <Image source={leftImg} />
    </TouchableOpacity>
  );
};
export default SocialButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 9,
    gap: wp(20),
  },
  text: {},
});
