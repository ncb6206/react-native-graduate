import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { basic_theme } from "../theme";

export default function Comment() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>CommentScreen</Text>
    </SafeAreaView>
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
    fontFamily: "notosanskr-bold",
    fontWeight: "400",
    color: "black",
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
