import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 8,
  },
  card_container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
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
});
