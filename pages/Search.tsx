import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button, SearchBar } from "@rneui/themed";
import { basic_theme } from "../theme";

export default function Search({ navigation }: any) {
  const [searchslang, setSearchSlang] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        containerStyle={styles.search}
        placeholder="Search"
        onChangeText={setSearchSlang}
        value={searchslang}
      />
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
        title="Go to WordInfo"
        onPress={() => navigation.navigate("WordInfo")}
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
  search: {
    width: "90%",
  },
});
