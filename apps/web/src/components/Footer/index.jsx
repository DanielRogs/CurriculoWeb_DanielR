import React from "react";
import { Container, Nav } from "./styled";

import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="Centralização">
        <div className="Layout">
          <section className="section-nav">
            <h1>Obrigado pelo seu interesse!</h1>

            <Nav>
              <li>Voltar ao Topo</li>
              <li>Baixar Currículo</li>
              <li>Sobre Mim</li>
              <li>Tecnologias Dominadas</li>
              <li>Projetos</li>
            </Nav>
          </section>
          <section className="section-forms">
            <h1>Interessado em realizar um projeto?</h1>
          </section>
        </div>
      </div>

      <section className="section-social">
        <FaLinkedin className="icon linkedin" />
        <FaGithubSquare className="icon github" />
        <FaInstagram className="icon insta" />
      </section>
    </Container>
  );
};

export default Footer;
