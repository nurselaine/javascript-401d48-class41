import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import KeyBoardRow from './KeyboardRow';

const Keyboard = ({ onKeyPress }) => {
  let row1 = "qwertyuiop"
  let row2 = "asdfghjkl"
  let row3 = "zxcvbnm⌫";
  row1 = row1.split('');
  row2 = row2.split('');
  row3 = row3.split('');

  return (
    <View style={styles.Keyboard}>
        <KeyBoardRow onKeyPress={onKeyPress} row={row1}/>
        <KeyBoardRow onKeyPress={onKeyPress}  row={row2}/>
        <KeyBoardRow onKeyPress={onKeyPress} row={row3}/>
        <View style={styles.KeyboardRow}>
          <TouchableOpacity>
            <Button
              title='Enter'
              style={styles.keyLetter}
              onPress={() => onKeyPress('ENTER')}
            />
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Keyboard: {
    flexDirection: 'column',
  },
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

export default Keyboard;