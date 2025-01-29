import React, {FC, ReactNode} from 'react';
import {
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
  isFilled?: boolean;
  title: any;
  onPress?: () => void;
  btnStyle?: ViewStyle;
  leftImg?: ReactNode;
  textStyle?: TextStyle;
};
const CommonButton: FC<Props> = ({
  title,
  btnStyle,
  isFilled = true,
  leftImg,
  textStyle,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        styles.buttonStyle,
        {backgroundColor: isFilled ? colors.color_prime : 'transparent'},
        btnStyle,
      ]}>
      {leftImg && leftImg}
      <Text
        style={[
          styles.text,
          commonFontStyle(
            700,
            16,
            isFilled ? colors.white : colors.text_selected,
          ),
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CommonButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.text_selected,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: wp(25),
    borderRadius: 9,
    gap: wp(20),
    height: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.text_selected,
  },
  text: {
    // lineHeight: hp(30),
  },
});
