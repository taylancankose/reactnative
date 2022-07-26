import React from 'react';
import {Text, View} from 'react-native';
import styles from './RoomDetailCard.style';
import {formatDistance, parseISO} from 'date-fns';
import {en} from 'date-fns/locale';

function RoomDetailCard({item}) {
  const formattedDate = formatDistance(parseISO(item?.date), new Date(), {
    addSuffix: true,
    locale: en,
  });
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.username}>{item?.name}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <Text style={styles.message}>{item?.message}</Text>
    </View>
  );
}

export default RoomDetailCard;
