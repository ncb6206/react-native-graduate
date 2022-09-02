import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
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
      <LogoTitle></LogoTitle>
      <TextInput style={styles.input} onChangeText={setUerId} value={userid} />
      <TextInput style={styles.input} onChangeText={setNickname} value={nickname} />
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput style={styles.input} onChangeText={setPhone} value={phone} />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 24,
  },
});
