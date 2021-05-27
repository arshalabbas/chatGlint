import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function AppLoading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DBDFEA",
  },
  text: {
    fontFamily: "Quicksand-Bold",
    fontSize: Dimensions.get("window").width / 10,
    textAlign: "center",
    color: "#rgba(142, 200, 300, 0.7)",
  },
});
