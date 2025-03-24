import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--primaryDark-color);
  max-width: 378px;
  border-radius: 8px;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-inline: 30px;
  transition:
    transform 200ms,
    box-shadow 200ms;

  &:hover {
    transform: scale(1.02); /* Aumenta ligeiramente o tamanho */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* Torna a sombra mais intensa */
  }

  img {
    width: 100%;
    height: 233px;
    border-radius: 8px;
    object-fit: cover;
  }

  h2 {
    color: var(--tertiary-color);
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 25px;
    text-align: center;
  }

  p {
    color: var(--tertiary-color);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 17px;
    text-align: start;
  }

  .div-button {
    display: flex;
    justify-content: start;
    width: 100%;
  }
`;