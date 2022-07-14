import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import SearchBar from '../../components/SearchBar';
import Discover from '../../components/Discover';
import Categories from '../../components/Categories/Categories';

function Home() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchBar />
      <Discover />
      <Categories />
    </SafeAreaView>
  );
}

export default Home;
