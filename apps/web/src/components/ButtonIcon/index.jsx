import React from "react";
import { Container } from "./styled";

const ButtonIcon = ({ children, icon }) => {
  return (
    <Container>
      <button>{children}</button>
      {icon}
    </Container>
  );
};

export default ButtonIcon;
