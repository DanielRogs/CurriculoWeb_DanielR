import React from "react";
import { Container, Lista } from "./styled";

const Header = () => {
  return (
    <Container>
      <Lista>
        <li>Início</li>
        <li>Sobre Mim</li>
        <li>Tecnologias</li>
        <li>Projetos</li>
        <li>Contato</li>
      </Lista>
    </Container>
  );
};

export default Header;
