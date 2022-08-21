import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import styles from "./Login.style";
import Icon from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-native-modern-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { LoginUser } from "../../../redux/auth/authSlice";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../../redux/dietSlice";

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (values) => {
    setLoginInfo(values);
    dispatch(login());
    navigation.navigate("HomeScreen", {
      screen: "Main",
      params: {
        screen: "MealPlanner",
        loginInfo,
      },
    });
  };
  console.log(loginInfo);

  const navigateRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={loginInfo} onSubmit={handleLogin}>
        {({ handleChange, handleSubmit, loginInfo }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              value={loginInfo?.email}
              style={styles.input}
              placeholder="Your email"
            />
            <TextInput
              onChangeText={handleChange("password")}
              value={loginInfo?.password}
              secureTextEntry={true}
              style={styles.input}
              placeholder="Your password"
            />
            <Pressable style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.btn_title}>Login</Text>
            </Pressable>
            <Pressable
              style={styles.navigate_register}
              onPress={navigateRegister}
            >
              <Text>Don't you have an account?</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Login;
