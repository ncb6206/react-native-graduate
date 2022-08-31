import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome, Octicons } from "@expo/vector-icons";
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
      <Tab.Screen
        name="메인"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home"
              style={{ color: focused ? "#00B386" : "#404040" }}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="검색"
        component={StackDictionary}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              style={{ color: focused ? "#00B386" : "#404040" }}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={Community}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="comment-discussion"
              style={{ color: focused ? "#00B386" : "#404040" }}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="추출"
        component={WordExtract}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="file-word-o"
              style={{ color: focused ? "#00B386" : "#404040" }}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              style={{ color: focused ? "#00B386" : "#404040" }}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
