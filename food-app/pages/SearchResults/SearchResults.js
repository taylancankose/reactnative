import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';
import Results from '../../components/Results/Results';
import useFetch from '../../hooks/useFetch';

function SearchResults({route}) {
  const navigation = useNavigation();
  const {input} = route.params;
  const {results, error, loading} = useFetch(
    `${Config.API_URL}/search.php?s=${input}`,
  );
  const handleFoodSelect = id => {
    navigation.navigate('Detail', {id});
  };
  const renderResults = ({item}) => (
    <Results item={item} onSelect={() => handleFoodSelect(item.idMeal)} />
  );
  return (
    <SafeAreaView>
      <FlatList data={results?.meals} renderItem={renderResults} />
    </SafeAreaView>
  );
}

export default SearchResults;
