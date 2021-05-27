import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import AppLoading from '../shared/AppLoading';
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../utils/style";

//components
import ChatArea from "./components/ChatArea";
import Message from "./components/Message";

import socket from "../utils/socket";

const isScrollEnds = ({ layoutMeasurement, contentOffset, contentSize }) => {
  return layoutMeasurement.height + contentOffset.y >= contentSize.height;
};

export default function Chat({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [toggleAutoScroll, setToggleAutoScroll] = useState(true);
  const [connected, setConnected] = useState(false);

  const scrollViewRef = useRef();

  const name = navigation.getParam("name");
  const room = navigation.getParam("room");

  useEffect(() => {
    if (socket.disconnected) socket.connect();

    socket.emit("join", { name, room }, () => setConnected(true));

    return () => socket.disconnect();
  }, [navigation]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const autoScroll = () => {
    if (!toggleAutoScroll) return;
    scrollViewRef.current.scrollToEnd();
  };

  const scrolling = ({ nativeEvent }) => {
    if (isScrollEnds(nativeEvent)) return setToggleAutoScroll(true);
    setToggleAutoScroll(false);
  };

  if (!connected) return <AppLoading />;
  return (
    <View style={globalStyles.container}>
      <View style={styles.messagesContainer}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={autoScroll}
          onScroll={scrolling}
          keyboardShouldPersistTaps="always"
        >
          <View>
            {messages.map((msg, key) => (
              <Message
                name={name}
                message={msg}
                key={key}
                setToggleAutoScroll={setToggleAutoScroll}
              />
            ))}
          </View>
        </ScrollView>
        {!toggleAutoScroll ? (
          <TouchableNativeFeedback
            onPress={() => scrollViewRef.current.scrollToEnd()}
          >
            <AntDesign name="circledown" style={styles.scrollToEndBtn} />
          </TouchableNativeFeedback>
        ) : null}
      </View>
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
  scrollToEndBtn: {
    color: "rgba(142, 200, 241, 0.5)",
    fontSize: 38,
    position: "absolute",
    bottom: 15,
    right: 15,
    elevation: 3,
    textShadowColor: "#333",
    textShadowOffset: { width: 0, height: 0.5 },
    textShadowRadius: 0.2,
  },
});
