import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

import styles from './Login.style';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

const initialFormValues = {
  email: '',
  password: '',
};

function Login({navigation}) {
  const handleRegister = () => {
    navigation.navigate('Register');
  };
  const handleSubmitLogin = async formValues => {
    const {email, password} = formValues;
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('logged in', formValues);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.header}>Sign In</Text>
        <Text style={styles.sub_header}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
        </Text>
      </View>
      <View style={styles.bottom_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleSubmitLogin}>
          {({handleChange, values, handleSubmit}) => (
            <>
              <Input
                onChange={handleChange('email')}
                values={values.email}
                placeholder="E-posta"
              />
              <Input
                onChange={handleChange('password')}
                values={values.password}
                placeholder="Şifre"
                isPassword
              />
              <Button text="Giriş Yap" theme="third" onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Button text="Kayıt Ol" theme="fourth" onPress={handleRegister} />
      </View>
    </View>
  );
}

export default Login;
