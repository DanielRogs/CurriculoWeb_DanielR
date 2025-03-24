import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-block: 20px;

  &:hover {
    button {
      color: var(--secondaryDark-color);
    }
    .icon {
      color: var(--secondaryDark-color);
    }
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: underline;
    color: var(--secondary-color);
    font-size: 16px;
    font-weight: bold;
    font-family: var(--font-family);
    transition: 200ms;
  }

  .icon {
    font-size: 15px;
    color: var(--secondary-color);
    transition: 200ms;
  }
`;

