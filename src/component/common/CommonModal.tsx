import React, { FC } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { colors } from "../../theme/colors";
import { commonFontStyle, hp, wp } from "../../theme/fonts";

interface Props {
  visible: boolean;
  onClose: () => void;
  modalStyle?: object;
  overlayStyle?: object;
  titleMain: string;
  description: string;
  firstButtonText: string;
  secondButtonText: string;
  cancelButtonOnPress: () => void;
  okayButtonOnPress: () => void;
}

const CommonModal: FC<Props> = ({
  visible,
  onClose,
  modalStyle = {},
  overlayStyle = {},
  titleMain,
  description,
  firstButtonText,
  secondButtonText,
  cancelButtonOnPress,
  okayButtonOnPress,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose} // Works for Android back button
    >
      {/* Semi-transparent Background */}
      <View style={[styles.overlay, overlayStyle]}>
        <TouchableOpacity
          style={styles.touchableOverlay}
          activeOpacity={1}
          onPress={onClose} // Close modal when tapping outside
        >
          <View style={[styles.modalContainer, modalStyle]}>
            <View>
              <Text style={styles.title}>{titleMain}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={cancelButtonOnPress}>
                <Text style={styles.firstButton}>{firstButtonText}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={okayButtonOnPress}>
                <Text style={styles.secondButton}>{secondButtonText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // This creates the blur-like effect
    justifyContent: "center",
    alignItems: "center",
  },
  touchableOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  modalContainer: {
    backgroundColor: colors.light_black,
    paddingHorizontal: wp(25),
    borderRadius: hp(5),
    width: "90%",
    alignSelf: "center",
    borderColor: colors.modal_border,
    borderWidth: 1,
    height: hp(220),
    paddingVertical: hp(30),
    justifyContent: "space-between",
  },
  title: {
    ...commonFontStyle(700, 15, colors.label_text),
    marginBottom: hp(15),
  },
  description: {
    ...commonFontStyle(300, 15, colors.label_text),
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: hp(20),
    alignSelf: "flex-end",
  },
  firstButton: {
    ...commonFontStyle(500, 15, colors.modal_button),
  },
  secondButton: {
    ...commonFontStyle(500, 15, colors.text_selected),
  },
});

export default CommonModal;
