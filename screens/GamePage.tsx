import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import NumberPad from "../components/NumberPad";

const GamePage = () => {
  const [shuffledNumbers, setShuffledNumbers] = useState<number[]>([]);

  useEffect(() => {
    const numbers = Array.from({ length: 25 }, (_, index) => index + 1);
    const shuffled = [...numbers].sort(() => Math.random() - 0.5);
    setShuffledNumbers(shuffled);
  }, []);

  return (
    <View style={styles.container}>
      {shuffledNumbers.map((number, index) => (
        <NumberPad key={index} number={number} />
      ))}
    </View>
  );
};

export default GamePage;

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 400,
    borderWidth: 1,
    borderColor: "blue",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});