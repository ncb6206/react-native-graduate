import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, ListItem } from "@rneui/themed";
import { basic_theme } from "../theme";

export default function Dictionary({ navigation }: any) {
  const ListConsonant: string[] = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

  return (
    <SafeAreaView style={styles.container}>
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
        title="검색"
        onPress={() => navigation.navigate("Search")}
      />
      <ScrollView style={styles.scroll}>
        {ListConsonant.map((consonant: Partial<string>, i: number) => (
          <ListItem
            key={i}
            onPress={() => {
              alert(`${consonant}`);
              navigation.navigate("SlangList");
            }}
            bottomDivider
          >
            <ListItem.Content>
              <ListItem.Title>
                <Text>{consonant}</Text>
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
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
    fontSize: 10,
    fontFamily: "notosanskr-black",
    color: "black",
    textAlign: "left",
  },
  input: {
    width: "70%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scroll: {
    width: "100%",
    marginTop: 10,
  },
});
