import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import {AppStyles} from '../../theme/appStyles';
import Header from '../../component/common/Header';
import ChatScreenSvg from '../../assets/svg/chatDesign.svg';
import {commonFontStyle, hp} from '../../theme/fonts';
import CallSvg from '../../assets/svg/select_call.svg';
import RecentChatSvg from '../../assets/svg/recentChat.svg';
import ChatList from './ChatList';
import { IMAGES } from '../../assets/Images';

const Chat = () => {

const chat = [
  {id:1,name:'Barney Stinson',interaction:'74.3M',likes:'9.4k',profilePhoto:IMAGES.pfp},
  {id:2,name:'Darlene Robertson',interaction:'74.3M',likes:'536',profilePhoto:IMAGES.pfp},
  {id:3,name:'Floyd Miles',interaction:'74.3M',likes:'994',profilePhoto:IMAGES.pfp},
  {id:4,name:'Ronald Richards',interaction:'74.3M',likes:'600',profilePhoto:IMAGES.pfp},
  {id:5,name:'Jenny Wilson',interaction:'74.3M',likes:'185',profilePhoto:IMAGES.pfp},
  {id:6,name:'Annette Black',interaction:'74.3M',likes:'561',profilePhoto:IMAGES.pfp},
]


  return (
    <SafeAreaView style={[AppStyles.mainWithPadding, styles.container]}>
      <Header />
      <View style={styles.chatContainer}>
        <ChatScreenSvg />
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Talk live with your Avatars</Text>
          <View style={styles.callContainer}>
            <Text style={styles.subText}>Try with Barney Stinson</Text>
            <TouchableOpacity style={styles.callButton}>
              <CallSvg width={11.25} height={16.07} />
              <Text style={styles.callButtonText}>Call Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <RecentChatSvg/>
      <ChatList Chat={chat}/>
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light_black,
  },
  chatContainer: {
    position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(10),
          marginBottom:'10%'
  },
  textContainer: {
    width: '70%', 
    position: 'absolute',
     gap: hp(40),
     bottom:'50%'

  },
  titleText: {
    ...commonFontStyle(700, 20, colors.white),
  },
  callContainer: {
    position: 'absolute',
    bottom: '-170%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: hp(20),
  },
  subText: {
    ...commonFontStyle(400, 13, colors.grey_text),
  },
  callButton: {
    borderColor: colors.call_now_blue,
    padding: hp(5),
    borderRadius: hp(4.02),
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: hp(5),
  },
  callButtonText: {
    ...commonFontStyle(700, 12.85, colors.call_now_blue),
  },
});