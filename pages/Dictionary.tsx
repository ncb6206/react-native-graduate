import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { basic_theme } from "../theme";

export default function Dictionary({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DictionaryScreen</Text>
      <Button
        title="Go to Search"
        onPress={() => navigation.navigate("Search")}
      />
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
