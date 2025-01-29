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
import { navigationRef } from '../../navigation/RootContainer';
import { SCREEN_NAMES } from '../../navigation/screenNames';
import GoogleSvg from '../../assets/svg/google.svg';
import FacebookSvg from '../../assets/svg/facebook.svg';
import XSvg from '../../assets/svg/x.svg';
import SvgButton from '../../component/common/SvgButton';
import LogoSVG from '../../assets/svg/Logo.svg';


type Props = {
  placeholder: string;
};

const SignUpScreen = (props: Props) => {
  const {colors} = useTheme();
  const styles = React.useMemo(() => getGlobalStyles({colors}), [colors]);

  const goToLogin = () => {
    navigationRef.navigate(SCREEN_NAMES.LoginScreen)
  }

  return (
    <ImageBackground source={IMAGES.LoginBg} style={{flex: 1}}>
         <SafeAreaView style={{flex: 1}}>
           <View style={[AppStyles.mainWithPadding, styles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View             style={{alignSelf: 'center', marginVertical: '  20%'}}
          >

        <LogoSVG width={142} height={40} />

          </View>
          <View style={styles.gapBetweenSections}>
            <Text style={STYLES.loginText}>Create your Account </Text>

            <View style={styles.formContainer}>
              <CommonInput placeholder="Email" />
              <CommonInput placeholder="Password" isPassword />
              <CommonInput placeholder="Confirm Password" isPassword />

              <CommonButton
                btnStyle={STYLES.btn}
                title="Sign Up"
                onPress={() => navigationRef.navigate(SCREEN_NAMES.BottomTabNavigator)}
              />
            </View>

            <View style={styles.separator}></View>

            <Text style={STYLES.loginWithText}>Or Sign Up with</Text>

            <View style={{gap: 20, flexDirection: 'row', alignSelf: 'center'}}>
             <SvgButton SvgComponent={GoogleSvg} width={34} height={34} isSocial={true}/>
             <SvgButton SvgComponent={FacebookSvg} width={34} height={34} isSocial={true}/>
             <SvgButton SvgComponent={XSvg} width={28} height={28} isSocial={true}/>
            </View>
          </View>
          <Text
            style={[
              STYLES.loginWithText,
              {marginTop: hp(20), textAlign: 'center'},
            ]}>
            Already have an account?{' '}
            <Text style={[STYLES.loginWithText, {color: COLORS.color_prime}]} onPress={() => goToLogin()}>
              Login
            </Text>
          </Text>
        </ScrollView>
    </View>
      </SafeAreaView>
        </ImageBackground>
  );
};

export default SignUpScreen;

const STYLES = StyleSheet.create({
  loginText: {
    ...commonFontStyle(500, 20, COLORS.Light_text),
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
    gapBetweenSections: {
      gap: 39,
    },
    formContainer: {
      gap: 35,
    },
    separator: {
      borderColor: 'rgba(97, 88, 88, 0.78)',
      borderWidth: 1,
      width:'70%',
      alignSelf:'center'
    },
  });
};
