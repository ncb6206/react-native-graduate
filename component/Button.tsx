import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button as ElementsButton } from "react-native-elements";
import { basic_theme } from "../theme";

//버튼 하나로 통일해서 쓰고 싶은데 아직 안되서 보류중
/*
const Button = ({ type, style, children, ...props }: Props) => (
  <ElementsButton
    style={[styles.button, style]}
    titleStyle={styles.text}
    type={type}
    buttonStyle={{ backgroundColor: basic_theme.buttoncolor }}
    {...props}
  >
    {children}
  </ElementsButton>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontFamily: "notosanskr-black",
    fontSize: 15,
    lineHeight: 26,
  },
});
*/

export default function Button({ children }: any) {
  return (
    <ElementsButton
      containerStyle={{ width: "80%" }}
      buttonStyle={{ backgroundColor: basic_theme.buttoncolor }}
      titleStyle={{ fontFamily: "notosanskr-black", fontSize: 15 }}
    >
      {children}
    </ElementsButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontFamily: "notosanskr-black",
    fontSize: 15,
    lineHeight: 26,
  },
});
