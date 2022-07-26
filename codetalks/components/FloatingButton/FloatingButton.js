import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './FloatingButton.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function FloatingButton({onPress}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <View style={styles.inner_container}>
            <Icon name="plus" size={30} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default FloatingButton;
