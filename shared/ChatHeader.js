import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyles } from "../global/style";

import socket from './socket';

export default function ChatHeader({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('roomData', roomData => {
      setUsers(roomData.users);
      console.log(roomData);
    });
  }, []);

  const closeChat = () => {
    socket.emit("end")
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerSection}>
        <Text style={globalStyles.headingText}>chatGlint</Text>
      </View>
      <View style={styles.headerSection}>
        <View style={styles.sections}>
          <FontAwesome name="circle" size={18} color="#97CDA3" />
          <Text style={styles.statusCount}>{users.length}</Text>
        </View>
        <TouchableOpacity onPress={closeChat} activeOpacity={0.7}>
          <FontAwesome name="close" size={26} color="#3C3C3C" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    height: "100%",
    backgroundColor: "#DBDFEA",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  sections: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
  },
  statusCount: {
    fontSize: 18,
    color: "#7FA3A1",
  },
});
