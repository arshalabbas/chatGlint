import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { globalStyles } from "../global/style";

//components
import ChatArea from "./components/ChatArea";

import socket from "../shared/socket";

export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (socket.disconnected) socket.connect();

    const name = navigation.getParam("name");
    const room = navigation.getParam("room");

    socket.emit("join", { name, room });

    return(() => socket.disconnect());
  }, [navigation]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const keyBoardDissmiss = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={keyBoardDissmiss}>
        <ScrollView>
          {messages.map((msg, key) => <Text key={key}>{msg.user}: {msg.text}</Text>)}
        </ScrollView>
      </TouchableWithoutFeedback>
      <View style={styles.chatSection}>
        <ChatArea />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messagesSection: {
    flex: 1,
  },
});
