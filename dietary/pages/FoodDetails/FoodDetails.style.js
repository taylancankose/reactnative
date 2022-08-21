import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 5,
    marginBottom: 10,
  },
  serving_container: {
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  amount: {
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  item_container: {
    marginLeft: 20,
    marginRight: 20,
    margin: 5,
  },
  card_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    marginLeft: 20,
    margin: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  line: {
    borderWidth: 1,
    borderColor: "#EFEFF0",
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
  },
  btn_container: {
    alignSelf: "center",
    margin: 20,
    flex: 1,
    justifyContent: "flex-end",
  },
  btn: {
    backgroundColor: "cornflowerblue",
    width: 250,
    height: 40,
    borderRadius: 100,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,

    justifyContent: "center",
    alignItems: "center",
  },
  btn_title: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
});
