import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "#f2f2f2",
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
  calendar: {
    borderRadius: 10,
    width: 300,
    height: 250,
  },
  picker: {
    width: 150,
    marginRight: 50,
  },
  age_gender_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  navigate_register: {
    justifyContent: "center",
    alignItems: "center",
  },
});
