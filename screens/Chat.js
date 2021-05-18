import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../global/style";

//components
import ChatArea from "./components/ChatArea";
import Message from "./components/Message";

export default function Chat() {
  const keyBoardDissmiss = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={keyBoardDissmiss}>
        <View style={styles.messagesSection}>
            <Message />
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
