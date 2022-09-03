import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { basic_theme } from "../theme";

export default function Community({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CommunityScreen</Text>
      <Button title="Go to Post" onPress={() => navigation.navigate("Post")} />
      <Button
        title="Go to Comment"
        onPress={() => navigation.navigate("Comment")}
      />
      <Button title="게시글 작성" />
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
