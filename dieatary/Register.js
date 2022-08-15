import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import Calendar from "../components/Calendar/Calendar";

function Register() {
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
  const handleRegister = (values) => {
    setRegisterInfo({ ...values, gender: gender });
  };
  console.log(registerInfo);

  return (
    <View>
      <Formik initialValues={registerInfo} onSubmit={handleRegister}>
        {({ handleChange, handleSubmit, registerInfo }) => (
          <View>
            <TextInput
              onChangeText={handleChange("name")}
              value={registerInfo?.name}
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange("email")}
              value={registerInfo?.email}
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange("password")}
              value={registerInfo?.password}
              secureTextEntry={true}
              style={styles.input}
            />
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            >
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Non-Binary" value="Non-Binary" />
            </Picker>
            <Calendar />
            <Pressable style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.btn_title}>Submit</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    margin: 10,
    width: Dimensions.get("screen").width / 1.3,
    height: 45,
    borderRadius: 5,
    padding: 10,
  },
  btn: {
    width: Dimensions.get("screen").width / 1.3,
    height: 45,
    margin: 10,
    backgroundColor: "cornflowerblue",
    borderRadius: 5,
    justifyContent: "center",
  },
  btn_title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});
