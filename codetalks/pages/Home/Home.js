import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Home.styles';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <View style={styles.upper_container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/coding.png')}
        />
        <Text style={styles.title}>codetalks</Text>
      </View>
      <View style={styles.bottom_container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
          incididunt ut labore et.
        </Text>
        <View style={styles.btn_container}>
          <Button text="Login" onPress={handleLogin} />
          <Button text="Register" theme="secondary" onPress={handleRegister} />
        </View>
      </View>
    </View>
  );
}

export default Home;
