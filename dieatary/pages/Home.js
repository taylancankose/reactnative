import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFoodData, searchFood } from "../redux/dietSlice";

function Home() {
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.dietary.items);
  const searchResults = useSelector((state) => state.dietary.searchResults);

  useEffect(() => {
    dispatch(getFoodData());
    dispatch(searchFood());
  }, []);
  console.log(searchResults);
  console.log("foodData", foodData);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default Home;
