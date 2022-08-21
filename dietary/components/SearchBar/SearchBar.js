import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./SearchBar.style";
import { useDispatch, useSelector } from "react-redux";
import { foodList, searchFood } from "../../redux/dietSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.dietary.searchResults);
  const searchQuerry = useSelector((state) => state.dietary.searchQuerry);

  const onChange = (text) => {
    dispatch(foodList(text));
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Search"
        onSubmitEditing={() => dispatch(searchFood(searchQuerry))}
      />
    </View>
  );
}

export default SearchBar;
