import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Message({ message, name }) {
  let style;
  let admin = false;
  let own = false;
  if (message.user === name) {
    own = true;
    style = ownMessageStyle;
  } else if (message.user === "chatGlint-admin-28-09-2003") {
    style = adminMessageStyle;
    admin = true;
  } else {
    style = othersMessageStyle;
  }

  const UserName = () => {
    return (
      <View style={userNameStyle.container}>
        <Text style={userNameStyle.textStyle}>{message.user}</Text>
        <Feather name="corner-right-down" style={userNameStyle.downIcon} />
      </View>
    );
  };

  return (
    <View style={style.container}>
      {!admin && !own ? <UserName /> : null}
      <View style={style.messageContainer}>
        <Text style={style.messageText}>{message.text}</Text>
      </View>
    </View>
  );
}

const ownMessageStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 2,
  },
  messageContainer: {
    backgroundColor: "#77BCEE",
    alignSelf: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    maxWidth: "80%",
  },
  messageText: {
    fontFamily: "Quicksand-Medium",
    fontSize: 15,
    textAlign: "right",
    letterSpacing: 0.5,
    color: "#ECECEC",
  },
});

const othersMessageStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 2,
  },
  messageContainer: {
    backgroundColor: "#F3F6FB",
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    maxWidth: "80%",
  },
  messageText: {
    fontFamily: "Quicksand-Medium",
    fontSize: 15,
    textAlign: "left",
    letterSpacing: 0.5,
    color: "#3C3C3C",
  },
});

const adminMessageStyle = StyleSheet.create({
  messageContainer: {
    width: "100%",
  },
  messageText: {
    textAlign: "center",
    fontFamily: "Quicksand-Regular",
    fontSize: 18,
    color: "#666666",
  },
});

const userNameStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: "Quicksand-Medium",
    fontSize: 12,
    marginLeft: 12,
  },
  downIcon: {
    marginLeft: 3,
    color: '#54B0F3',
    fontSize: 16,
  }
});
