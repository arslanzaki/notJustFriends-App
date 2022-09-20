import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import CreatePostScreen from "./src/screens/CreatePostScreen";

import FeedScreen from "./src/screens/FeedScreen";
import Navigator from "./src/navigation"

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      {/* <FeedScreen /> */}
      {/* <CreatePostScreen /> */}
      <Navigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9c9'
  },
});
