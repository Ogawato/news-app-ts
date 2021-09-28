import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { AppNavigator } from "./navigation/AppNavigator";

// type Props = {
//   imageUrl: string;
//   title: string;
//   author: string;
// };

export default function App() {
  return <AppNavigator />;
}
