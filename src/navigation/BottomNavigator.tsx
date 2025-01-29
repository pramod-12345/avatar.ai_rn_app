import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonFontStyle, hp, wp} from '../theme/fonts';
import {useAppSelector} from '../redux/hooks';
import {colors} from '../theme/colors';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {SCREENS} from './screenNames';
import Explore from '../screens/Explore/Explore';
import Calls from '../screens/Calls/Calls';
import Chat from '../screens/Chat/Chat';
import Settings from '../screens/Setttings/Settings';
import Create from '../screens/Create/Create';
import {IMAGES} from '../assets/Images'; // Assuming you have image assets for icons
import CreateSvg from '../assets/svg/create.svg';
import CallSvg from '../assets/svg/call.svg';
import ChatSvg from '../assets/svg/chat.svg';
import ExploreSvg from '../assets/svg/explore.svg';
import SettingSvg from '../assets/svg/setting.svg';

import CreateSelectSvg from '../assets/svg/select_create.svg';
import CallSelectSvg from '../assets/svg/select_call.svg';
import ChatSelectSvg from '../assets/svg/select_chat.svg';
import ExploreSelectSvg from '../assets/svg/select_explore.svg';
import SettingSelectSvg from '../assets/svg/select_setting.svg';

const Tab = createBottomTabNavigator();

const getIcons = (key: number) => {
  switch (key) {
    case 0:
      return <CreateSvg/> // Replace with your actual image or icon
    case 1:
      return <CallSvg/> // Replace with your actual image or icon
    case 2:
      return <ChatSvg/> // Replace with your actual image or icon
    case 3:
      return <ExploreSvg/> // Replace with your actual image or icon
    case 4:
      return <SettingSvg/> // Replace with your actual image or icon
    default:
      return null;
  }
};

const getSelectedIcons = (key: number) => {
  switch (key) {
    case 0:
      return <CreateSelectSvg/> // Replace with your actual image or icon
    case 1:
      return <CallSelectSvg width={24} height={24}/> // Replace with your actual image or icon
    case 2:
      return <ChatSelectSvg/> // Replace with your actual image or icon
    case 3:
      return <ExploreSelectSvg /> // Replace with your actual image or icon
    case 4:
      return <SettingSelectSvg/> // Replace with your actual image or icon
    default:
      return null;
  }
};

const TabBarItem = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <SafeAreaView style={styles.itemContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const icon = isFocused ? getSelectedIcons(index) : getIcons(index);

        return (
          <Pressable
            key={route.key}
            onPress={onPress}
            style={styles.itemViewContainer}>
            {React.isValidElement(icon) ? (
              icon // Render SVG Component directly
            ) : (
              <Image
                source={icon} // Render as Image for non-SVG icons
                resizeMode="contain"
                style={styles.itemIconStyle}
              />
            )}
            <Text
              style={[
                styles.labelStyle,
                { color: isFocused ? colors.text_selected : colors.nav_title },
              ]}>
              {route.name} {/* Display route name as label */}
            </Text>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};



const headerStyleTransparent = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};


function BottomTabNavigator() {
  return (
    <Tab.Navigator
    tabBar={props => <TabBarItem {...props} />}
    initialRouteName={SCREENS.Create}
    screenOptions={{
      headerShown: false,
    }}>
        <Tab.Screen
          name={SCREENS.Create}
          options={{
            tabBarLabel: 'Create',
          }}
          component={Create}
        />
        <Tab.Screen
          name={SCREENS.Calls}
          options={{
            tabBarLabel: 'Calls',
          }}
          component={Calls}
        />
      <Tab.Screen
        name={SCREENS.Chat}
        options={{
          tabBarLabel: 'Chat',
        }}
        component={Chat}
      />
        <Tab.Screen
          name={SCREENS.Explore}
          options={{
            tabBarLabel: 'Explore',
           
          }}
          
          component={Explore}
        />
      <Tab.Screen
        name={SCREENS.Settings}
        options={{
          tabBarLabel: 'Settings',
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  itemIconStyle: {
    height: hp(29),
    width: wp(28),
  },
  itemContainer: {
    height: hp(70),
    borderTopWidth: hp(0.5),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light_black,
    justifyContent: 'space-between',
    borderTopColor: colors.light_black,
  },
  itemViewContainer: {
    flex: 1,
    height: hp(60),
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? hp(30) : 0,
  },
  labelStyle: {
    marginTop: 5, // Add spacing between icon and label
    fontSize: 12, // Set label font size
    fontWeight: '500',
  },
});


export default BottomTabNavigator;
