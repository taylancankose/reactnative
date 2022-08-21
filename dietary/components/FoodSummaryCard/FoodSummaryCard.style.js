import { Dimensions, StyleSheet } from "react-native";

const base_style = StyleSheet.create({
  card_container: {
    margin: 5,
    justifyContent: "center",
    width: 80,
  },
  title_container: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "white",
  },
  value_container: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    color: "#44497A",
    fontWeight: "bold",
  },
});

export default StyleSheet.create({
  first: StyleSheet.create({
    ...base_style,
    value_container: {
      ...base_style.value_container,
      backgroundColor: "#FCE2E2",
    },
  }),
  second: StyleSheet.create({
    ...base_style,
    value_container: {
      ...base_style.value_container,
      backgroundColor: "#FEE8D0",
    },
  }),
  third: StyleSheet.create({
    ...base_style,
    value_container: {
      ...base_style.value_container,
      backgroundColor: "#D9F2C5",
    },
  }),
  fourth: StyleSheet.create({
    ...base_style,
    value_container: {
      ...base_style.value_container,
      backgroundColor: "#C7E3F1",
    },
  }),
});
