import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  background: var(--primaryDark-color);

  .Centralização {
    display: flex;
    width: 100%;
    justify-content: center;

    @media (max-width: 800px) {
      justify-content: left;
      padding-inline: 20px;
    }
  }

  .Layout {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    width: 1900px;

    @media (max-width: 2000px) {
      width: 90%;
    }

    @media (max-width: 800px) {
      width: 100%;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .section-nav {
    display: flex;
    flex-direction: column;

    h1 {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 30px;
      color: var(--tertiary-color);
      margin: 0;
      padding: 0;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  .section-forms {
    display: flex;
    flex-direction: column;
    align-items: end;

    h1 {
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 35px;
      color: var(--secondary-color);
      margin: 0;
      padding: 0;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    @media (max-width: 700px) {
      align-items: start;
      width: 100%;
    }
  }

  .section-social {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 30px;

    .icon {
      color: var(--secondary-color);
      font-size: 20px;
      cursor: pointer;
      transition: 200ms;

      &:hover {
        color: var(--tertiary-color);
      }
    }
  }

  .rights {
    color: var(--tertiary-color);
    font-family: var(--font-family);
    font-weight: bold;
    font-size: 16px;
    margin-top: 30px;
    width: 100%;
    text-align: center;

    @media (max-width: 800px) {
      text-align: center;
    }

    @media (max-width: 560px) {
      font-size: 14px;
    }

    span {
      color: var(--secondary-color);
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 8px;

  li {
    color: white;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    transition: 200ms;

    &:hover {
      color: var(--secondary-color);
      text-decoration: underline;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: end;
  flex-direction: column;
  gap: 10px;
`;
