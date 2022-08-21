import React from "react";
import { View, Text } from "react-native";
import styles from "./FoodSummaryCard.style";
import { LinearGradient } from "expo-linear-gradient";

function FoodSummaryCard({ title, value, color1, color2, theme }) {
  return (
    <View style={styles[theme].card_container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[color1, color2]}
        style={styles[theme].title_container}
      >
        <Text style={styles[theme].title}>{title}</Text>
      </LinearGradient>
      <View style={styles[theme].value_container}>
        <Text style={styles[theme].value}>{value}</Text>
      </View>
    </View>
  );
}

export default FoodSummaryCard;
