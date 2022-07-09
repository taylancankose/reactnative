import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Products from './components/Products';
import Search from './components/Search/Search';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_title}>PATISTORE</Text>
      <Search />
      <Products />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  header_title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
