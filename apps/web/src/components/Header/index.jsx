import React, { useState } from "react";
import { Container, Lista } from "./styled";
import { IoMenu } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Header = ({ language = "ptbr" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleMobileMenuToggle = () => {
    if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
      setTimeout(() => {
        setIsMenuVisible(true);
      }, 300);
    } else {
      setIsMenuVisible(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <Container>
      <Lista>
        <li>{t("navBar.home")}</li>
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

      <div className={`menu-overlay ${isMobileMenuOpen ? "show" : ""}`} />

      <div
        className="menu"
        style={{ display: isMenuVisible ? "flex" : "none" }}
      >
        <span>{t("navBar.home")}</span>
        <span>{t("navBar.about")}</span>
        <span>{t("navBar.tecnology")}</span>
        <span>{t("navBar.projects")}</span>
        <span>{t("navBar.contact")}</span>
      </div>
    </Container>
  );
};

export default Header;
