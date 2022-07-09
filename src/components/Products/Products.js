import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Products.style';

const Product = ({products}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: products.imgURL}} />
      <View style={styles.innerContainer}>
        <Text style={styles.title_text}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
      </View>
    </View>
  );
};
export default Product;
