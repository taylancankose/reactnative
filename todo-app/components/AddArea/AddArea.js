import React from 'react';
import {Button, TextInput, TouchableOpacity, View, Text} from 'react-native';
import styles from './AddArea.styles';

const AddArea = ({onChange, onPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        placeholder="Yapılacak..."
      />
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.button_text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddArea;
