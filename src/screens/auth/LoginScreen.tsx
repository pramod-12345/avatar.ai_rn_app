import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import CommonInput from '../../component/common/CommonInput';
import {AppStyles} from '../../theme/appStyles';
import {colors, colors as COLORS} from '../../theme/colors';
import CommonButton from '../../component/common/CommonButton';
import {commonFontStyle, hp} from '../../theme/fonts';
import {IMAGES} from '../../assets/Images';
import SocialButton from '../../component/common/SocialButton';
import {navigationRef} from '../../navigation/RootContainer';
import {SCREENS} from '../../navigation/screenNames';
import GoogleSvg from '../../assets/svg/google.svg';
import FacebookSvg from '../../assets/svg/facebook.svg';
import XSvg from '../../assets/svg/x.svg';
import SvgButton from '../../component/common/SvgButton';

type Props = {
  placeholder: string;
};

const LoginScreen = (props: Props) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getGlobalStyles({colors}), [colors]);
  const goToSignUp = () => {
    navigationRef.navigate(SCREENS.SignUpScreen);
  }

  return (
    <ImageBackground source={IMAGES.LoginBg} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={[AppStyles.mainWithPadding, styles.container]}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.headerContainer}>
              <Image
                source={IMAGES.AvatarIcon}
                style={{alignSelf: 'center', marginVertical: '25%'}}
              />
              <Text style={STYLES.loginText}>Login to your Account with</Text>
            </View>

            <View style={styles.formContainer}>
              <CommonInput placeholder="Email" />
              <CommonInput placeholder="Password" isPassword />
              <Text style={[STYLES.forgetText, {marginVertical: -20}]}>
                Forget Password
              </Text>
              <CommonButton
                btnStyle={STYLES.btn}
                title="Login"
                onPress={() => navigationRef.navigate(SCREENS.BottomTabNavigator)}
              />
            </View>

            <View style={styles.separator}></View>

            <Text style={STYLES.loginWithText}>Or Login with</Text>

            <View style={styles.socialButtonsContainer}>
            <SvgButton SvgComponent={GoogleSvg} width={34} height={34} isSocial={true}/>
             <SvgButton SvgComponent={FacebookSvg} width={34} height={34} isSocial={true}/>
             <SvgButton SvgComponent={XSvg} width={28} height={28} isSocial={true}/>
            </View>

            <Text
              style={[
                STYLES.loginWithText,
                {marginTop: hp(100), marginBottom: hp(20), textAlign: 'center'},
              ]}>
              Don’t have an account?{' '}
              <Text
                style={[STYLES.loginWithText, {color: COLORS.color_prime}]}
                onPress={() => goToSignUp()}>
                Sign Up
              </Text>
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginScreen;

const STYLES = StyleSheet.create({
  loginText: {
    ...commonFontStyle(500, 20, COLORS.Light_text),
    marginBottom: hp(20),
    alignSelf:'flex-start'
  },
  btn: {
    marginBottom: hp(20),
  },
  forgetText: {
    ...commonFontStyle(400, 14, COLORS.color_prime),
    textAlign: 'right',
  },
  loginWithText: {
    ...commonFontStyle(500, 15, COLORS.Light_text),
    textAlign: 'center',
    marginTop: hp(20),
    marginBottom: hp(80),
  },
});

const getGlobalStyles = (props: any) => {
  const {colors} = props;

  return StyleSheet.create({
    container: {
      flex: 1, // This ensures the container takes up the full height
      justifyContent: 'space-between', // Adjust space distribution
      backgroundColor: 'transparent', // Set the background color to transparent
    },
    headerContainer: {
      flex: 1, // Ensures the header (image and text) are on top and can expand
      justifyContent: 'center',
      alignItems: 'center',
    },
    gapBetweenSections: {
      gap: 39,
    },
    formContainer: {
      gap: 35,
    },
    separator: {
      borderColor: 'rgba(97, 88, 88, 0.78)',
      borderWidth: 1,
      width: '70%',
      alignSelf: 'center',
    },
    socialButtonsContainer: {
      gap: 20,
      flexDirection: 'row',
      alignSelf: 'center',
    },
  });
};
