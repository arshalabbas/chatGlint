import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";

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
    headerTitleAlign: 'center',
    headerStyle: {
      height: 85,
    },
  },
});
export default createAppContainer(HomeStack);
