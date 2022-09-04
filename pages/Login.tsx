import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { basic_theme } from "../theme";
import LogoTitle from "../component/LogoTitle";

export default function Login({ navigation }: any) {
  const [userid, setUerId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <LogoTitle />
      <TextInput style={styles.input} onChangeText={setUerId} value={userid} />
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
        title="로그인"
      />
      <View>
        <Text style={styles.text}>
          {"아이디가 없으면? "}
          <Text
            style={styles.navitext}
            onPress={() => navigation.navigate("SignUp")}
          >
            {"회원가입"}
          </Text>
        </Text>
      </View>
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
    fontSize: 20,
    fontFamily: "notosanskr-regular",
    color: "black",
    textAlign: "center",
  },
  navitext: {
    fontSize: 20,
    fontFamily: "notosanskr-bold",
    color: "#FF7F00",
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
