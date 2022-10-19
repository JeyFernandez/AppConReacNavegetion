import React, { useState } from 'react';
import {TextInput, View,StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const Input = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.search}>
      <EvilIcons name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search recipes"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        />
      </View>
    );
}
const styles =StyleSheet.create({
    search:{
      borderWidth: 1,
      borderRadius:10,
      paddingVertical:10,
      flexDirection:'row',
      margin:20,
    },
    icon:{
      fontSize :30,
      marginLeft:10,
    },
    input:{
      fontSize:15,
      paddingLeft:10,
      paddingRight:'50%',
    },
});

export default Input;