import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { basic_theme } from "../theme";

export default function WordExtract({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WordExtractScreen</Text>
      <Button
        title="Go to WordRequest"
        onPress={() => navigation.navigate("WordRequest")}
      />
      <Button title="신조어 추출" />
      <Button title="신조어 등록 요청" />
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
