import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppStyles} from '../../theme/appStyles';
import {IMAGES} from '../../assets/Images';
import {
  commonFontStyle,
  hp,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../theme/fonts';
import {colors} from '../../theme/colors';
import CommonButton from '../../component/common/CommonButton';
import {navigationRef} from '../../navigation/RootContainer';
import {SCREEN_NAMES, SCREENS} from '../../navigation/screenNames';

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <View style={AppStyles.mainWithPadding}>
      <SafeAreaView>
        <Image source={IMAGES.welcomeBg} style={styles.welcomeImage} />
        <Text style={styles.welcomeText}>
          Unlock your imagination with{' '}
          <Text style={styles.blueText}>AI personalities you create</Text>
        </Text>
        <CommonButton
          btnStyle={styles.btn}
          title={'Sign Up'}
          isFilled={false}
          onPress={
            () => navigationRef.navigate(SCREEN_NAMES.SignUpScreen)
          }
        />
        <CommonButton
          btnStyle={styles.btn}
          title={'Login'}
          onPress={() => navigationRef.navigate(SCREEN_NAMES.LoginScreen)}
        />
        <Text style={styles.bottomText}>
          By continuing you agree to our{' '}
          <Text style={{color: colors.text_selected}}>Terms of Service</Text>{' '}
          and <Text style={{color: colors.text_selected}}>Privacy Policy</Text>
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeImage: {
    height: SCREEN_HEIGHT / 2.3,
    resizeMode: 'contain',
    width: SCREEN_WIDTH - hp(40),
    marginTop: hp(20),
  },
  welcomeText: {
    ...commonFontStyle(500, 24, colors.white),
    marginVertical: hp(40),
  },
  blueText: {
    ...commonFontStyle(700, 24, colors.text_selected),
  },
  bottomText: {
    ...commonFontStyle(500, 12, colors.Light_text),
  },
  btn: {
    marginBottom: hp(20),
  },
});
