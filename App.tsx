import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux';
import Toast from 'react-native-toast-message';
import { colors } from './src/theme/colors';
import { hp, commonFontStyle, SCREEN_WIDTH } from './src/theme/fonts';
import StackNavigator from './src/navigation/StackNavigator';
import RootContainer from './src/navigation/RootContainer';

type Props = {};

const App = (props: Props) => {
  const toastConfig = {
    success: ({ text1, text2, type, props, ...rest }: any) =>
      type === 'success' && (
        <SafeAreaView>
          <View style={styles.textStyleToastSuccess}>
            <Text style={styles.textStyleToast}>{text1}</Text>
          </View>
        </SafeAreaView>
      ),
    error: ({ text1, text2, type, props, ...rest }: any) => {
      if (type === 'error') {
        return (
          <SafeAreaView>
            <View style={styles.toastStyle}>
              <Text style={styles.textStyleToast}>{text1}</Text>
            </View>
          </SafeAreaView>
        );
      }
    },
  };

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <RootContainer />
        <Toast
          config={toastConfig}
          position="top"
          topOffset={0}
        />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  toastStyle: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: SCREEN_WIDTH,
  },
  textStyleToastSuccess: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: SCREEN_WIDTH,
  },
  textStyleToast: {
    ...commonFontStyle(500, 14, colors.white),
    textAlign: 'center'
  },
});
