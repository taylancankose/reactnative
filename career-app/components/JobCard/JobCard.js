import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './JobCard.style';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
  favoriteSelectors,
} from '../../redux/favoritesSlice';

function JobCard({job}) {
  const dispatch = useDispatch();
  const favorites = useSelector(favoriteSelectors.selectAll);
  const fav = favorites.map(item => item.id);

  const navigation = useNavigation();
  const handleJobDetail = () => {
    navigation.navigate('JobDetails', {job});
  };
  const handleAddFavorites = id => {
    dispatch(addFavorite(id));
    // AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  };
  const handleRemoveFavorites = id => {
    dispatch(deleteFavorite(id));
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={handleJobDetail}>
        <View style={styles.card}>
          <View style={styles.upper_container}>
            <View style={styles.job_container}>
              <Text style={styles.job_title}>{job.name}</Text>
              <Text>{job?.company?.name}</Text>
              <Text>{job?.locations[0]?.name}</Text>
            </View>
            <View style={styles.image_container}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://seeklogo.com/images/D/dribbble-logo-143FF96D65-seeklogo.com.png',
                }}
              />
            </View>
          </View>
          <View style={styles.bottom_container}>
            <View>
              <Text style={styles.level}>{job?.levels[0]?.name}</Text>
              <Text>{job?.publication_date}</Text>
            </View>
            <View style={styles.icon_container}>
              <Icon
                onPress={
                  fav.includes(job.id)
                    ? () => handleRemoveFavorites(job?.id)
                    : () => handleAddFavorites(job)
                }
                name={fav.includes(job?.id) ? 'bookmark' : 'bookmark-outline'}
                size={30}
                color={fav.includes(job?.id) ? '#00FA9A' : 'gray'}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

export default JobCard;
