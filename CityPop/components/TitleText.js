import { StyleSheet, Text } from 'react-native';
import React from 'react';

const TitleText = ({text}) => {
  return (
        <Text style={styles.titleText}>{text}</Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        paddingTop: 125,
        fontWeight: 'bold',
        paddingBottom: 100,
    },
});
