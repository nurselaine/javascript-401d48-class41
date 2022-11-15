import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import GuessRow from './src/Components/Grid/GuessRow';
import Keyboard from './src/Components/Keyboard/Keyboard';

const words = ["LIGHT", "WRUNG", "COULD", "PERKY", "MOUNT", "WHACK", "SUGAR"];
const hashWords = new Set();

for(let word of words){
  hashWords.add(word);
}

export default function App() {
  // pick a random word words[Math.round(Math.random() * words.length - 1)
  const [activeWord] = useState(words[0]);
  // console.log('active word ',activeWord)
  const [guess, setGuess] = useState('');
  
  const handleKeyPress = (letter) => {
    // console.log(guess.toUpperCase() === activeWord);
    // console.log(letter);
    // console.log('hash ',hashWords.has(guess.toUpperCase()));

    if(guess.toUpperCase() === activeWord){
      console.log('you won')
      alert('You Won!');
      setGuess('');
      return;
    };

    if(letter === 'ENTER' && guess.length < 5){
      alert('word too short.')
      return;
    };
    
    if(letter === '⌫'){
      console.log('delete btn pressed')
      setGuess(guess.slice(0, -1));
      return;
    };

    if(guess.length === 5 && !hashWords.has(guess.toUpperCase())) {
      console.log('i\'m here')
      alert('not a valid word!');
      return;
    };


    if(guess.length >= 5){
      return;
    };

    setGuess(guess + letter);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <GuessRow guess={guess} />
          <GuessRow guess='' />
          <GuessRow guess='' />
          <GuessRow guess='' />
          <GuessRow guess='' />
        </View>
        <Keyboard onKeyPress={handleKeyPress} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    flex: 2,
  }
});
