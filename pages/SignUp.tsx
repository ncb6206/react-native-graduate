import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import { basic_theme } from "../theme";
import LogoTitle from "../component/LogoTitle";
import { axios_post } from "../api/api";
import axios from "axios";

export default function Signup({ navigation }: any) {
  const [userid, setUserId] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkpassword, setCheckPassword] = useState<string>("");

  const submitSignUpData = async () => {
    if (!(userid && nickname && email && phone && password && checkpassword)) {
      console.log("빈칸은 다 채워야함!");
    } else if (password !== checkpassword) {
      console.log("비밀번호가 일치하지 않음!");
    } else {
      axios_post("user/register", {
        u_id: userid,
        nickname: nickname,
        email: email,
        telephone: phone,
        password: password,
      })
        .then((response) => {
          console.log(response);
          console.log("회원가입 성공");
          navigation.navigate("Login");
        })
        .catch(function (error) {
          console.log(error);
          console.log("회원가입 실패");
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LogoTitle />
      <Input style={styles.input} placeholder="아이디" onChangeText={setUserId} value={userid} />
      <Input style={styles.input} placeholder="닉네임" onChangeText={setNickname} value={nickname} />
      <Input style={styles.input} placeholder="이메일" onChangeText={setEmail} value={email} />
      <Input style={styles.input} placeholder="전화번호" onChangeText={setPhone} value={phone} />
      <Input style={styles.input} placeholder="비밀번호" onChangeText={setPassword} value={password} />
      <Input style={styles.input} placeholder="비밀번호 확인" onChangeText={setCheckPassword} value={checkpassword} />
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
        onPress={submitSignUpData}
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
  input: {
    width: "70%",
    height: 40,
    padding: 5,
  },
  div: {
    marginTop: 12,
  },
});
