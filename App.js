import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import FlexTest from './FlexTest';
import Palindrome from './Palindrome';




export default function App() {

  // const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <FlexTest />
      <FlexTest />
      <Palindrome />
      <FlexTest />
      
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,

  }
})


