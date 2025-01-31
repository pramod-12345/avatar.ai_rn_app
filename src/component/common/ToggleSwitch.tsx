import React, { FC, useState, useEffect } from "react";
import { View, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { hp, wp } from "../../theme/fonts";
import { colors } from "../../theme/colors";

type ToggleSwitchProps = {
  isOn?: boolean;
  onToggle?: (state: boolean) => void;
  activeColor?: string;
  inactiveColor?: string;
  size?: number;
};

const ToggleSwitch: FC<ToggleSwitchProps> = ({ 
  isOn = false, 
  onToggle = () => {}, 
  activeColor , 
  inactiveColor , 
  size = 50 
}) => {
  const [toggle, setToggle] = useState(isOn);
  const animatedValue = new Animated.Value(isOn ? 1 : 0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: toggle ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [toggle]);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    onToggle(!toggle);
  };

  const switchColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [inactiveColor, activeColor],
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, size - size /1.7], // Adjust based on size
  });

  return (
    <TouchableOpacity onPress={handleToggle} activeOpacity={0.8}>
      <Animated.View style={[styles.switch, { backgroundColor: switchColor, height: hp(28) }]}>
        <Animated.View style={[styles.circle, { transform: [{ translateX }], width: wp(20), height: hp(20) }]} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switch: {
    borderRadius: 50,
    paddingHorizontal: wp(22.5),
    justifyContent: "center",
  },
  circle: {
    backgroundColor: colors.white,
    borderRadius: 50,
    position: "absolute",
  },
});

export default ToggleSwitch;
