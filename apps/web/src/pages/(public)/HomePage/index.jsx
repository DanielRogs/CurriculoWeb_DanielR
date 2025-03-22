import React from "react";
import { ApresentationSection, Container } from "./styled";

const HomePage = () => {
  return (
    <Container>
      <ApresentationSection>
        <section className="section-name">
          <span className="first-name">Daniel</span>{" "}
          <span className="last-name">Rodrigues.</span>
          <div className="line" />
        </section>
        <section className="section-description">
          <p>Olá, Bem Vindo!</p>
          <h1>
            Engenheiro de <br /> Software pela <span>UnB</span>.
          </h1>
          <p>
            Soluções em Engenharia de Software e design para aplicações Web e
            Mobile.
          </p>
          <section className="section-buttons"></section>
        </section>
      </ApresentationSection>
    </Container>
  );
};

export default HomePage;
