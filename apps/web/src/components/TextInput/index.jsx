import React from "react";
import { Container } from "./styled";

const TextInput = ({ placeholder, onChange }) => {
  return (
    <Container>
      <input placeholder={placeholder} onChange={onChange} />
    </Container>
  );
};

export default TextInput;
