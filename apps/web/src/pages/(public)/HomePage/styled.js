import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApresentationSection = styled.section`
  width: 100%;
  height: 530px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .section-name {
    display: flex;
    flex-direction: column;

    .first-name {
      margin: 0;
      padding: 0;
      margin-bottom: -20px;

      color: var(--secondary-color);
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 100px;
    }

    .last-name {
      margin: 0;
      padding: 0;

      color: var(--tertiary-color);
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 80px;
    }

    .line {
      background: var(--secondary-color);
      height: 5px;
      width: 100px;
      border-radius: 100px;
    }
  }

  .section-description {
    display: flex;
    flex-direction: column;
    color: white;

    p {
      padding: 0;
      margin: 0;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 17px;
    }

    h1 {
      padding: 0;
      margin: 0;
      font-family: var(--font-family);
      font-weight: bold;
      font-size: 40px;

      margin-block: 15px;

      span {
        color: var(--secondary-color);
      }
    }
  }

  .section-social {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 30px;

    .icon {
      color: var(--secondary-color);
      font-size: 25px;
      cursor: pointer;
      transition: 200ms;

      &:hover {
        color: var(--tertiary-color);
      }
    }
  }

  .section-buttons {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const AboutMeSection = styled.section`
  position: absolute;
  z-index: 1;
  width: 100%;
  margin-top: 550px;
  display: flex;
  background: var(--primaryDark-color);
  padding-bottom: 120px;

  h1 {
    color: white;
    font-family: var(--font-family);
    font-weight: 600;
    color: var(--secondary-color);
    margin: 0;
    padding: 0;
    font-size: 30px;

    margin-top: 30px;
  }

  p {
    color: var(--tertiary-color);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 17px;
    margin-block: 20px;
  }

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
    flex-direction: column;
    justify-content: center;
    width: 1900px;

    @media (max-width: 2000px) {
      width: 90%;
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }
`;

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
  width: 100%;
`;

export const TecnoSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap;
  margin-block: 50px;

  .section-description {
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
      color: var(--secondary-color);
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 30px;
      padding: 0;
      margin: 0;
    }

    h1 {
      color: var(--tertiary-color);
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 50px;
      padding: 0;
      margin: 0;
    }

    p {
      color: var(--tertiary-color);
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 17px;
      padding: 0;
      margin: 0;
    }
  }

  .section-tecnos {
    display: flex;
    flex-direction: row;
    gap: 100px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

`;

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-block: 50px;

  .section-description{
    display: flex;
    flex-direction: column;
    width: 100%;

    span{
      color: var(--secondary-color);
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 30px;
      padding: 0;
      margin: 0;
    }

    h1{
      color: var(--tertiary-color);
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 50px;
      padding: 0;
      margin: 0;
    }

    p{
      color: var(--tertiary-color);
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 17px;
      padding: 0;
      margin: 0;
    }
  }
`;

export const Space = styled.div`
  height: 550px;
`;

export const Space2 = styled.div`
  height: 550px;
`;
