import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  z-index: 3;
  background: var(--primary-color);
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 60px;
  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: bold;
  
  li {
    list-style-type: none;
    color: white;
    cursor: pointer;
    transition: 200ms;

    &:hover {
      color: var(--secondary-color);
      text-decoration: underline;
    }
  }
`;