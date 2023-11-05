import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
// import { token } from "../util/tokenManager";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMesssage] = useState("");
  const token = AsyncStorage.getItem("token");

  useEffect(() => {
    axios
      .get(
        "https://react-native-mini-game-default-rtdb.firebaseio.com/myKey.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMesssage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
