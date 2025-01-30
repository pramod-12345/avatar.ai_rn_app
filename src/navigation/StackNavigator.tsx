import {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppDispatch} from '../redux/hooks';
import {colors} from '../theme/colors';
import {Text} from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import {ScreenNames, SCREENS} from './screenNames';
import LoginScreen from '../screens/auth/LoginScreen';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import {SET_FCM_TOKEN} from '../redux/actionTypes';
import SplashScreen from '../screens/auth/SplashScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import Explore from '../screens/Explore/Explore';
import Calls from '../screens/Calls/Calls';
import Chat from '../screens/Chat/Chat';
import Create from '../screens/Create/Create';
import Settings from '../screens/Setttings/Settings';
import BottomTabNavigator from './BottomNavigator';
import CreatePersona from '../screens/Create/CreatePersona';
import AvatarScreen from '../screens/Create/AvatarScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
};
const headerStyleTransparent = {
  headerStyle: {
    backgroundColor: colors.white,
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleStyle: {
    // ...commonFontStyle(i18n.language, 500, 19, colors.black),
  },
  headerTitleAlign: 'center',
  // ...TransitionPresets.SlideFromRightIOS,
};
const Stack = createStackNavigator<ScreenNames>();

const LogoHeader = () => {
  return <Text>hi</Text>;
};

const StackNavigator: FC = () => {
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   messaging().setAutoInitEnabled(true);
  //   setNotification();
  // }, []);
  // const setNotification = async () => {
  //   let authStatus = await firebase.messaging().hasPermission();

  //   if (authStatus !== firebase.messaging.AuthorizationStatus.AUTHORIZED) {
  //     requestPermission();
  //   }

  //   if (authStatus === firebase.messaging.AuthorizationStatus.AUTHORIZED) {
  //     getToken();
  //   }
  // };
  // const requestPermission = () => {
  //   messaging()
  //     .requestPermission({
  //       alert: true,
  //       announcement: false,
  //       badge: true,
  //       carPlay: true,
  //       provisional: false,
  //       sound: true,
  //     })
  //     .then(() => {
  //       getToken();
  //     })
  //     .catch(error => {
  //       console.log('error', error);
  //     });
  // };
  // const getToken = async () => {
  //   messaging()
  //     .getToken()
  //     .then(fcmToken => {
  //       if (fcmToken) {
  //         console.log('fcm--', fcmToken);
  //         dispatchAction(dispatch, SET_FCM_TOKEN, fcmToken);
  //       } else {
  //         console.log('[FCMService] User does not have a device token');
  //       }
  //     })
  //     .catch(error => {
  //       let err = `FCm token get error${error}`;
  //       console.log(err);
  //     });
  // };
  //   const checkNotification = (remoteMessage: any) => {};
  // useEffect(() => {
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     if (remoteMessage) {
  //       console.log(
  //         'Notification caused app to open from background state:',
  //         remoteMessage.notification,
  //       );
  //       checkNotification(remoteMessage);
  //     }
  //   });
  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       console.log('getInitialNotification', remoteMessage);
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //       checkNotification(remoteMessage);
  //     });
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Message handled in the background!', remoteMessage);
  //     checkNotification(remoteMessage);
  //   });
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log('A new FCM message arrived!', remoteMessage);
  //     checkNotification(remoteMessage);
  //     onDisplayNotification(remoteMessage);
  //   });
  //   return unsubscribe;
  // }, []);
  // async function onDisplayNotification(message: any) {
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission();

  //   const channelId = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //     importance: AndroidImportance.HIGH,
  //   });
  //   notifee.displayNotification({
  //     title: message.notification.title,
  //     body: message.notification.body,
  //     android: {
  //       channelId,
  //       smallIcon: 'ic_stat_name',
  //       sound: 'noti.mp3',
  //     },
  //     ios: {
  //       sound: 'noti.wav',
  //     },
  //   });
  // }

  return (
    <Stack.Navigator initialRouteName={SCREENS.SplashScreen}>
      <Stack.Screen
        options={({navigation}) => ({headerShown: false})}
        name={SCREENS.SplashScreen}
        component={SplashScreen}
      />
      <Stack.Screen
        options={({navigation}) => ({headerShown: false})}
        name={SCREENS.WelcomeScreen}
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={({navigation}) => ({headerShown: false})}
        name={SCREENS.LoginScreen}
        component={LoginScreen}
      />
      <Stack.Screen
        options={({navigation}) => ({headerShown: false})}
        name={SCREENS.SignUpScreen}
        component={SignUpScreen}
      />
      <Stack.Screen
        options={({navigation}) => ({headerShown: false})}
        name={SCREENS.HomeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        options={({navigation}) => ({headerShown: false})}
        name={SCREENS.BottomTabNavigator}
        component={BottomTabNavigator}
      />
        <Stack.Screen
        options={({navigation}) => ({headerShown: false})}
        name={SCREENS.CreatePersona}
        component={CreatePersona}
      />
      <Stack.Screen
        options={({navigation}) => ({headerShown: false})}
        name={SCREENS.AvatarScreen}
        component={AvatarScreen}
      />
     
    </Stack.Navigator>
  );
};
export default StackNavigator;
