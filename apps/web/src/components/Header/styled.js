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
  z-index: 100;
  background: var(--primary-color);

  .language-selection {
    display: flex;
    gap: 10px;
    margin-left: auto;
    margin-right: 50px;
    margin-block: 19px;

    span {
      color: white;
      font-family: var(--font-family);
      font-weight: bold;
      cursor: pointer;
      transition: 200ms;

      &:hover {
        color: var(--secondary-color);
        text-decoration: underline;
      }
    }
  }

  .mobile-menu {
    display: none;

    .icon {
      font-size: 25px;
      margin-right: 20px;
      color: white;
    }
  }

  @media (max-width: 785px) {
    width: 100%;
    justify-content: space-between;

    .mobile-menu {
      display: flex;
    }

    .language-selection{
      margin-right: 0px;
      margin-left: 20px;

    }
  }
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

  @media (max-width: 785px) {
    display: none;
  }
`;