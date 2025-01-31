import {
    SafeAreaView,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground,
    FlatList,
  } from "react-native";
  import React, { useState } from "react";
  import BackHeader from "../../component/common/BackHeader";
  import { AppStyles } from "../../theme/appStyles";
  import { colors } from "../../theme/colors";
  import { commonFontStyle, hp, wp } from "../../theme/fonts";
  import { IMAGES } from "../../assets/Images";
import Post from "../Explore/Post";
import CommonModal from "../../component/common/CommonModal";
  
  const OtherUserProfile = () => {
    const [selectedOption, setSelectedOption] = useState("avatar");
const [isVisible,setIsVisible] = useState(false)
    const OPTIONS = [
        { id: "avatar", label: "Avatar" },
        { id: "voice", label: "Voices" },
      ];


      const post = [
          {
            id: 1,
            image: IMAGES.postImg,
            username: '@Strawbery_88',
            title: 'Mafia Boss Fleena',
            description:
              'After a fling you end up pregnant. After a fling you end up pregnant fling you end up',
            numberOfLikes: '9.4k',
            numberOfComments: '74.3M',
          },
          {
            id: 2,
            image: IMAGES.postImg1,
            username: '@cooldude69',
            title: 'Guy best friend',
            description:
              'After a fling you end up pregnant. After a fling you end up pregnant fling you end up',
            numberOfLikes: '9.4k',
            numberOfComments: '74.3M',
          },
          {
            id: 3,
            image: IMAGES.postImg2,
            username: '@luveveryone',
            title: 'Tarot Master',
            description:
              'After a fling you end up pregnant. After a fling you end up pregnant fling you end up',
            numberOfLikes: '9.4k',
            numberOfComments: '74.3M',
          },
          {
            id: 4,
            image: IMAGES.postImg3,
            username: '@starsspookie',
            title: 'Personal Assistant',
            description:
              'After a fling you end up pregnant. After a fling you end up pregnant fling you end up',
            numberOfLikes: '9.4k',
            numberOfComments: '74.3M',
          },
        ];


    return (
      <SafeAreaView style={[AppStyles.mainWithPadding, styles.safeArea]}>
        <ImageBackground source={IMAGES.profileBg} style={styles.profileBg}>
          <BackHeader
            title=""
            isBackHeader={true}
            isCross={false}
            backgroundColor={"transparent"}
            isInfo={false}
          />
          <View style={styles.profileContainer}>
            <View style={styles.profileInfo}>
              <Image source={IMAGES.userProfile} style={styles.profileImage} />
              <Text style={styles.username}>@noob_master</Text>
            </View>
            <View style={{gap:hp(20)}}>
              <Text style={styles.name}>Rossell Bernitee</Text>
              <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>21</Text>
                  <Text style={styles.statLabel}>Avatars</Text>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>1.3M</Text>
                  <Text style={styles.statLabel}>Following</Text>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statNumber}>5M</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>
              </View>
              <View style={{flexDirection:'row' ,justifyContent: 'space-between',width:'77.5%'}}>
<TouchableOpacity style={{borderColor:colors.text_selected,borderWidth:1,width:wp(97),height:hp(27),alignItems:'center',justifyContent:'center', borderRadius:hp(2)}}>
<Text style={{...commonFontStyle(500,12,colors.text_selected)}}>
Follow
</Text>
</TouchableOpacity>
<TouchableOpacity style={{borderColor:colors.report_text,borderWidth:1,width:wp(97),height:hp(27),alignItems:'center',justifyContent:'center', borderRadius:hp(2)}} onPress={() => setIsVisible(true)}>
<Text style={{...commonFontStyle(500,12,colors.report_text)}}>
Report
</Text>
</TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
       
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
          
          >

              <FlatList
                      data={OPTIONS}
                      horizontal
                      keyExtractor={(item) => item.id}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={[
                            styles.optionButton,
                            selectedOption === item.id && styles.selectedOption, // Highlight selection
                          ]}
                          onPress={() => setSelectedOption(item.id)}
                        >
                          <Text
                            style={[
                              styles.optionText,
                              selectedOption === item.id && styles.selectedText, // Change text color on selection
                            ]}
                          >
                            {item.label}
                          </Text>
                        </TouchableOpacity>
                      )}
                      contentContainerStyle={styles.listContainer}
                    />

<Post  Post={post} />
            </ScrollView>
       <CommonModal visible={isVisible} titleMain={'Report Character'} description={"Are you sure you want to report this Character from the list?"} firstButtonText="Cancel " secondButtonText="OK" cancelButtonOnPress={() => setIsVisible(false)}/>
      </SafeAreaView>
    );
  };
  
  export default OtherUserProfile;
  
  const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: colors.light_black,
    },
    profileBg: {
      height: hp(259),
      gap: hp(20),
    },
    profileContainer: {
      width: "90%",
      alignSelf: "center",
      flexDirection: "row",
      gap: hp(20),
    },
    profileInfo: {
      gap: hp(10),
    },
    profileImage: {
      width: wp(101),
      height: hp(101),
    },
    username: {
      ...commonFontStyle(500, 12, colors.username_color),
      alignSelf:'center'
    },
    name: {
      ...commonFontStyle(600, 16, colors.white),
    },
    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "75%",
    },
    statBox: {
      alignItems: "center",
    },
    statNumber: {
      ...commonFontStyle(600, 13, colors.avatar_color),
    },
    statLabel: {
      ...commonFontStyle(400, 13, colors.avatar_color),
    },
    container: {
      flex: 1,
      paddingHorizontal: wp(20),
    },
    scrollContainer: {
    //   flexGrow: 1,
      paddingBottom: hp(25),
      paddingHorizontal:wp(20)
    },
    listContainer: {
        gap: wp(15), 
        paddingTop:hp(20)
      },
      optionButton: {
      height:hp(36),
      width:wp(71),
        borderRadius: hp(5),
        borderWidth: 1,
        borderColor: colors.tag_bg,
        backgroundColor: colors.tag_bg,
        alignItems:'center',
        justifyContent:'center',
        
      },
      selectedOption: {
        backgroundColor: colors.text_selected, 
      },
      optionText: {
        ...commonFontStyle(400, 12, colors.add_text_color),
      },
      selectedText: {
        color: colors.tag_text, // Change text color when selected
      },
  });
  