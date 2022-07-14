import React from 'react';
import {FlatList, Image, SafeAreaView, View, Text} from 'react-native';
import Config from 'react-native-config';
import Results from '../../components/Results/Results';
import useFetch from '../../hooks/useFetch';
import {useNavigation} from '@react-navigation/native';

function CategoryMeals({route}) {
  const {category} = route.params;
  const {results, error, loading} = useFetch(
    `${Config.API_URL}/filter.php?c=${category}`,
  );
  const navigation = useNavigation();

  const handleFoodSelect = id => {
    navigation.navigate('Detail', {id});
  };
  const renderFoods = ({item}) => (
    <Results item={item} onSelect={() => handleFoodSelect(item.idMeal)} />
  );
  return <FlatList data={results?.meals} renderItem={renderFoods} />;
}

export default CategoryMeals;
