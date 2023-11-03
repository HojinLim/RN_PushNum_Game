import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";


const Main = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredNumber, setEnteredNumber] = useState("");
  const onPressHandler = () => {
    setModalIsVisible(true);
  };


  function numberInputHandler(enteredText: string) {
    setEnteredNumber(enteredText);
  }

  return (
    <View style={styles.container}>
      <Text>This is Main Page</Text>
      {/* <MyModal visible={modalIsVisible}/> */}
      <TextInput
        style={styles.inputPad}
        maxLength={10}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
  
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
  inputPad: {
    height: 50,
    width: 200,
    fontSize: 32,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    color: 'black',
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
