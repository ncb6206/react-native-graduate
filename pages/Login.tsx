import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { basic_theme } from "../theme";
import LogoTitle from "../component/LogoTitle";

export default function Login() {
  const [userid, setUerId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <LogoTitle></LogoTitle>
      <Text style={styles.text}>LoginScreen</Text>
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
