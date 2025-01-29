import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import {colors} from '../../theme/colors';
import {commonFontStyle, hp} from '../../theme/fonts';
import CommentSvg from '../../assets/svg/comment.svg';
import ThumbsupSvg from '../../assets/svg/thumbsup.svg';
type PostProps = {
  TAGS: {id: number; tagName: string}[];
  Post: {
    id: number;
    image: any;
    username: string;
    title: string;
    description: string;
    numberOfComments: string;
    numberOfLikes: string;
  }[];
};

const Post: React.FC<PostProps> = ({TAGS, Post}) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const handleTagPress = (tag: string) => {
    setSelectedTag(tag);
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.postContainer} key={item.id}>
        <View style={styles.relativeContainer}>
          <Image source={item.image} style={styles.imgStyle} />
          <View style={styles.usernameContainer}>
            <Text style={styles.usernameText}>{item.username}</Text>
          </View>
          <View style={styles.postDetailsContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <View style={styles.postStatsContainer}>
            <View style={styles.statItem}>
              <CommentSvg />
              <Text style={styles.statText}>{item.numberOfComments}</Text>
            </View>
            <View style={styles.statItem}>
              <ThumbsupSvg />
              <Text style={styles.statText}>{item.numberOfLikes}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}>
        {TAGS.map(tag => (
          <TouchableOpacity
            key={tag.id}
            style={[
              styles.tag,
              selectedTag === tag.tagName && styles.selectedTag,
            ]}
            onPress={() => handleTagPress(tag.tagName)}>
            <Text
              style={[
                styles.tagText,
                selectedTag === tag.tagName && styles.selectedTagText,
              ]}>
              {tag.tagName}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        renderItem={renderItem}
        data={Post}
        numColumns={2}
        contentContainerStyle={styles.postRowStyle}
        columnWrapperStyle={styles.postColumnStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    gap: hp(10),
  },
  relativeContainer: {
    position: 'relative',
  },
  postDetailsContainer: {
    position: 'absolute',
    top: '57%',
    left: '7.5%',
    width: '90%',
    gap: hp(2),
  },
  postStatsContainer: {
    position: 'absolute',
    bottom: 10,
    left: '7.5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  statItem: {
    flexDirection: 'row',
    gap: hp(2),
  },
  statText: {
    ...commonFontStyle(400, 10, colors.border),
  },
  usernameText: {
    ...commonFontStyle(600, 10, colors.white),
  },
  titleText: {
    ...commonFontStyle(600, 14, colors.white),
  },
  descriptionText: {
    ...commonFontStyle(400, 10, colors.desc_text),
  },
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tag: {
    paddingVertical: hp(9),
    paddingHorizontal: hp(12),
    borderRadius: hp(5),
    backgroundColor: colors.light_black,
    borderWidth: 1,
    borderColor: colors.tag_bg,
  },
  selectedTag: {
    backgroundColor: colors.text_selected,
    borderWidth: 0,
  },
  tagText: {
    ...commonFontStyle(400, 12, colors.tag_text),
  },
  selectedTagText: {
    ...commonFontStyle(400, 12, colors.tag_text),
  },
  postContainer: {
    height: hp(211),
    width: hp(165),
    borderColor: colors.tag_bg,
    borderWidth: 1,
    borderRadius: hp(15),
  },
  imgStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderRadius: hp(15),
    position: 'relative',
    opacity:0.7
    
  },
 

  usernameContainer: {
    borderColor: '#161B2070',
    position: 'absolute',
    borderWidth: 1,
    backgroundColor: '#0D121930',
    top: 10,
    left: '5%',
    paddingVertical: hp(3.5),
    paddingHorizontal: hp(5),
    borderRadius: hp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  postRowStyle: {
    gap: hp(20),
  },
  postColumnStyle: {
    gap: hp(20),
  },
});

export default Post;
