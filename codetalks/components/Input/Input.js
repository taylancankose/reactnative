import {Text, TextInput, View} from 'react-native';
import React from 'react';

import styles from './Input.style';

const Input = ({placeholder, onChange, onValue, isPassword}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChange}
        value={onValue}
        style={styles.input_style}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default Input;
