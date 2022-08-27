import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { basic_theme } from "./theme";
import * as Font from "expo-font";
import Initial from "./pages/InitialScreen";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);
  const Stack = createStackNavigator();

  // font 불러오기
  useEffect(() => {
    const Load = async () => {
      await Font.loadAsync({
        "notosanskr-black": require("./assets/fonts/NotoSansKR-Black.otf"),
        "notosanskr-bold": require("./assets/fonts/NotoSansKR-Bold.otf"),
        "notosanskr-light": require("./assets/fonts/NotoSansKR-Light.otf"),
        "notosanskr-medium": require("./assets/fonts/NotoSansKR-Medium.otf"),
        "notosanskr-regular": require("./assets/fonts/NotoSansKR-Regular.otf"),
        "notosanskr-thin": require("./assets/fonts/NotoSansKR-Thin.otf"),
      });
      setFontLoad(true);
    };
    Load();
  }, []);

  // font Loading 여부에 따라 return
  return fontLoad ? (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* BottomTAB 없는 Screen */}
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Login" component={Login} />
        {/* BottomTAB 있는 Screen */}
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View style={styles.appLoading}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: basic_theme.bgColor,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
    fontFamily: "bold",
    fontWeight: "400",
    color: "black",
  },
  logo: {
    width: 100,
    height: 100,
  },
  appLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
