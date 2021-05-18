import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../global/style";

//components
import ChatArea from "./components/ChatArea";

export default function Chat() {
  return (
    <View style={globalStyles.container}>
      <View>
        <ChatArea />
      </View>
    </View>
  );
}
