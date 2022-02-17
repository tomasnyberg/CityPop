import { StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import GenericScreen from './GenericScreen'


const SearchScreen = ({navigation, searchQuery, searchFuntion, children}) => {
  const [inputText, setInputText] = useState('');

  return (
    <GenericScreen titleText={`Search by ${searchQuery}`}>
        <TextInput autofocus onChangeText={(newText) => setInputText(newText)} placeholder={`Enter a ${searchQuery}`} style={styles.inputBox}></TextInput>
        <TouchableOpacity onPress={() => searchFuntion(inputText)} style={styles.searchButton}>
            <Image style={styles.searchIcon} source={require('../assets/search.png')}></Image>
        </TouchableOpacity>
        {children}
    </GenericScreen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
    inputBox: {
      borderWidth: 1,
      borderColor: 'black',
      margin: 5,
      padding: 10,
      width: 325,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    searchIcon: {
        width:50,
        height:50,
        marginBottom:0
    },
    searchButton: {
        marginTop:5,
        padding:12,
        borderRadius:100,
        borderColor:'black',
        borderWidth: 2,
        marginBottom:0
    }
  });