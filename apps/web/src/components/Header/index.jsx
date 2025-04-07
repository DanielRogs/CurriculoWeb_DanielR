import React, { useState } from "react";
import { Container, Lista } from "./styled";
import { IoMenu } from "react-icons/io5";

const Header = ({ language = "ptbr" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    language = lang;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <Lista>
        <li>Início</li>
        <li>Sobre Mim</li>
        <li>Tecnologias</li>
        <li>Projetos</li>
        <li>Contato</li>
      </Lista>
      <div className="language-selection">
        <span
          style={
            language === "ptbr"
              ? { color: "var(--secondary-color)" }
              : { color: "var(--tertiary-color)" }
          }
          onClick={() => handleLanguageChange("ptbr")}
        >
          PT
        </span>
        <span
          style={
            language === "en"
              ? { color: "var(--secondary-color)" }
              : { color: "var(--tertiary-color)" }
          }
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </span>
      </div>

      <div className="mobile-menu">
        <IoMenu className="icon" onClick={() => handleMobileMenuToggle()} />
      </div>

      <div
        className="menu"
        style={{ display: isMobileMenuOpen ? "flex" : "none" }}
      >
        <span>Início</span>
        <span>Sobre Mim</span>
        <span>Tecnologias</span>
        <span>Projetos</span>
        <span>Contato</span>
      </div>
    </Container>
  );
};

export default Header;
