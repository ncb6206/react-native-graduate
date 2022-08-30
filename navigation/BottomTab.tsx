import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Community from "../pages/Community";
import Profile from "../pages/Profile";
import WordExtract from "../pages/WordExtract";
import Main from "../pages/Main";
import StackDictionary from "../navigation/StackDictionary";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="StackDictionary" component={StackDictionary} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="WordExtract" component={WordExtract} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
