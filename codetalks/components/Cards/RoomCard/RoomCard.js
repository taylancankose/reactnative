import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './RoomCard.style';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';
import parseContentData from '../../../utils/parseContentData';

function RoomCard({item, onLongPress}) {
  const [roomDetail, setRoomDetail] = useState([]);
  const navigation = useNavigation();
  const handleChat = async id => {
    try {
      await database()
        .ref(`rooms/${id}/messages`)
        .on('value', snapshot => snapshot.val());
      navigation.navigate('RoomDetails', {item});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={onLongPress}
      onPress={() => handleChat(item.id)}>
      <Text style={styles.text}>{item?.room}</Text>
      <Text style={styles.text}>Odası</Text>
    </TouchableOpacity>
  );
}

export default RoomCard;
