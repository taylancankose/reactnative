import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './Discover.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import {useNavigation} from '@react-navigation/native';

function Discover() {
  const navigation = useNavigation();
  const {results, error, loading} = useFetch(`${Config.API_URL}/random.php`);
  const onPress = id => {
    navigation.navigate('Detail', {id});
  };
  return (
    <TouchableWithoutFeedback onPress={() => onPress(results?.meals[0].idMeal)}>
      <View style={styles.container}>
        <Text style={styles.header}>Discover</Text>
        <View style={styles.inner_container}>
          <View style={styles.bg}>
            <ImageBackground
              style={styles.image}
              source={{uri: results?.meals[0].strMealThumb}}>
              <View style={styles.bg_container}>
                <View style={styles.food_container}>
                  <Text style={styles.title}>{results?.meals[0].strMeal}</Text>
                  <Text style={styles.desc} numberOfLines={2}>
                    {results?.meals[0].strInstructions}
                  </Text>
                  <View style={styles.detail_container}>
                    <Text style={styles.category}>
                      {results?.meals[0].strCategory}
                    </Text>
                    <Text style={styles.area}>{results?.meals[0].strArea}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Discover;
