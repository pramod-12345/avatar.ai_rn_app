import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../component/common/Header';
import {colors} from '../../theme/colors';
import {AppStyles} from '../../theme/appStyles';
import SearchSvg from '../../assets/svg/search.svg';
import AddSvg from '../../assets/svg/add.svg';
import {commonFontStyle, hp} from '../../theme/fonts';
import {IMAGES} from '../../assets/Images';
import StoryScroll from './Story';
import Post from './Post';

const Explore = () => {
  const stories = [
    {id: 1, image: IMAGES.scifi, tagName: 'Sci-fi', eraText: 'New Era'},
    {
      id: 2,
      image: IMAGES.adventure,
      tagName: 'Adventure',
      eraText: 'Space teen jungyard dream',
    },
    {id: 2, image: IMAGES.space, tagName: 'Space Ex', eraText: 'Worthy seeker'},
  ];

  const tags = [
    {id: 1, tagName: 'All'},
    {id: 2, tagName: 'Game'},
    {id: 3, tagName: 'Anime'},
    {id: 4, tagName: 'Movie'},
    {id: 5, tagName: 'Book'},
    {id: 6, tagName: 'Sports'},
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
    <SafeAreaView
      style={[
        AppStyles.mainWithPadding,
        {backgroundColor: colors.light_black},
      ]}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <View style={styles.searchContainer}>
          <View style={styles.inputWrapper}>
            <SearchSvg width={24} height={24} />
            <TextInput
              placeholder="Search"
              placeholderTextColor={colors.Light_text}
              style={styles.searchInput}
            />
          </View>
        </View>
        <StoryScroll stories={stories} />
        <Post TAGS={tags} Post={post} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.search_bg,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    height: 42,
    gap: hp(5),
  },
  iconStyle: {
    marginRight: 8, // Adds spacing between the icon and text
  },
  searchInput: {
    flex: 1, // Ensures the input takes the remaining space
    color: colors.Light_text,
  },
  scrollStyle: {
    paddingHorizontal: hp(20),
    gap: 20,
  },
});
