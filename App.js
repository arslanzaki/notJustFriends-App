import React from "react";
import { StyleSheet, View } from "react-native";

import FeedScreen from "./src/screens/FeedScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <FeedScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
