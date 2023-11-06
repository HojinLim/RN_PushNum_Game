import React from "react";
import { Text, View, StyleSheet } from "react-native";

const NumberPad = ({ number }: { number: number }) => {
  return (
    <View style={styles.gridItem}>
      <Text>{number}</Text>
    </View>
  );
};

export default NumberPad;

const styles = StyleSheet.create({
  gridItem: {
    width: "20%", // 20% of the parent's width for 5 columns
    height: "20%", // 20% of the parent's height for 5 rows
    borderWidth: 1,
    borderColor: "gray",
    alignItems: 'center',
    justifyContent: 'center'
  },
});
