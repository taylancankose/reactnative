import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './SearchBar.style';
import {useNavigation} from '@react-navigation/native';

function SearchBar() {
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const handleChange = text => setInput(text);
  const onSubmit = () => {
    navigation.navigate('SearchResults', {input});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hello</Text>
      <Text style={styles.title}>What do you want to cook today?</Text>
      <TextInput
        onChangeText={handleChange}
        placeholder="Search"
        style={styles.input}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
}

export default SearchBar;
