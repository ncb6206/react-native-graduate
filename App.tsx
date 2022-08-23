import { StatusBar } from "expo-status-bar";
import React from 'react';
import styled from 'styled-components/native';
import { Button } from "react-native";

const Container = styled.View`
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
`;

const Font = styled.Text`
  fontSize: 30,
  marginBottom : 10,
`;

export default function App() {
  return (
    <Container>
      <Font>Button Component </Font>
      <Button title="Button" onPress={() => alert("click!")}/>
      <StatusBar style="auto" />
    </Container>
  );
}

