import React from "react";
import { Container } from "./styled";

const Button = ({
  children,
  variant = "default",
  type,
  onClick,
  as,
  href,
  download,
}) => {
  return (
    <Container
      variant={variant}
      type={type}
      onClick={onClick}
      as={as}
      href={href}
      download={download}
    >
      {children}
    </Container>
  );
};

export default Button;
