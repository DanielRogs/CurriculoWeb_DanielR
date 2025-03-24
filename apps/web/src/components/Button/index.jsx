import React from "react";
import { Container } from "./styled";

const Button = ({ children, variant = "default", type, onClick }) => {
  return (
    <Container variant={variant} type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
