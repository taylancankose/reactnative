import {FlatList, SafeAreaView, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../redux/careerSlice';
import styles from './Home.style';
import JobCard from '../../components/JobCard';
import {favoriteSelectors} from '../../redux/favoritesSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Home() {
  const dispatch = useDispatch();
  const jobData = useSelector(state => state.career.items);
  const favorites = useSelector(favoriteSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const renderJobs = ({item}) => <JobCard job={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.salute}>Hello!</Text>
      <FlatList data={jobData.results} renderItem={renderJobs} />
    </SafeAreaView>
  );
}

export default Home;
