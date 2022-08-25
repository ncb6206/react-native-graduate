import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { basic_theme } from "../theme";

const Container = styled.View`
  flex: 1;
  background-color: basic_theme.bgColor;
  align-items: center;
  justify-content: center;
`;

const Font = styled.Text`
  font-size: 48;
  font-family: "NotoSansKR-Bold";
  font-weight: "400";
  color: "black";
  margin: 10;
  text-align: center;
`;

export default function InitialScreen() {
  return (
    <Container>
      <Font>MainScreen</Font>
    </Container>
  );
}
