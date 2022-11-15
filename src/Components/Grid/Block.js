import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Block = ({letter}) => (
  <View style={styles.block}>
    <Text style={styles.letter}>{letter}</Text>
  </View>
);

const styles = StyleSheet.create({
  block: {
    borderColor: "black",
    borderWidth: 2,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  letter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'fefefe'
  }
});

export default Block;