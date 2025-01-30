import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import BackHeader from "../../component/common/BackHeader";
import { AppStyles } from "../../theme/appStyles";
import { colors } from "../../theme/colors";
import ImagePickerComponent from "../../component/common/CommonImagePicker";
import LabelInput from "../../component/common/LabelInput";
import CommonButton from "../../component/common/CommonButton";
import { hp, wp } from "../../theme/fonts";

const CreatePersona = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleImageSelected = (imagePath: string) => {
    console.log("Selected Image Path:", imagePath);
  };

  return (
    <SafeAreaView
      style={[
        AppStyles.mainWithPadding,
        { backgroundColor: colors.light_black },
      ]}
    >
      <BackHeader title="Persona" isBackHeader={true} />
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
            <ImagePickerComponent onImageSelected={handleImageSelected} />

            <LabelInput
              label="Name"
              placeholder="Name your persona"
              maxLength={20}
              multiline={false}
              value={name}
              numberOfLines={1}
              onChange={(text) => setName(text)}
            />

            <LabelInput
              label="Description"
              placeholder={
                "Name: Devin\nGender: Male\nAge: 21\nEye color: Blue\nLikes: Video games, singing\n\n"
              }
              maxLength={600}
              multiline
              value={description}
              numberOfLines={5}
              onChange={(text) => setDescription(text)}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <CommonButton
        isFilled
        title={"Save Changes"}
        btnStyle={styles.btnStyle}
        onPress={() => null}
      />
    </SafeAreaView>
  );
};

export default CreatePersona;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 50, // Adds extra padding at the bottom to prevent overlap
  },
  btnStyle: {
    marginBottom: hp(10),
    width: "90%",
    alignSelf: "center",
  },
});
