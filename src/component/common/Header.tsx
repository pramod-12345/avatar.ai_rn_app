import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LogoSVG from '../../assets/svg/Logo.svg';
import ProSvg from '../../assets/svg/Pro.svg';
import NotificationSvg from '../../assets/svg/notification.svg';
import UserIconSvg from '../../assets/svg/userIcon.svg';
import { colors } from '../../theme/colors';
import { commonFontStyle, hp } from '../../theme/fonts';
import SvgButton from './SvgButton';

// Custom SVG Button Component


const Header = () => {
  const handleNotificationPress = () => {
    console.log('Notification clicked');
  };

  const handleUserPress = () => {
    console.log('User clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <LogoSVG width={95} height={25} />
        <SvgButton
          SvgComponent={ProSvg}
          width={58}
          height={30}
          onPress={handleNotificationPress}
        />
      </View>
      <View style={styles.rightContainer}>
        <SvgButton
        isNotification={true}
          SvgComponent={NotificationSvg}
          width={34}
          height={35}
          onPress={handleNotificationPress}
        />
        <SvgButton
          SvgComponent={UserIconSvg}
          width={36}
          height={36}
          onPress={handleUserPress}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light_black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:hp(7)
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
 
});
