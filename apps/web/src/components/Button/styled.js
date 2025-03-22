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

export const Container = styled.div`
  display: flex;
  margin-block: 15px;
  padding-block: 10px;
  padding-inline: 30px;
  border-radius: 8px;
  font-family: var(--font-family);
  font-weight: bold;
  cursor: pointer;
  transition: 200ms;

  ${({ variant }) => buttonVariants[variant] || buttonVariants.default}
`;