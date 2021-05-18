import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Join({ navigation }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("...");

  const pressHandler = () => {
    navigation.push("chat");
  };

  const keyBoardDissmiss = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={keyBoardDissmiss}>
      <View style={styles.container}>
        <View style={styles.joinContainer}>
          <View style={styles.joinSection}>
            <Text style={styles.heading}>Join Chat</Text>
          </View>
          <View style={styles.joinSection}>
            <View style={styles.joinForm}>
              <Text style={styles.label}>Your nickname</Text>
              <TextInput
                placeholder="nickname..."
                style={styles.inputField}
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>
          <View style={styles.joinSection}>
            <Text style={styles.errorText}>{error ? error : null}</Text>
          </View>
          <View style={styles.joinSection}>
            <TouchableOpacity onPress={pressHandler}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>JOIN</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBDFEA",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  joinContainer: {
    backgroundColor: "#F3F6FB",
    width: 340,
    height: 280,
    borderRadius: 8,
    shadowColor: "#F3F6FB",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    elevation: 10,
    alignItems: "center",
    paddingVertical: 20,
  },
  joinSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontFamily: "Quicksand-Medium",
    fontSize: 40,
    color: "#54B0F3",
    textShadowColor: "#CDCED2",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },
  joinForm: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "Quicksand-Bold",
    color: "#B1C5C4",
    fontSize: 20,
  },
  inputField: {
    width: 290,
    height: 40,
    backgroundColor: "#EBF0FF",
    borderRadius: 15,
    paddingHorizontal: 12,
    fontFamily: "Quicksand-Medium",
    fontSize: 18,
    color: "#3C3C3C",
  },
  errorText: {
    color: "#E87070",
    fontFamily: "Quicksand-Bold",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    width: 180,
    height: 48,
    backgroundColor: "#77BCEE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    shadowColor: "#CDCED2",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 20,
    elevation: 3,
  },
  buttonText: {
    fontFamily: "Quicksand-Bold",
    fontSize: 20,
    letterSpacing: 2,
    color: "#F3F6FB",
  },
});
