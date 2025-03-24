import React from "react";
import {
  AboutMeSection,
  ApresentationSection,
  Container,
  ProjectsSection,
  SkillsSection,
  Space,
  TecnoSection,
} from "./styled";
import Button from "../../../components/Button";

import {
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
  FaPencilRuler,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaArrowRight,
} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiPython,
  SiReact,
  SiExpo,
  SiNodedotjs,
} from "react-icons/si";
import CardSkills from "../../../components/CardSkills";
import CardTecno from "../../../components/CardTecno";
import CardProject from "../../../components/CardProject";
import ButtonIcon from "../../../components/ButtonIcon";

import Daniel from "../../../assets/Daniel.png";
import PresenceCapa from "../../../assets/(projects)/PresenceCapa.png";
import AuEncontroCapa from "../../../assets/(projects)/AuEncontroCapa.png";
import CAPJUCapa from "../../../assets/(projects)/CAPJUCapa.png";
import FamiliaSitioCapa from "../../../assets/(projects)/FamiliaSitioCapa.png";
import AlvorecerFeudalCapa from "../../../assets/(projects)/AlvorecerFeudalCapa.png";

const HomePage = () => {
  return (
    <Container>
      <ApresentationSection>
        <section className="section-name">
          <span className="first-name">Daniel</span>
          <img src={Daniel} alt="Daniel Rodrigues" />
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
      <SkillsSection>
        <CardSkills
          icon={<FaPencilRuler className="icon" />}
          title={"Designer de Interface"}
        />
        <CardSkills
          icon={<FaLaptopCode className="icon" />}
          title={"Desenvolvedor Fullstack"}
        />
        <CardSkills
          icon={<FaListCheck className="icon" />}
          title={"Elicitação de Requisitos"}
        />
      </SkillsSection>
      <TecnoSection>
        <section className="section-description">
          <span>Tecnologias</span>
          <h1>Ferramentas de Desenvolvimento</h1>
          <p>Saiba quais tecnologias acompanham meus projetos e serviços.</p>
        </section>
        <section className="section-tecnos">
          <CardTecno
            icon={<FaHtml5 className="icon" />}
            title={"HTML 5"}
            description={"Estrutura e organização para páginas da web."}
          />
          <CardTecno
            icon={<FaCss3Alt className="icon" />}
            title={"CSS"}
            description={"Estilização e design para a web."}
          />
          <CardTecno
            icon={<SiJavascript className="icon" />}
            title={"JavaScript"}
            description={"Interatividade e dinamismo em sites."}
          />
          <CardTecno
            icon={<SiTypescript className="icon" />}
            title={"TypeScript"}
            description={"JavaScript com tipagem estática."}
          />
          <CardTecno
            icon={<SiPython className="icon" />}
            title={"Python"}
            description={"Simplicidade e poder para diversas aplicações."}
          />
          <CardTecno
            icon={<FaDocker className="icon" />}
            title={"Docker"}
            description={"Contêineres para aplicações escaláveis."}
          />
          <CardTecno
            icon={<SiReact className="icon" />}
            title={"ReactJS"}
            description={"Construção de interfaces dinâmicas."}
          />
          <CardTecno
            icon={<SiExpo className="icon" />}
            title={"Expo/React Native"}
            description={"Apps mobile com React Native."}
          />
          <CardTecno
            icon={<SiNodedotjs className="icon" />}
            title={"Node.js"}
            description={"Back-end com JavaScript no servidor."}
          />
          <CardTecno
            icon={<SiMysql className="icon" />}
            title={"MySQL"}
            description={"Banco de dados relacional robusto."}
          />
          <CardTecno
            icon={<SiMongodb className="icon" />}
            title={"MongoDB"}
            description={"Banco de dados NoSQL flexível."}
          />
        </section>
      </TecnoSection>
      <ProjectsSection>
        <section className="section-description">
          <span>Projetos</span>
          <h1>Trabalhos Recentes.</h1>
          <p>
            Acompanhe projetos de outros produtos de software em andamento em
            meu GitHub.
          </p>

          <ButtonIcon icon={<FaArrowRight className="icon" />}>
            Visitar GitHub
          </ButtonIcon>
        </section>
        <section className="section-projects">
          <CardProject
            image={PresenceCapa}
            title={"Presence - Aplicativo de Chamadas Digitais"}
            description={
              "Uma forma moderna e ágil de registrar presenças em sala de aula. Professores criam turmas, geram códigos para chamadas e monitoram a frequência dos alunos em tempo real, eliminando o papel e tornando o processo mais prático."
            }
          />
          <CardProject
            image={CAPJUCapa}
            title={"CAPJU - Gerenciador de Processos Juríricos"}
            description={
              "Desenvolvido para o Tribunal de Justiça do Distrito Federal, o CAPJU é um sistema de gerenciamento de processos jurídicos que facilita a comunicação entre os divesos setores do tribunal através do controle de status e notificações em tempo real."
            }
          />
          <CardProject
            image={AuEncontroCapa}
            title={"Au! Encontro - Aplicativo de Auxílio aos Animais"}
            description={
              "O Au! Encontro é o aplicativo que auxilia usuários em processos de adoção e em situações de perda do animal. Com um sistema de geolocalização, o app encontra animais que foram perdidos e os devolve aos seus donos em uma estratégia semelhante ao jogo 'Pokémon Go'."
            }
          />
          <CardProject
            image={FamiliaSitioCapa}
            title={"Família do Sítio - Site Institucional"}
            description={
              "Desenvolvido para a empresa Família do Sítio, o seu site institucional foi uma plataforma de vendas de produtos orgânicos e naturais. Com um design clean e intuitivo, o site é responsivo e se adapta a qualquer dispositivo."
            }
          />
          <CardProject
            image={AlvorecerFeudalCapa}
            title={"Alvorecer Feudal - Aplicativo Educativo Gamificado"}
            description={
              "Desenvolvido em parceira com a Universidade de Brasília (UnB), o Alvorecer Feudal é um aplicativo educativo gamificado que aproxima alunos e professores através da análise de dados de perfomance de alunos em atividades de ensino. (Software Low-Code)"
            }
          />
        </section>
      </ProjectsSection>
    </Container>
  );
};

export default HomePage;
