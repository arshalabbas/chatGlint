import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import socket from "../../utils/socket";

export default function ChatArea() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendMessage = () => {
    if (sending === true) return;
    const trimmedMsg = message.trim();
    if (!trimmedMsg) return setMessage("");
    if (trimmedMsg.length > 300)
      return Alert.alert(
        "Message length limit!",
        "more than 300 charecters not support..."
      );
    setMessage("");
    setSending(true);
    socket.emit("sendMessage", trimmedMsg, () => setSending(false));
  };

  return (
    <View>
      {sending ? (
        <View style={styles.sendingTextContainer}>
          <Text style={styles.sendingText}>sending...</Text>
        </View>
      ) : null}
      <View style={styles.inputContainer}>
        <View style={styles.section}>
          <TextInput
            multiline={true}
            placeholder="your message..."
            style={styles.inputField}
            value={message}
            onChangeText={setMessage}
          />
        </View>
        <View style={styles.section}>
          <TouchableOpacity onPress={sendMessage} activeOpacity={0.7}>
            <View style={styles.sendButton}>
              <Ionicons name="send" size={20} color="#F3F6FB" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 2,
    marginBottom: 8,
  },
  inputField: {
    width: (Dimensions.get("window").width * 80) / 100,
    height: 45,
    backgroundColor: "#F3F6FB",
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 17,
    fontFamily: "Quicksand-Medium",
    color: "#3C3C3C",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 30,
  },
  sendButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#77BCEE",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 30,
  },
  sendingTextContainer: {
    width: '100%',
    alignItems: 'center',
  },
  sendingText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Quicksand-Bold",
    color: "#666666",
    position: 'absolute',
    bottom: 0,
  },
});
