import React from "react";
import { StyleSheet, View } from "react-native";

import Block from './Block';

export default function GuessRow({guess}){
  const letters = guess.split('');
  return (
    <View style={styles.row}>
      <Block letter={letters[0]}/>
      <Block letter={letters[1]}/>
      <Block letter={letters[2]}/>
      <Block letter={letters[3]}/>
      <Block letter={letters[4]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})