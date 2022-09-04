import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { basic_theme } from "../theme";
import LogoTitle from "../component/LogoTitle";

export default function Signup() {
  const [userid, setUerId] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignUpPressed = () => {};

  return (
    <View style={styles.container}>
      <LogoTitle />
      <TextInput style={styles.input} onChangeText={setUerId} value={userid} />
      <TextInput
        style={styles.input}
        onChangeText={setNickname}
        value={nickname}
      />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput style={styles.input} onChangeText={setPhone} value={phone} />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.div} />
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
        title="회원가입"
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
  input: {
    width: "70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  div: {
    marginTop: 12,
  },
});
