import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profile_container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://media.bantmag.com/wp-content/uploads/2020/12/pjimage-10-800x533.jpg",
          }}
        />
        <View>
          <Text>Taylan Can Köse</Text>
          <Text>26</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile_container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 10,
  },
});
