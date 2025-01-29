
export const SCREENS = {
  HomeScreen: 'HomeScreen',
  LoginScreen: 'LoginScreen',
  SplashScreen: 'SplashScreen',
  WelcomeScreen: 'WelcomeScreen',
  SignUpScreen: 'SignUpScreen',
  Settings: 'Settings',
  Calls: 'Calls',
  Chat: 'Chat',
Create: 'Create',
Explore:'Explore',
BottomTabNavigator:'BottomTabNavigator'

};

export interface ScreenNames {
  [key: string]: string;
  HomeScreen: string;
  LoginScreen: string;
  SplashScreen: string;
  WelcomeScreen: string;
  SignUpScreen: string;
  Settings: string;
  Calls: string;
  Chat: string;
Create: string;
Explore:string;
BottomTabNavigator:string;
}

export const SCREEN_NAMES: ScreenNames = {
  ...SCREENS,
};
