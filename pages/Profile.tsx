import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "@rneui/themed";
import { basic_theme } from "../theme";

export default function Profile({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>로그인을 해주세요</Text>
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
        onPress={() => navigation.navigate("Login")}
      />
      <Text style={styles.text}>아이디가 없으면?</Text>
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
        onPress={() => navigation.navigate("SignUp")}
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
    fontSize: 30,
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
