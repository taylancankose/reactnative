import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
  favoriteSelectors,
} from '../../redux/favoritesSlice';
import styles from './JobDetails.style';
import AsyncStorage from '@react-native-async-storage/async-storage';

function JobDetails({route}) {
  const dispatch = useDispatch();
  const favorites = useSelector(favoriteSelectors.selectAll);

  const {job} = route.params;
  const source = {
    html: `${job.contents}`,
  };
  const handleAddFavorites = id => {
    dispatch(addFavorite(id));
    AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  };
  const handleRemoveFavorites = id => {
    dispatch(deleteFavorite(id));
  };
  const fav = favorites.map(item => item.id);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.name}>{job.name}</Text>
            <Text style={styles.red_titles}>
              Locations:{' '}
              {job.locations.map((location, i) => (
                <Text style={styles.black_title_parts} key={i}>
                  {location.name}
                </Text>
              ))}
            </Text>
            <Text style={styles.red_titles}>
              Job Level:{' '}
              {job.levels.map((level, i) => (
                <Text style={styles.black_title_parts} key={i}>
                  {level.name}
                </Text>
              ))}
            </Text>
            <Text style={styles.job_details_title}>Job Details</Text>
            <RenderHTML
              baseStyle={{color: 'black', fontSize: 15}}
              source={source}
              contentWidth={Dimensions.get('window').width}
            />
          </View>
          <View style={styles.btn_container}>
            <TouchableOpacity
              onPress={() => Linking.openURL(`${job?.refs.landing_page}`)}
              style={styles.btn}>
              <Icon style={styles.icons} name="bag-checked" size={25} />
              <Text style={styles.action_texts}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={
                fav.includes(job.id)
                  ? () => handleRemoveFavorites(job.id)
                  : () => handleAddFavorites(job)
              }>
              <Icon
                style={styles.icons}
                name={fav.includes(job.id) ? 'heart-remove' : 'heart'}
                size={25}
              />
              <Text style={styles.action_texts}>
                {fav.includes(job.id) ? 'Remove' : 'Add to Favorites'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default JobDetails;
