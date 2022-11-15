import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const KeyboardRow = ({row, onKeyPress}) => {

  return (
      <View style={styles.KeyboardRow}>
        {
          row.map(letter => (
            <TouchableOpacity onPress={() => onKeyPress(letter)}>
              <View style={styles.key}>
                <Text style={styles.keyLetter}>{letter}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
  )
}

const styles = StyleSheet.create({
  KeyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  key: {
    backgroundColor: "#efefef",
    padding: 10,
    margin: 3,
    borderRadius: 5,
  },
  keyLetter: {
    fontWeight: '500',
    fontSize: 15,
  }
})

export default KeyboardRow;