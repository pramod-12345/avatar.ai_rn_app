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
  } from "react-native";
  import React, { useState } from "react";
  import BackHeader from "../../component/common/BackHeader";
  import { AppStyles } from "../../theme/appStyles";
  import { colors } from "../../theme/colors";
  import { commonFontStyle, hp, wp } from "../../theme/fonts";
  import { IMAGES } from "../../assets/Images";
  import CommentSvg from "../../assets/svg/comment.svg";
  import ThumbsupSvg from "../../assets/svg/thumbsup.svg";
  import LabelInput from "../../component/common/LabelInput";
  import FunctionButton from "../../component/common/FunctionButton";
  import ToggleSwitch from "../../component/common/ToggleSwitch";
  import CommonInput from "../../component/common/CommonInput";
import CommonButton from "../../component/common/CommonButton";
  import DesignSvg from "../../assets/svg/design.svg"
  const ViewAvatarScreen = () => {
    const [name, setName] = useState('"Crafting my own masterpiece."');
    const [hiddenSecret, setHiddenSecret] = useState("");
    const [isEnabled, seIsEnabled] = useState(false);
  console.log(isEnabled);
  
    return (
      <SafeAreaView style={[AppStyles.mainWithPadding, styles.safeArea]}>
        <BackHeader title="" isBackHeader={false} isCross={true} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <ScrollView
              contentContainerStyle={styles.scrollContainer}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.profileContainer}>
                <View>
                  <Image source={IMAGES.profileBg} style={styles.profileBg} />
                  <View style={styles.profileInfoContainer}>
                    <Image
                      source={IMAGES.profileImage}
                      style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>Devin</Text>
                    <Text style={styles.profileCreator}>Created by @OG_Peru</Text>
                    <View style={styles.postStatsContainer}>
                      <View style={styles.statItem}>
                        <CommentSvg />
                        <Text style={styles.statText}>{"74.3M"}</Text>
                      </View>
                      <View style={styles.statItem}>
                        <ThumbsupSvg />
                        <Text style={styles.statText}>{"9.4k"}</Text>
                      </View>
                    </View>
                    <Text style={styles.description}>
                      I am Devin the fully automated AI singularity.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.formContainer}>
                <LabelInput
                  label="Long Bio"
                  placeholder="Your Bio "
                  multiline={true}
                  value={name}
                  numberOfLines={2}
                  editable={false}
                  isLimit={false}
                  onChange={(text) => setName(text)}
                  width={'110%'}
                />
                <LabelInput
                  label="Hidden Secrets(Optional)"
                  placeholder="What secrets your partners should have"
                  multiline={true}
                  value={hiddenSecret}
                  numberOfLines={2}
                  editable={false}
                  isLimit={false}
                  onChange={(text) => setHiddenSecret(text)}
                  width={'110%'}
                />
                <View style={styles.toggleSwitchContainer}>
                  <Text style={styles.toggleText}>Evolving Narratives</Text>
                  <ToggleSwitch
                    inactiveColor={colors.toggle_off}
                    activeColor={colors.toggle_on_2}
                    isOn={isEnabled}
                    onToggle={seIsEnabled}
                  />
                </View>
                {isEnabled && (
                  <CommonInput
                    width="100%"
                    backgroundColor={colors.input_bg}
                    placeholder="Write your narrative here"
                    placeholderTextColor={colors.input_text}
                  />
                )}

              </View>
              <View style={styles.buttonContainer}>
              <CommonButton isFilled={false} title="Start chatting" textStyle={styles.buttonText} btnStyle={styles.button} />
              <CommonButton isFilled={false} title="Create new Group chat" textStyle={styles.buttonText} btnStyle={styles.button} />
              <CommonButton isFilled={false} title="Share character" textStyle={styles.buttonText} btnStyle={styles.button} />
            </View>
            <View style={styles.designContainer}>
              <DesignSvg />
            </View>
            <CommonButton isFilled={false} title="Report" textStyle={styles.reportText} btnStyle={styles.button} />
            </ScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  };
  
  export default ViewAvatarScreen;
  
  const styles = StyleSheet.create({
    safeArea: {
      backgroundColor: colors.light_black,
    },
    container: {
      flex: 1,
      paddingHorizontal: wp(10),
    },
    scrollContainer: {
      flexGrow: 1,
      paddingBottom: 50,
    },
    profileContainer: {
      borderColor: colors.tag_bg,
      width: "100%",
      borderWidth: 1,
      borderRadius: wp(5),
    },
    profileBg: {
      height: hp(235.39),
    },
    profileInfoContainer: {
      position: "absolute",
      alignSelf: "center",
      top: "5%",
      gap: hp(7.5),
    },
    profileImage: {
      height: hp(104.5),
      width: wp(104.5),
      alignSelf: "center",
    },
    profileName: {
      ...commonFontStyle(600, 15, colors.name_text),
      alignSelf: "center",
    },
    profileCreator: {
      ...commonFontStyle(600, 15, colors.avatar_username_text),
      alignSelf: "center",
    },
    postStatsContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: hp(5),
      alignSelf: "center",
    },
    statItem: {
      flexDirection: "row",
      gap: hp(2),
    },
    statText: {
      ...commonFontStyle(400, 10, colors.border),
    },
    description: {
      ...commonFontStyle(400, 12, colors.avatar_description_text),
    },
    formContainer: {
      marginVertical: hp(10),
      gap: hp(20),
    },
    toggleSwitchContainer: {
      backgroundColor: colors.input_bg,
      borderColor: colors.tag_bg,
      borderWidth: 1,
      borderRadius: hp(5),
      paddingHorizontal: wp(15),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      alignSelf: "center",
      paddingVertical: hp(12.5),
      width: "100%",
    },
    toggleText: {
      ...commonFontStyle(400, 15, colors.toggle_text),
    },


  buttonContainer: {
    gap: hp(10),
    marginTop: hp(50),
  },
  button: {
    borderColor: colors.btn_border,
    backgroundColor: colors.input_bg,
    width: "90%",
    alignSelf: "center",
  },
  buttonText: {
    ...commonFontStyle(600, 15, colors.text_selected),
  },
  reportText: {
    ...commonFontStyle(600, 15, colors.delete_color),
  },
  designContainer: {
    marginVertical: hp(40),
  },
  });
  