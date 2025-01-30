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
import React from "react";
import BackHeader from "../../component/common/BackHeader";
import { AppStyles } from "../../theme/appStyles";
import { colors } from "../../theme/colors";
import { commonFontStyle, hp, wp } from "../../theme/fonts";
import { IMAGES } from "../../assets/Images";
import CommentSvg from "../../assets/svg/comment.svg";
import ThumbsupSvg from "../../assets/svg/thumbsup.svg";
import FunctionButton from "../../component/common/FunctionButton";
import VoiceSvg from "../../assets/svg/voice.svg";
import RightArrowSvg from "../../assets/svg/RightArrow.svg";
import CustomizeSvg from "../../assets/svg/customizeChat.svg";
import PersonaSvg from "../../assets/svg/persona.svg";
import AwaySvg from "../../assets/svg/away.svg";
import DeleteSvg from "../../assets/svg/delete.svg";

const BUTTONS = [
  { label: "View", width: "33.33%", onPress: null },
  { label: "Share", width: "33.33%", onPress: null },
  { label: "Hide", width: "33.33%", onPress: null },
  { label: "Refresh Chat", width: "50%", onPress: null },
  { label: "Start New Chat", width: "50%", onPress: null },
];

const SvgButtons = [
  {
    id: 1,
    titleOne: "Voice",
    titleSecond: "Add",
    SvgOne: VoiceSvg,
    Svgsecond: RightArrowSvg,
    isSecondSvg: true,
    isDelete: false,
  },
  {
    id: 2,
    titleOne: "Customize Chat",
    titleSecond: "",
    SvgOne: CustomizeSvg,
    Svgsecond: RightArrowSvg,
    isSecondSvg: true,
    isDelete: false,
  },
  {
    id: 3,
    titleOne: "Persona",
    titleSecond: "Off",
    SvgOne: PersonaSvg,
    Svgsecond: RightArrowSvg,
    isSecondSvg: true,
    isDelete: false,
  },
  {
    id: 4,
    titleOne: "Away Messages",
    titleSecond: "",
    SvgOne: AwaySvg,
    Svgsecond: RightArrowSvg,
    isSecondSvg: false,
    isDelete: false,
  },
  {
    id: 5,
    titleOne: "Clear All Messages",
    titleSecond: "",
    SvgOne: DeleteSvg,
    Svgsecond: RightArrowSvg,
    isSecondSvg: false,
    isDelete: true,
  },
];

const AvatarScreen = () => {
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
              <View style={styles.buttonsContainer}>
                {BUTTONS.map((button, index) => (
                  <TouchableOpacity
                    onPress={button.onPress}
                    key={index}
                    style={[styles.button, { width: button.width }]}
                  >
                    <Text style={styles.buttonText}>{button.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={{ paddingVertical: hp(20), gap: hp(10) }}>
              {SvgButtons.map((item) => {
                return (
                  <FunctionButton
                    onPress={() => null}
                    titleOne={item.titleOne}
                    titleSecond={item.titleSecond}
                    SvgOne={item.SvgOne}
                    Svgsecond={item.Svgsecond}
                    isSecondSvg={item.isSecondSvg}
                    isDelete={item.isDelete}
                  />
                );
              })}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AvatarScreen;

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
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    borderColor: colors.button_border_color,
    borderWidth: 1,
    height: hp(49),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...commonFontStyle(400, 14, colors.text_selected),
  },
});
