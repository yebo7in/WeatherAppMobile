import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WebAppWrapper = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'file:///android_asset//public/index.html' }} // Android
        // source={{ uri: 'file:///ios/assets/index.html' }} // iOS
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default WebAppWrapper;