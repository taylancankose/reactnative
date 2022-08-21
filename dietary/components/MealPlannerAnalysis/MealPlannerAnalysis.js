import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { useSelector } from "react-redux";
import styles from "./MealPlannerAnalysis.style";
import * as Progress from "react-native-progress";

function MealPlannerAnalysis() {
  const [cal, setCal] = useState([]);
  const meals = useSelector((state) => state.dietary.eatList);

  const sumCal = meals.reduce((accumulator, object) => {
    return accumulator + object.nf_calories;
  }, 0);

  const sumCarbs = meals.reduce((accumulator, object) => {
    return accumulator + object.nf_total_carbohydrate;
  }, 0);

  const sumProtein = meals.reduce((accumulator, object) => {
    return accumulator + object.nf_protein;
  }, 0);

  const sumFats = meals.reduce((accumulator, object) => {
    return accumulator + object.nf_total_fat;
  }, 0);

  const AMR = 2145;

  return (
    <View style={styles.container}>
      <View style={styles.progress_circle_container}>
        <CircularProgress
          value={(sumCal * 100) / AMR}
          title={`${sumCal}/${AMR}`}
          titleColor={"#44497A"}
          titleStyle={{ fontWeight: "900" }}
          subtitle="kcal"
          subtitleColor="#BABAC7"
          subtitleStyle={{ fontWeight: "700" }}
          titleFontSize={16}
          progressValueFontSize={16}
          activeStrokeColor={"#FF5247"}
          activeStrokeSecondaryColor={"#FEA070"}
          showProgressValue={false}
        />
      </View>
      <View style={styles.line_data_container}>
        <View style={styles.nutrient_data_container}>
          <View style={styles.text_container}>
            <Text style={styles.title}>Carbs</Text>
            <View style={styles.ratio_container}>
              <Text>{sumCarbs}</Text>
              <Text>/{AMR * 0.5}</Text>
            </View>
          </View>
          <Progress.Bar progress={sumCarbs / (AMR * 0.5)} width={200} />
        </View>
        <View style={styles.nutrient_data_container}>
          <View style={styles.text_container}>
            <Text style={styles.title}>Protein</Text>
            <View style={styles.ratio_container}>
              <Text>{sumProtein}</Text>
              <Text>/{AMR * 0.225}</Text>
            </View>
          </View>
          <Progress.Bar progress={sumProtein / (AMR * 0.225)} width={200} />
        </View>
        <View style={styles.nutrient_data_container}>
          <View style={styles.text_container}>
            <Text style={styles.title}>Fat</Text>
            <View style={styles.ratio_container}>
              <Text>{sumFats}</Text>
              <Text>/{AMR * 0.275}</Text>
            </View>
          </View>
          <Progress.Bar progress={sumFats / (AMR * 0.275)} width={200} />
        </View>
      </View>
    </View>
  );
}

export default MealPlannerAnalysis;
