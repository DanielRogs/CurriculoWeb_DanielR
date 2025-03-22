import React from "react";
import { Container, Form, Nav } from "./styled";

import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from "../Button";
import TextInput from "../TextInput";

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

            <Form>
              <TextInput placeholder={"Qual o seu nome?"} />
              <TextInput placeholder={"Qual o seu melhor email?"} />
              <TextInput
                placeholder={"Me conte um pouco sobre o seu projeto."}
              />
              <Button>Enviar</Button>
            </Form>
          </section>
        </div>
      </div>

      <section className="section-social">
        <FaLinkedin className="icon linkedin" />
        <FaGithubSquare className="icon github" />
        <FaInstagram className="icon insta" />
      </section>

      <p className="rights">
        Criado por <span>Daniel Rodrigues</span> | © Todos os direitos
        reservados, 2025.
      </p>
    </Container>
  );
};

export default Footer;
