import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { commonFontStyle, hp, wp } from "../../theme/fonts";

interface LabelInputProps {
  label: string;
  placeholder: string;
  maxLength: number;
  onChange: (text: string) => void;
  value: string;
  numberOfLines:number;
  multiline: boolean;
  editable: boolean;
  isLimit: boolean;
  width: string
}

const LabelInput: React.FC<LabelInputProps> = ({
  label,
  placeholder,
  maxLength,
  onChange,
  value,
  numberOfLines,
  multiline,
  editable,
  isLimit = true,
  width = '100%'
}) => {
  const [charCount, setCharCount] = useState<number>(value.length);

  const handleChangeText = (text: string) => {
    setCharCount(text.length);
    onChange(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
      numberOfLines={numberOfLines}
        placeholderTextColor={colors.input_text}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        multiline={multiline}
        onChangeText={handleChangeText}
        style={[styles.input,{    width:width        }]}
        editable={editable}
      />
      { isLimit &&

        <View style={styles.charCountContainer}>
        <Text style={styles.charCount}>{charCount}</Text>
        <Text style={styles.charCount}>/</Text>
        <Text style={styles.charCount}>{maxLength}</Text>
      </View>
      }
    </View>
  );
};

export default LabelInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(20),
    gap: hp(10),
  },
  label: {
    ...commonFontStyle(500, 15, colors.label_text),
  },
  input: {
    paddingVertical: hp(15),
    paddingHorizontal: wp(10),
    backgroundColor: colors.input_bg,
    borderColor: colors.tag_bg,
    borderWidth: 1,
    borderRadius: hp(5),
    color: colors.white,
    alignSelf:'center'
  },
  charCountContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  charCount: {
    ...commonFontStyle(400, 15, colors.input_limit_text),
  },
  
});
