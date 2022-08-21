import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealPlannerAnalysis from "../components/MealPlannerAnalysis/MealPlannerAnalysis";
import MealPlannerList from "../components/MealPlannerList/MealPlannerList";

function MealPlanner({ route }) {
  const meals = useSelector((state) => state.dietary.eatList);
  console.log(meals);

  console.log(route.params);

  return (
    <View>
      <View>
        <MealPlannerAnalysis />
      </View>
      {meals && (
        <FlatList
          data={meals}
          renderItem={({ item }) => (
            <MealPlannerList items={item} photo={route?.params?.photo} />
          )}
        />
      )}
    </View>
  );
}

export default MealPlanner;
