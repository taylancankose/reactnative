import React from 'react';
import {View, Text} from 'react-native';
import styles from './Detail.style';

function Ingredients({results}) {
  return (
    <View style={styles.outer_shell}>
      <View style={styles.first_shell}>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure1} {results?.meals[0]?.strIngredient1}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure2} {results?.meals[0]?.strIngredient2}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure3} {results?.meals[0]?.strIngredient3}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure4} {results?.meals[0]?.strIngredient4}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure5} {results?.meals[0]?.strIngredient5}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure6} {results?.meals[0]?.strIngredient6}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure7} {results?.meals[0]?.strIngredient7}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure8} {results?.meals[0]?.strIngredient8}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure9} {results?.meals[0]?.strIngredient9}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure10} {results?.meals[0]?.strIngredient10}
        </Text>
      </View>
      <View style={styles.second_shell}>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure11} {results?.meals[0]?.strIngredient11}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure12} {results?.meals[0]?.strIngredient12}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure13} {results?.meals[0]?.strIngredient13}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure14} {results?.meals[0]?.strIngredient14}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure15} {results?.meals[0]?.strIngredient15}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure16} {results?.meals[0]?.strIngredient16}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure17} {results?.meals[0]?.strIngredient17}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure18} {results?.meals[0]?.strIngredient18}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure19} {results?.meals[0]?.strIngredient19}
        </Text>
        <Text style={styles.ing}>
          {results?.meals[0]?.strMeasure20} {results?.meals[0]?.strIngredient20}
        </Text>
      </View>
    </View>
  );
}

export default Ingredients;
