import React, { FC, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { commonFontStyle, hp, wp } from "../../theme/fonts";
import ToggleSwitch from "./ToggleSwitch";

type Props = {
  onPress: () => void;
  titleOne: string;
  titleSecond: string;
  SvgOne: React.FC<{ width: number; height: number }>;
  SvgSecond: React.FC<{ width: number; height: number }>;
  isSecondSvg: boolean;
  isFirstSvg: boolean;
  isDelete: boolean;
  isToggleSwitch: boolean;
  isDisabled: boolean;
  activeColor: any;
  width: any;
  paddingVertical:any;
  key:any;
};

const FunctionButton: FC<Props> = ({
  onPress,
  titleOne,
  titleSecond,
  SvgOne,
  SvgSecond,
  isSecondSvg,
  isDelete,
  isToggleSwitch,
  isDisabled,
  isFirstSvg = true,
  activeColor = colors.toggle_on,
  width = '100%',
  paddingVertical = hp(15),
  key,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.button,{    width: width,
        paddingVertical: paddingVertical,

      }]}
      onPress={onPress}
      disabled={isDisabled}
      key={key}
    >
      <View style={styles.leftContainer}>
        {isFirstSvg && <SvgOne width={24} height={24} />}
        <Text
          style={[
            styles.text,
            { color: isDelete ? colors.delete_color : colors.input_text },
          ]}
        >
          {titleOne}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>{titleSecond}</Text>
        {isSecondSvg && <SvgSecond width={16} height={16} />}
        {isToggleSwitch && (
          <ToggleSwitch
            isOn={isEnabled}
            onToggle={setIsEnabled}
            activeColor={activeColor}
            inactiveColor={colors.toggle_off}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.input_bg,
    borderColor: colors.tag_bg,
    borderWidth: 1,
    borderRadius: hp(5),
    paddingHorizontal: wp(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf:'center'
  },
  leftContainer: {
    gap: hp(10),
    flexDirection: "row",
    alignItems: "center",
  },
  rightContainer: {
    gap: hp(10),
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    ...commonFontStyle(400, 15, colors.input_text),
  },
});

export default FunctionButton;
