import React from "react";
import { FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FoodCards from "../FoodCards/FoodCards";
import styles from "./SearchResults.style";

function SearchResults() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.dietary.searchResults);

  const renderFoods = ({ item }) => <FoodCards item={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={searchResults} renderItem={renderFoods} />
    </View>
  );
}

export default SearchResults;
