import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-bottom: solid 2px var(--tertiary-color);

  input{
    width: 100%;
    background: none;
    border: none;
    font-size: 16px;
    color: var(--tertiary-color);
    padding: 10px 0;
    font-family: var(--font-family);
    font-weight: 400;
    outline: none;

    &::placeholder{
      color: var(--tertiary-color);
    }
  }
`;