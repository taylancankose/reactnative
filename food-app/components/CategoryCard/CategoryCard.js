import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './CategoryCard.style';

function CategoryCard({category, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{uri: category.strCategoryThumb}}>
          <View style={styles.bg}>
            <Text style={styles.category}>{category.strCategory}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CategoryCard;
