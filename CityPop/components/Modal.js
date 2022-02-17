import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Modal = ({number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.popText}>Population</Text>
      <Text style={styles.number}>{number}</Text>
      
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
    popText: {
        fontSize: 18,
        textAlign: 'center'
    },
    number: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '100',
        padding: 15,
        paddingTop: 5
    },
    container: {
        backgroundColor: '#e0e0e0',
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        width: 325
    },
});
