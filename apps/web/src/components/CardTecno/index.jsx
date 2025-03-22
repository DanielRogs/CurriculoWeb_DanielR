import React from "react";
import { Container } from "./styled";

const CardTecno = ({ icon, title, description }) => {
  return (
    <Container>
      {icon}
      <span className="title">{title}</span>
      <span className="description">{description}</span>
    </Container>
  );
};

export default CardTecno;
