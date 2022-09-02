import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { basic_theme } from "../theme";

export default function Profile({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Go to SignUp" onPress={() => navigation.navigate("SignUp")} />
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
