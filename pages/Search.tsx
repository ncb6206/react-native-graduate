import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { basic_theme } from "../theme";

export default function Search({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SearchScreen</Text>
      <Button
        title="Go to WordInfo"
        onPress={() => navigation.navigate("WordInfo")}
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
