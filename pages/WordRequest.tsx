import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@rneui/themed";
import { basic_theme } from "../theme";

export default function WordRequest() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="요청 제목" onChangeText={setTitle} value={title} />
      <TextInput style={styles.input} placeholder="요청 내용" onChangeText={setContent} value={content} />
      <TextInput style={styles.input} placeholder="요청 단어" onChangeText={setName} value={name} />
      <Button
        containerStyle={{
          width: "80%",
        }}
        buttonStyle={{
          backgroundColor: basic_theme.buttoncolor,
          borderColor: "white",
          borderRadius: 10,
        }}
        titleStyle={{
          fontWeight: "bold",
          fontSize: 20,
        }}
        title="등록하기"
      />
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
  input: {
    width: "70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
