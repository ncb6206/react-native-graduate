import React, { Component } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const Font = styled.Text`
  font-size: 30;
  margin-bottom: 10;
`;

export default function Main() {
  return (
    <Container>
      <Font>MainScreen</Font>
    </Container>
  );
}
