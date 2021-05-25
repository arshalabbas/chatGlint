import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { globalStyles } from "../utils/style";

//components
import ChatArea from "./components/ChatArea";
import Message from "./components/Message";

import socket from "../utils/socket";

export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [toggleAutoScroll, setToggleAutoScroll] = useState(true);

  const scrollViewRef = useRef();

  const name = navigation.getParam("name");
  const room = navigation.getParam("room");

  useEffect(() => {
    if (socket.disconnected) socket.connect();

    socket.emit("join", { name, room });

    return () => socket.disconnect();
  }, [navigation]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const keyBoardDissmiss = () => Keyboard.dismiss();

  const autoScroll = () => {
    if (!toggleAutoScroll) return;
    scrollViewRef.current.scrollToEnd();
  };

  const autoScrollOn = () => setToggleAutoScroll(true);

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={keyBoardDissmiss}>
        <View style={styles.messagesContainer}>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={autoScroll}
            // onScrollBeginDrag={() => setToggleAutoScroll(false)}
          >
            <View>
              {messages.map((msg, key) => (
                <Message name={name} message={msg} key={key} />
              ))}
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.chatSection}>
        <ChatArea />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messagesContainer: {
    flex: 1,
  },
});
