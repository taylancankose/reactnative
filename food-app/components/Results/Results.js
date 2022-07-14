import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './Results.style';

function Results({item, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: item.strMealThumb}}>
          <View style={styles.bg}>
            <Text style={styles.meal}>{item.strMeal}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Results;
