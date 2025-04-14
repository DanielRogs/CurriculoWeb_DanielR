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
      z-index: 1001;
    }
  }

  @media (max-width: 785px) {
    width: 100%;
    justify-content: space-between;

    .mobile-menu {
      display: flex;
    }

    .language-selection {
      margin-right: 0px;
      margin-left: 20px;
      z-index: 1001;
    }
  }

  .menu-overlay {
    position: absolute;
    top: 13px;
    right: 5px; 
    width: 50px;
    height: 50px;
    background-color: var(--primaryDark-color);
    border-radius: 50%;
    z-index: 999;
    transform: scale(0);
    transition: transform 0.6s ease-in-out;
    pointer-events: none;
  }

  .menu-overlay.show {
    transform: scale(50);
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    padding: 20px;
    border-radius: 10px;
    z-index: 1000;
    font-family: var(--font-family);
    font-weight: bold;
    font-size: 30px;

    span {
      color: white;
      cursor: pointer;
      transition: 200ms;

      &:hover {
        color: var(--secondary-color);
        text-decoration: underline;
      }
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