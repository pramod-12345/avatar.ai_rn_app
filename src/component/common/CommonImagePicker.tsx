import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
  View,
  Modal,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { colors } from "../../theme/colors";
import SvgButton from "./SvgButton";
import EditIconSvg from "../../assets/svg/editIcon.svg";
import { IMAGES } from "../../assets/Images";
import { commonFontStyle } from "../../theme/fonts";

const ImagePickerComponent = ({
  onImageSelected,
}: {
  onImageSelected: (image: string) => void;
}) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true, // Enables cropping
    })
      .then((image) => {
        setImageUri(image.path);
        onImageSelected(image.path);
        setIsModalVisible(false);
      })
      .catch((error) => {
        if (error.code !== "E_PICKER_CANCELLED") {
          Alert.alert("Error", "Could not open camera");
        }
      });
  };

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true, // Enables cropping
    })
      .then((image) => {
        setImageUri(image.path);
        onImageSelected(image.path);
        setIsModalVisible(false);
      })
      .catch((error) => {
        if (error.code !== "E_PICKER_CANCELLED") {
          Alert.alert("Error", "Could not open gallery");
        }
      });
  };

  return (
    <View style={styles.container}>
      <View>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Image source={IMAGES.image} style={styles.image} />
        )}
        <View style={styles.editIconContainer}>
          <SvgButton
            SvgComponent={EditIconSvg}
            width={41.03}
            height={41.03}
            onPress={() => setIsModalVisible(true)}
          />
        </View>
      </View>

      {/* Modal for Camera/Gallery Selection */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)} // Close on back press
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.button} onPress={openCamera}>
              <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={openGallery}>
              <Text style={styles.buttonText}>Open Gallery</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 175,
    height: 175,
    borderRadius: 100,
    marginBottom: 20,
    borderColor: colors.text_selected,
    borderWidth: 1,
  },
  editIconContainer: {
    position: "absolute",
    top: "10%",
    right: "-2.5%",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.light_black,
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.text_selected,
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    ...commonFontStyle(700,16,colors.white)
    
  },
});
