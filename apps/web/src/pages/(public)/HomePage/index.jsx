import React from "react";
import {
  AboutMeSection,
  ApresentationSection,
  Container,
  Space,
} from "./styled";
import Button from "../../../components/Button";

import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";

const HomePage = () => {
  return (
    <Container>
      <ApresentationSection>
        <section className="section-name">
          <span className="first-name">Daniel</span>{" "}
          <span className="last-name">Rodrigues.</span>
          <div className="line" />
          <section className="section-social">
            <FaLinkedin className="icon linkedin" />
            <FaGithubSquare className="icon github" />
            <FaInstagram className="icon insta" />
          </section>
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
          <section className="section-buttons">
            <Button variant="orange">Baixar Currículo</Button>
            <Button>Entrar em Contato</Button>
          </section>
        </section>
      </ApresentationSection>
      <AboutMeSection>
        <div className="Centralização">
          <div className="Layout">
            <h1>Sobre Mim</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla est in nisl pellentesque, id dapibus neque sagittis.
              Cras eu bibendum risus. Donec nec nisi hendrerit, ultricies neque
              id, vulputate nunc. Curabitur et diam eget nulla gravida mattis.
              Praesent vitae tincidunt risus. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum
              urna nisi, commodo non eros ac, dignissim vehicula nisi. Duis nec
              neque molestie, dapibus erat nec, vehicula metus. Cras eu orci sed
              ante mollis pretium non a dolor. Maecenas faucibus vestibulum
              quam, et bibendum ex rutrum sit amet.
              <br />
              <br />
              Sed non scelerisque felis, eget fermentum felis. Cras
              pellentesque, nisi sed mattis sollicitudin, ligula arcu dapibus
              felis, quis aliquet risus arcu eget felis. Ut scelerisque, nunc
              non venenatis finibus, ligula felis tristique nunc, id dignissim
              ex lectus sit amet orci. Nam tristique risus ac eros euismod
              elementum. Donec molestie eleifend ipsum, sit amet commodo nunc
              posuere non. Donec consectetur lacus mollis blandit finibus.
              Integer sit amet libero quis purus suscipit bibendum non cursus
              ipsum. Curabitur varius ex eget purus pellentesque, ut pulvinar
              velit accumsan. Duis sollicitudin posuere efficitur. Duis
              dignissim tempor eros, quis feugiat dui cursus quis. Donec
              interdum sagittis lacus ut laoreet. Pellentesque placerat ligula
              id eros elementum, quis sagittis ipsum interdum.
            </p>
          </div>
        </div>
      </AboutMeSection>
      <Space />
    </Container>
  );
};

export default HomePage;
