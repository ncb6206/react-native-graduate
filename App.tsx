import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { getFonts, basic_theme } from "./theme";

export default function App() {
  getFonts();

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
