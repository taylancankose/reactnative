import React from "react";
import { View, Text, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQty, increaseQty } from "../../redux/dietSlice";
import styles from "./ServingQuantity.style";

function ServingQuantity() {
  const dispatch = useDispatch();
  const qty = useSelector((state) => state.dietary.qty);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.qty}
        disabled={qty === 1 && true}
        onPress={() => dispatch(decreaseQty())}
      >
        <Text style={styles.sign}>-</Text>
      </Pressable>
      <View style={styles.qty2}>
        <Text style={styles.amount}>{qty}</Text>
      </View>
      <Pressable
        style={styles.qty}
        disabled={qty === 10 && true}
        onPress={() => dispatch(increaseQty())}
      >
        <Text style={styles.sign}>+</Text>
      </Pressable>
    </View>
  );
}

export default ServingQuantity;
