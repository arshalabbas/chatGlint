import React from "react";
import HomeStack from "./routes/homeStack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Quicksand-Medium": require("./fonts/Quicksand-Medium.ttf"),
    "Quicksand-Bold": require("./fonts/Quicksand-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <HomeStack />;
  }
}
