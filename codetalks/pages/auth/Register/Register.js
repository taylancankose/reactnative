import React from 'react';
import {View, Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

import styles from './Register.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFormValues = {
  email: '',
  password: '',
  password2: '',
};

function Register({navigation}) {
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSubmitRegister = async formData => {
    const {email, password, password2} = formData;
    if (password !== password2) {
      Alert.alert('Error!', 'Passwords do not match!');
    }
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User created', formData);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.header}>Register</Text>
        <Text style={styles.sub_header}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
        </Text>
      </View>
      <View style={styles.bottom_container}>
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleSubmitRegister}>
          {({handleChange, handleSubmit, values}) => (
            <>
              <Input
                values={values.email}
                onChange={handleChange('email')}
                placeholder="E-posta"
              />
              <Input
                onChange={handleChange('password')}
                placeholder="Şifre"
                isPassword
                values={values.password}
              />
              <Input
                onChange={handleChange('password2')}
                placeholder="Şifre tekrar"
                isPassword
                values={values.password2}
              />
              <Button text="Kayıt Ol" theme="third" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

export default Register;
