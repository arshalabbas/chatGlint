import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";
import { Dimensions } from "react-native";

//screens
import Join from "../screens/Join";
import Chat from "../screens/Chat";

//headers
import JoinHeader from "../shared/JoinHeader";
import ChatHeader from "../shared/ChatHeader";

const screens = {
  join: {
    screen: Join,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <JoinHeader navigation={navigation} />,
      };
    },
  },
  chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <ChatHeader navigation={navigation} />,
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "center",
    headerStyle: {
      height: (Dimensions.get('window').height * 13) / 100,
    },
  },
});
export default createAppContainer(HomeStack);
