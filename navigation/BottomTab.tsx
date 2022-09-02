import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import Community from "../pages/Community";
import Profile from "../pages/Profile";
import WordExtract from "../pages/WordExtract";
import Main from "../pages/Main";
import StackDictionary from "../navigation/StackDictionary";
import { basic_theme } from "../theme";
import LogoTitle from "../component/LogoTitle";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="신조어 번역"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="신조어 번역"
        component={Main}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <Ionicons name="ios-home" style={{ color: focused ? basic_theme.focusedin : basic_theme.focusedout }} size={24} />,
        }}
      />
      <Tab.Screen
        name="검색"
        component={StackDictionary}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <FontAwesome name="search" style={{ color: focused ? basic_theme.focusedin : basic_theme.focusedout }} size={24} />,
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={Community}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <AntDesign name="eyeo" style={{ color: focused ? basic_theme.focusedin : basic_theme.focusedout }} size={24} />,
        }}
      />
      <Tab.Screen
        name="추출"
        component={WordExtract}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <FontAwesome name="file-word-o" style={{ color: focused ? basic_theme.focusedin : basic_theme.focusedout }} size={24} />,
        }}
      />
      <Tab.Screen
        name="프로필"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <Ionicons name="person" style={{ color: focused ? basic_theme.focusedin : basic_theme.focusedout }} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}
