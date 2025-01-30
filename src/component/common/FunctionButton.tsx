import React, { FC } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { commonFontStyle, hp, wp } from "../../theme/fonts";

type Props = {
  onPress: () => void;
  titleOne: string;
  titleSecond: string;
  SvgOne: React.FC<{ width: number; height: number }>;
  SvgSecond?: React.FC<{ width: number; height: number }>;
  isSecondSvg: boolean;
  isDelete: boolean;
};

const FunctionButton: FC<Props> = ({
  onPress,
  titleOne,
  titleSecond,
  SvgOne,
  SvgSecond,
  isSecondSvg,
  isDelete,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.leftContainer}>
        <SvgOne width={24} height={24} />
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
        {isSecondSvg && SvgSecond && <SvgSecond width={16} height={16} />}
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
    paddingVertical: hp(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
