import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import styles from "./Register.style";
import Icon from "react-native-vector-icons/FontAwesome5";
import DatePicker from "react-native-modern-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../../redux/auth/authSlice";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../../redux/dietSlice";

function Register() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [calendarToggle, setCalendarToggle] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: null,
    weight: "",
    height: "",
  });
  const [gender, setGender] = useState();
  const [selectedDate, setSelectedDate] = useState("");

  const [years, months, days] = selectedDate.split("/");
  const thisYear = new Date().getFullYear();

  const handleRegister = (values) => {
    setRegisterInfo({
      ...values,
      gender: gender,
      age: Number(thisYear) - Number(years),
    });

    dispatch(registerUser(registerInfo));
    dispatch(login());
    navigation.navigate("HomeScreen", { registerInfo });
  };
  console.log(registerInfo);
  const navigateLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={registerInfo} onSubmit={handleRegister}>
        {({ handleChange, handleSubmit, registerInfo }) => (
          <View>
            <TextInput
              onChangeText={handleChange("name")}
              value={registerInfo?.name}
              style={styles.input}
              placeholder="Your name"
            />
            <TextInput
              onChangeText={handleChange("email")}
              value={registerInfo?.email}
              style={styles.input}
              placeholder="Your email"
            />
            <TextInput
              onChangeText={handleChange("password")}
              value={registerInfo?.password}
              secureTextEntry={true}
              style={styles.input}
              placeholder="Your password"
            />
            <View style={styles.age_gender_container}>
              <Picker
                style={styles.picker}
                selectedValue={gender}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              >
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Non-Binary" value="Non-Binary" />
              </Picker>
              <Pressable onPress={() => setCalendarToggle(!calendarToggle)}>
                <Icon name="calendar" size={25} />
              </Pressable>
            </View>
            {calendarToggle && (
              <DatePicker
                current="2020-07-13"
                selected="2020-07-23"
                mode="calendar"
                minuteInterval={30}
                style={styles.calendar}
                onSelectedChange={(date) => {
                  setSelectedDate(date);
                  handleChange("age");
                }}
              />
            )}
            <TextInput
              onChangeText={handleChange("height")}
              value={registerInfo?.height}
              style={styles.input}
              placeholder="Your height in cm"
            />
            <TextInput
              onChangeText={handleChange("weight")}
              value={registerInfo?.weight}
              style={styles.input}
              placeholder="Your weight in kg"
            />
            <Pressable style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.btn_title}>Submit</Text>
            </Pressable>
          </View>
        )}
      </Formik>
      <Pressable style={styles.navigate_login} onPress={navigateLogin}>
        <Text>Already have an account?</Text>
      </Pressable>
    </View>
  );
}

export default Register;
