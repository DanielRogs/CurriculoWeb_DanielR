import React from "react";
import { Container } from "./styled";

const CardSkills = ({ icon, title }) => {
  return (
    <Container>
      {icon}
      <span>{title}</span>
    </Container>
  );
};

export default CardSkills;
