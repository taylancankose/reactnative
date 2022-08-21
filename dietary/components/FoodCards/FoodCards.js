import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./FoodCards.style";

function FoodCards({ item }) {
  const navigation = useNavigation();
  const pressDetails = (id, photo) => {
    navigation.navigate("FoodDetails", { id, photo });
  };
  return (
    <Pressable onPress={() => pressDetails(item.nix_item_id, item.photo.thumb)}>
      <View style={styles.container}>
        <View style={styles.card_container}>
          <Image style={styles.photo} source={{ uri: item.photo.thumb }} />
          <View>
            <Text style={styles.food}>{item.food_name}</Text>
            <Text style={styles.brand}>{item.brand_name}</Text>
            <View style={styles.food_info_container}>
              <Text style={styles.food_info}>Qty: {item.serving_qty}</Text>
              <Text style={styles.food_info}>
                Calorie: {item.nf_calories} cal
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default FoodCards;
