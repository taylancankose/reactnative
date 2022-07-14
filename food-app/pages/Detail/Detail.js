import React from 'react';
import {
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Detail.style';
import Ingredients from './Ingredients';

function Detail({route}) {
  const {id} = route.params;
  const {results, error, loading} = useFetch(
    `${Config.API_URL}/lookup.php?i=${id}`,
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{uri: results?.meals[0]?.strMealThumb}}
        />
        <Text style={styles.title}>{results?.meals[0]?.strMeal}</Text>
        <Text style={styles.ingredients}>Ingredients</Text>

        <Ingredients results={results} />
        <Text style={styles.ingredients}>Directions</Text>
        <Text style={styles.instructions}>
          {results?.meals[0]?.strInstructions}
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Linking.openURL(`${results?.meals[0]?.strYoutube}`)}>
          <Text style={styles.btn_text}>Watch Script on Youtube</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Detail;
