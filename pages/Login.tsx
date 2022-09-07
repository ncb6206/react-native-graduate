import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { Button } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { basic_theme } from "../theme";
import LogoTitle from "../component/LogoTitle";

export default function Login({ navigation }: any) {
  const [userid, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <LogoTitle />
      <TextInput style={styles.input} placeholder="아이디" onChangeText={setUserId} value={userid} />
      <TextInput style={styles.input} placeholder="비밀번호" onChangeText={setPassword} value={password} />
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
          <Text style={styles.navitext} onPress={() => navigation.navigate("SignUp")}>
            {"회원가입"}
          </Text>
        </Text>
      </View>
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
