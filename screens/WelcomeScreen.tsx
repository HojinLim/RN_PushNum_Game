import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { Profile } from "../constants/types";
import GamePage from "./GamePage";

export type RootStackParamList = {
  Home: undefined;
  Test: undefined;
  Game: any;
};

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMesssage] = useState("");
  const [profile, setProfile] = useState<Profile>();


  // navigation.navigate("Game");
  // Async 함수 내에서 데이터 가져오기
  async function retrieveProfile() {
    try {
      const profileJson = await AsyncStorage.getItem("profile");
      if (profileJson) {
        const profile = JSON.parse(profileJson);
        setProfile(profile);
        console.log(profile);
        return profile;
      } else {
        console.log("프로필 데이터가 존재하지 않습니다.");
      }
    } catch (error) {
      console.error("프로필 데이터 가져오기 오류:", error);
    }
  }
  useEffect(() => {
    retrieveProfile();
    axios
      .get(
        "https://react-native-mini-game-default-rtdb.firebaseio.com/myKey.json?auth=" +
          profile
      )
      .then((response) => {
        setFetchedMesssage(response.data);
      });
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>
        연결된 계정: {profile ? profile.email : "정보 없음"}
      </Text>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
      <GamePage/>
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
