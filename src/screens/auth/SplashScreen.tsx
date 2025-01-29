import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {resetNavigation} from '../../utils/commonFunction';
import {SCREENS} from '../../navigation/screenNames';
import {IMAGES} from '../../assets/Images';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../theme/fonts';
import {colors} from '../../theme/colors';

type Props = {};

const SplashScreen = (props: Props) => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      resetNavigation(SCREENS.WelcomeScreen);
    }, 3000);
  }, []);

  return (
    <ImageBackground
      resizeMode="cover"
      source={IMAGES.splash}
      style={styles.splashImage}
    />
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashImage: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: colors.Main_Dark,
  },
});
