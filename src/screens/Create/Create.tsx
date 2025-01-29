import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import { AppStyles } from '../../theme/appStyles'
import CreateAvatarSvg from '../../assets/svg/create_avatar.svg'
import Header from '../../component/common/Header'
import { commonFontStyle, hp, wp } from '../../theme/fonts'
import ArrowSvg from '../../assets/svg/arrow.svg';
import GroupSvg from '../../assets/svg/createGroup.svg';
import PersonaSvg from '../../assets/svg/createPersona.svg';
import PartnerSvg from '../../assets/svg/createPartner.svg';
import RightArrowSvg from '../../assets/svg/arrow_right.svg';

const Create = () => {

const Avatars = [
  {id:1,title:'Create a New Avatar!',description:'Give your avatar a personality, define how it should behave',svg:CreateAvatarSvg},
  {id:2,title:'Create a Group Chat',description:'Give your avatar a personality, define how it should behave',svg:GroupSvg},
  {id:3,title:'Create a Persona',description:'Give your avatar a personality, define how it should behave',svg:PersonaSvg},
  {id:4,title:'Create a Partner',description:'Give your avatar a personality, define how it should behave', svg:PartnerSvg},
]


  const renderAvatarItem = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.createContainer}>
        <item.svg/>
        { item.id === 4 ? 
          <>
        <View style={styles.createArrowContainer}>
          <View style={{borderColor:colors.create_bg,paddingVertical:wp(10),borderRadius:wp(10),flexDirection:'row',gap:hp(10),borderWidth:1,alignItems:'center',paddingHorizontal:wp(20)}}>
          <Text style={{...commonFontStyle(600,20,colors.white)}}>Create</Text>
          <RightArrowSvg/>

          </View>
        </View>
          <View style={styles.createAvatarTextContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.subText}>{item.description}</Text>
        </View>
          </>
        
        : 
          <>


          <View style={styles.avatarTextContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.subText}>{item.description}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <ArrowSvg/>
        </View>
          </>
        }
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[AppStyles.mainWithPadding, styles.container]}>
      <Header/>
      <View style={{paddingHorizontal:wp(20)}}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={Avatars}
        renderItem={renderAvatarItem}
        contentContainerStyle={styles.flatListContainer}
      />
        </View>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.light_black,
   
  },
  createContainer:{
    backgroundColor:colors.tag_bg,
    borderRadius:wp(15),
    
  },
  titleText:{
    ...commonFontStyle(400,24,colors.white),
  },
  subText:{
    ...commonFontStyle(400,12,colors.create_text),
    textAlign:'right'
  },
  createAvatarTextContainer: {
    position: 'absolute',
    bottom: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '68%',
    right: 20,
    gap: hp(10),
  },
  avatarTextContainer: {
    position: 'absolute',
    top: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '68%',
    right: 20,
    gap: hp(10),
  },
  arrowContainer: {
    position: 'absolute',
    bottom: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    right: 20,
    gap: hp(10),
  },
  createArrowContainer: {
    position: 'absolute',
    top: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    right: 20,
    gap: hp(10),
  },
  flatListContainer: {
    paddingTop: hp(30),
    paddingBottom: hp(120),
    gap: hp(20),

  },
})