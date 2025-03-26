import styled, { css } from "styled-components";

const buttonVariants = {
  default: css`
    background: var(--tertiary-color);
    color: var(--secondary-color);
    &:hover {
      background: var(--tertiaryDark-color);
      color: var(--secondary-color);
    }
  `,
  orange: css`
    background: var(--secondary-color);
    color: var(--tertiary-color);
    &:hover {
      background: var(--secondaryDark-color);
      color: var(--tertiary-color);
    }
  `,
};

export const Container = styled.button`
  display: flex;
  margin-block: 15px;
  padding-block: 8px;
  padding-inline: 20px;
  border-radius: 8px;
  outline: none;
  border: none;
  font-family: var(--font-family);
  font-weight: bold;
  cursor: pointer;
  transition: 200ms;
  text-decoration: none;
  font-size: 14px;

  ${({ variant }) => buttonVariants[variant] || buttonVariants.default}
`;