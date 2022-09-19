import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import CreatePostScreen from "./src/screens/CreatePostScreen";

import FeedScreen from "./src/screens/FeedScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar/>
      {/* <FeedScreen /> */}
      <CreatePostScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
