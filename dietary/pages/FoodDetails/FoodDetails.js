import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import {
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FoodSummaryCard from "../../components/FoodSummaryCard/FoodSummaryCard";
import NutritionTable from "../../components/NutritionTable/NutritionTable";
import { addEatList, getFoodData } from "../../redux/dietSlice";
import styles from "./FoodDetails.style";
import ActionSheet from "react-native-actionsheet";

function FoodDetails({ route }) {
  const dispatch = useDispatch();
  const actionSheet = useRef();

  const { id, photo } = route.params;
  const navigation = useNavigation();

  // const optionArray = ["Breakfast", "Lunch", "Dinner", "Cancel"];
  // const showActionSheet = () => {
  //   actionSheet.current.show();
  // };

  const items = useSelector((state) => state.dietary.items);
  const qty = useSelector((state) => state.dietary.qty);
  const eatList = useSelector((state) => state.dietary.eatList);

  useEffect(() => {
    dispatch(getFoodData(id));
  }, []);

  const addToPlanner = (photo, index) => {
    dispatch(addEatList(items?.item_id, items));
    navigation.navigate("MealPlanner", { photo });
  };
  // () => addToPlanner(photo)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: photo }} />
        <View style={styles.info_container}>
          <View>
            <Text style={styles.title}>Food Summary</Text>
            <View>
              <View style={styles.item_container}>
                <Text>{items?.item_name}</Text>
                <Text>{items?.brand_name}</Text>
              </View>
              <View style={styles.card_container}>
                <FoodSummaryCard
                  title="Calories"
                  value={qty * items?.nf_calories + " Kcal"}
                  color1="#FF5247"
                  color2="#FEA070"
                  theme="first"
                />
                <FoodSummaryCard
                  title="Carbs"
                  value={qty * items?.nf_total_carbohydrate + "g"}
                  color1="#FFAB0D"
                  color2="#FF9505"
                  theme="second"
                />
                <FoodSummaryCard
                  title="Protein"
                  value={qty * items?.nf_protein + "g"}
                  color1="#9EE115"
                  color2="#7ABC01"
                  theme="third"
                />
                <FoodSummaryCard
                  title="Fat"
                  value={qty * items?.nf_total_fat + "g"}
                  color1="#7BCFDE"
                  color2="#0281C3"
                  theme="fourth"
                />
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View>
            <Text style={styles.title}>Nutrition Information</Text>
            <View>
              <NutritionTable title="Sodium Content: " items={items} />
            </View>
          </View>
          <View style={styles.btn_container}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => addToPlanner(photo)}
            >
              <Text style={styles.btn_title}>
                I Ate This! ({qty * items?.nf_calories} kcal)
              </Text>
            </TouchableOpacity>
            {/* <ActionSheet
              ref={actionSheet}
              title={"What time did you eat this meal?"}
              options={optionArray}
              cancelButtonIndex={3}
              destructiveButtonIndex={1}
              onPress={() => addToPlanner(photo)}
            /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FoodDetails;
