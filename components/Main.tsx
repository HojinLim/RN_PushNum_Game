import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>This is Main Page</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
