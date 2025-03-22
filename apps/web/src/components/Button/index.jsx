import React from "react";
import { Container } from "./styled";

const Button = ({ children, variant = "default" }) => {
  return <Container variant={variant}>{children}</Container>;
};

export default Button;
