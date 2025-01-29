import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors';
import { commonFontStyle, hp } from '../../theme/fonts';

const SvgButton = ({ SvgComponent, width, height, onPress, isNotification,isSocial }:any) => (
    <TouchableOpacity  onPress={onPress} style={[styles.svgButton,{backgroundColor: isSocial ? colors.white : 'transparent',borderRadius:'100%',width:47,height:47}]}>
      {isNotification &&
  
        <View style={styles.notification}>
          <Text style={styles.notificationNumber}>5</Text>
      </View>
      }
  
      <SvgComponent width={width} height={height} />
    </TouchableOpacity>
  );

export default SvgButton

const styles = StyleSheet.create({
    svgButton: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    notification: {
        backgroundColor: colors.noti_orange,
        width: 17,
        height: 17,
        borderRadius: 10,
        position: 'absolute',
        top: hp(6),
        right: hp(5),
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
      },
      notificationNumber:{...commonFontStyle(600,11,colors.white)}
})