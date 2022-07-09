import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Search.style';

function Search() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." />
    </View>
  );
}

export default Search;
