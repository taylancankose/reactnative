import React, { useEffect, useState } from "react";
import { Text, View, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { removeEatList, toggleModal } from "../../redux/dietSlice";
import styles from "./MealPlannerList.style";
import Notif from "../../notif/Notif";

function MealPlannerList({ items, photo }) {
  const modal = useSelector((state) => state.dietary.modal);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const pressDetails = (id) => {
    navigation.navigate("FoodDetails", { id, photo });
  };

  const datePick = () => dispatch(toggleModal());

  return (
    <View style={styles.container}>
      <Pressable onPress={() => pressDetails(items?.item_id, photo)}>
        <View style={styles.card_container}>
          <Image source={{ uri: photo }} style={styles.photo} />
          <View>
            <Text style={styles.food}>{items?.item_name}</Text>
            <Text style={styles.brand}>{items?.brand_name}</Text>
            <View style={styles.food_info_container}>
              <View style={styles.red_dot} />
              <Text style={styles.food_info}>{items?.nf_calories}Kcal</Text>
              <View style={styles.orange_dot} />
              <Text style={styles.food_info}>
                {items?.nf_total_carbohydrate}g
              </Text>
              <View style={styles.green_dot} />
              <Text style={styles.food_info}>{items?.nf_protein}g</Text>
              <View style={styles.blue_dot} />
              <Text style={styles.food_info}>{items?.nf_total_fat}g</Text>
            </View>
            <View style={styles.icon_container}>
              <Pressable onPress={datePick}>
                <Icon name="alarm" size={25} />
              </Pressable>
              <Pressable onPress={() => dispatch(removeEatList())}>
                <Icon name="delete" size={25} style={styles.icon} />
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
      {modal && <Notif />}
    </View>
  );
}

export default MealPlannerList;
