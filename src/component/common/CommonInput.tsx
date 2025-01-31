import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../theme/colors';
import {IMAGES} from '../../assets/Images';
import { hp } from '../../theme/fonts';
import EyeSvg from '../../assets/svg/eye.svg';
type Props = {
  placeholder: string;
  isPassword?: boolean; 
  backgroundColor:any;
  width: string;
  placeholderTextColor:any
};

const CommonInput = ({placeholder, isPassword = false, backgroundColor= colors.input_background,width = '100%',placeholderTextColor = colors.input_label}: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={placeholder}
        style={[styles.inputContainer,{    
          backgroundColor: backgroundColor, 
          width:width
        }]}
        placeholderTextColor={placeholderTextColor   }
        secureTextEntry={isPassword && !isPasswordVisible} // Toggle visibility for passwords
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? (
            <EyeSvg/>
          ) : (
            <EyeSvg/>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CommonInput;

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    marginBottom: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: 'transparent',
    paddingRight: 40, 
    height:hp(47),
    color: colors.white,
    alignSelf:'center'
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    top: '60%',
    transform: [{translateY: -10}], // Center the button vertically
  },
});
