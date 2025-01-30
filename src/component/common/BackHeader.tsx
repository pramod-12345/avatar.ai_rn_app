import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import SvgButton from "./SvgButton";
import LeftArrowSvg from '../../assets/svg/LeftArrow.svg'
import { commonFontStyle, hp, wp } from "../../theme/fonts";
import InfoSvg from '../../assets/svg/info.svg'
import { navigationRef } from "../../navigation/RootContainer";
import { navigateTo } from "../../utils/commonFunction";
import { SCREEN_NAMES } from "../../navigation/screenNames";
import CrossSvg from "../../assets/svg/cross.svg"

type Props = {
  onPress?: () => void;
  title: string;
  isBackHeader: Boolean;
  isCross: Boolean;
};

const BackHeader: FC<Props> = ({onPress = () => {},title,isBackHeader,isCross}) => {
return(
    <View style={styles.container}>
        {isBackHeader  && 
        
        <SvgButton SvgComponent={LeftArrowSvg} width={18} height={15.43} onPress={() => navigationRef.goBack()}/>
        }
        <Text style={{...commonFontStyle(700,20,colors.title_text)}}>{title}</Text>
        {
            isCross ?
            <SvgButton SvgComponent={CrossSvg} width={16} height={16} onPress={() => navigationRef.goBack()}/>
            :
        <SvgButton SvgComponent={InfoSvg} width={24} height={24} onPress={() => navigateTo(SCREEN_NAMES.AvatarScreen)}/>
        }
    </View>
)

}

const styles = StyleSheet.create({
container:{
    backgroundColor:colors.light_black,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:wp(10),
    // ,justifyContent:'center',
    paddingVertical:hp(10)
}
})




export default BackHeader;
