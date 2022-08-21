import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFoodData, searchFood } from "../redux/dietSlice";
import SearchBar from "../components/SearchBar/SearchBar";
import SearchResults from "../components/SearchResults/SearchResults";

function Home({ route }) {
  console.log(route.params);
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.dietary.items);
  const searchQuerry = useSelector((state) => state.dietary.searchQuerry);

  useEffect(() => {
    dispatch(searchFood(searchQuerry));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header}>Hello name,</Text>
        <Text style={styles.question}>What did you eat today?</Text>
      </View>
      <SearchBar />
      <SearchResults />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#f2f2f2",
  },
  header_container: {
    marginLeft: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: "500",
    color: "#273A5D",
  },
});
