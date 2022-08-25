import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { basic_theme } from "./theme";
import * as Font from "expo-font";
import Initial from "./pages/InitialScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);

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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Button Component</Text>
      <Button title="Button" onPress={() => alert("click!")} />
      <StatusBar style="auto" />
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
});
