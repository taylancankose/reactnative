import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Categories.style';
import CategoryCard from '../CategoryCard';
import {useNavigation} from '@react-navigation/native';

function Categories() {
  const navigation = useNavigation();
  const {results, error, loading} = useFetch(
    `${Config.API_URL}/categories.php`,
  );
  const handleCategorySelect = (category, id) => {
    navigation.navigate('CategoryMeals', {category, id});
  };
  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory, item.idCategory)}
    />
  );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results?.categories}
        renderItem={renderCategory}
      />
    </View>
  );
}

export default Categories;
