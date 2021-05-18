import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ChatArea() {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.section}>
        <TextInput
          multiline={true}
          placeholder="your message..."
          style={styles.inputField}
        />
      </View>
      <View style={styles.section}>
        <TouchableOpacity>
          <View style={styles.sendButton}>
            <Ionicons name="send" size={20} color="#F3F6FB" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 85,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputField: {
    width: 280,
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
});
