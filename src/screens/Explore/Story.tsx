import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { commonFontStyle, hp } from '../../theme/fonts';
import AddSvg from '../../assets/svg/add.svg'
import { colors } from '../../theme/colors';

type StoryScrollProps = {
  stories: { image: any; tagName: string; eraText: string }[];
};

const StoryScroll: React.FC<StoryScrollProps> = ({ stories }) => {
  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.addButton}>
        <AddSvg />
        <Text style={styles.storyText}>Create a Story</Text>
      </TouchableOpacity>
      {stories.map((story, index) => (
        <View key={index} style={styles.storyContainer}>
          <Image source={story.image}  style={styles.imgStyle}/>
          <View style={styles.tagContainer}>
            <Text style={commonFontStyle(600, 8, colors.black)}>{story.tagName}</Text>
          </View>
          <Text style={[commonFontStyle(500, 10, colors.title_color), styles.eraText]}>
            {story.eraText}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  
 
  storyContainer: {
    position: 'relative',
  },
 
  
  eraText: {
    position: 'absolute',
    top: '73%',
    left: '12%',
    width:'90%'
  },
  addButton: {
    padding: 2,
    width: hp(100),
    height: hp(128),
    borderColor: colors.border_color,
    borderWidth: 1,
    borderRadius: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  storyText: {...commonFontStyle(400, 11, colors.add_text_color)},
 
  tagContainer: {
    backgroundColor: colors.tag_color,
    paddingVertical: hp(2),
    borderRadius: 2,
    paddingHorizontal: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top:'60%',
    left:'12%'
  },
  imgStyle:{
    width: hp(100),
    height: hp(128),
    borderRadius: hp(15),
borderColor:colors.tag_bg,
borderWidth:2,
opacity:0.5
  }
});

export default StoryScroll;
