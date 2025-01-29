import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {commonFontStyle, hp, wp} from '../../theme/fonts';
import {colors} from '../../theme/colors';
import CommentSvg from '../../assets/svg/comment.svg';
import ThumbsupSvg from '../../assets/svg/thumbsup.svg';
import CallFillSvg from '../../assets/svg/call2.svg';

type ChatListProps = {
  Chat: {
    id: number;
    name: string;
    interaction: string;
    likes: string;
    profilePhoto: string;
  }[];
};

const ChatList: React.FC<ChatListProps> = ({Chat}) => {
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.chatContainer}>
        <View style={styles.userInfoContainer}>
          <Image source={item.profilePhoto} style={styles.imgContainer}/>
          <View style={styles.textContainer}>
            <Text style={styles.userName}>{item.name}</Text>
            <View style={styles.interactionContainer}>
              <View style={styles.statItem}>
                <CommentSvg />
                <Text style={styles.statText}>{item.interaction}</Text>
                <Text style={styles.statText}>Interactions</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.statItem}>
                <ThumbsupSvg />
                <Text style={styles.statText}>{item.likes}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.callButton}>
            <CallFillSvg/>
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={Chat}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

export default ChatList;

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hp(15),
  },
  textContainer: {
    gap: hp(5),
  },
  userName: {
    ...commonFontStyle(600, 15, colors.white),
  },
  interactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '68%',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    gap: hp(2),
  },
  statText: {
    ...commonFontStyle(400, 10, colors.border),
  },
  separator: {
    backgroundColor: colors.rectangle_color,
    height: 10,
    width: 1,
    borderRadius: 1,
  },
  callButton: {
    borderColor: colors.call_Border,
    borderWidth: 1,
    borderRadius: hp(5),
    paddingVertical: hp(7.5),
    paddingHorizontal: hp(10),
    flexDirection: 'row',
    gap: hp(5),
    alignItems: 'center',
    alignSelf: 'center',
  },
  callButtonText: {
    ...commonFontStyle(700, 14, colors.call_Border),
  },
  flatListContainer: {
    paddingHorizontal: hp(20),
    marginVertical: hp(30),
gap: hp(30),
  },
  imgContainer:{
    width:wp(42),
    height:hp(42),
    borderRadius:'100% '
  }
});