import React from "react";
import { View, Text } from "react-native";

export default function Messages({ name }) {
  return (
    <View>
      <Text>I'm {name}</Text>
    </View>
  );
}
