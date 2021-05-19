import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../global/style";

//components
import ChatArea from "./components/ChatArea";
import Message from "./components/Message";

import socket from '../shared/socket';

export default function Chat({ navigation }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    setName(navigation.getParam("name"));
    setRoom(navigation.getParam("room"));

    socket.emit("join", { name, room });

    socket.on('message', message => {
      console.log(message);
    })

    return () => {
      socket.disconnect();
    }
  }, []);

  const keyBoardDissmiss = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={keyBoardDissmiss}>
        <View style={styles.messagesSection}>
            <Message name={navigation.getParam("name")} />
        </View>
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
