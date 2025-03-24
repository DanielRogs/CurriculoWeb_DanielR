import React, { useState } from "react";
import { Container, Form, Nav } from "./styled";

import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import Button from "../Button";
import TextInput from "../TextInput";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(name, email, message);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso!");
  };

  return (
    <Container>
      <ToastContainer />
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
            <h1>Pretendendo realizar um projeto?</h1>

            <Form>
              <TextInput
                placeholder={"Qual o seu nome?"}
                onChange={handleName}
              />
              <TextInput
                placeholder={"Qual o seu melhor email?"}
                onChange={handleEmail}
              />
              <TextInput
                placeholder={"Me conte um pouco sobre o seu projeto."}
                onChange={handleMessage}
              />
              <Button onClick={handleSubmit}>Enviar</Button>
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
