import React from "react";
import { Container } from "./styled";
import ButtonIcon from "../ButtonIcon";

import { FaArrowRight } from "react-icons/fa";

const CardProject = ({ title, description, image }) => {
  return (
    <Container>
      <div className="content">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="div-button">
        <ButtonIcon icon={<FaArrowRight className="icon" />}>
          Ver Mais
        </ButtonIcon>
      </div>
    </Container>
  );
};

export default CardProject;
