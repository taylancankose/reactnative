import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {favoriteSelectors} from '../../redux/favoritesSlice';
import JobCard from '../../components/JobCard';

function Favorites() {
  const favorites = useSelector(favoriteSelectors.selectAll);
  // useEffect(() => {
  //   AsyncStorage.getItem('favorites').then(fav => {
  //     fav && JSON.parse(fav);
  //   });
  // }, []);
  const renderFavs = ({item}) => <JobCard job={item} />;
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
      <FlatList data={favorites} renderItem={renderFavs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Favorites;
