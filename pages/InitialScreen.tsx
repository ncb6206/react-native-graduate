import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { basic_theme } from "../theme";

export default function InitialScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MainScreen</Text>
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
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
