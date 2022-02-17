import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const TextButton = ({text, pressFunc}) => {
  return (
    <TouchableOpacity onPress={pressFunc} style={styles.container}>
        <Text style={styles.textBox}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8e8e8',
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    padding: 25,
    width: 325

  },
  textBox: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  }
});
