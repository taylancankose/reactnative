import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 8,
  },
  card_container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  food: {
    marginLeft: 10,
    marginRight: 100,
    margin: 5,
    flexWrap: "wrap",
  },
  brand: {
    marginLeft: 10,
    marginRight: 100,
  },
  photo: {
    height: Dimensions.get("screen").height / 8,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  food_info_container: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 100,
    margin: 5,
    justifyContent: "space-between",
  },
  food_info: {
    marginRight: 5,
  },
  blue_dot: {
    height: 10,
    width: 10,
    backgroundColor: "#27A3CF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 5,
  },
  orange_dot: {
    height: 10,
    width: 10,
    backgroundColor: "#FFB61F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 5,
  },
  green_dot: {
    height: 10,
    width: 10,
    backgroundColor: "#A1DF43",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 5,
  },
  red_dot: {
    height: 10,
    width: 10,
    backgroundColor: "#FF5247",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 5,
  },
  icon_container: {
    flexDirection: "row",
    margin: 5,
  },
  icon: {
    marginLeft: 15,
  },
});
