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

    img {
      position: absolute;
      width: 900px;
      top: 0;
      margin-top: 50px;
      margin-left: -45px;
      z-index: 2;
    }

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
      z-index: 2;

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

    @media (max-width: 1187px) {
      .first-name {
        font-size: 80px;
      }

      .last-name {
        font-size: 60px;
      }
      img {
        width: 700px;
        margin-left: -20px;
      }
    }

    @media (max-width: 1132px) {
      .first-name {
        font-size: 70px;
      }

      .last-name {
        font-size: 50px;
      }
      img {
        width: 600px;
        margin-left: -20px;
        margin-top: 150px;
      }
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

    @media (max-width: 1132px) {
      h1 {
        font-size: 30px;
      }

      p {
        font-size: 15px;
      }
    }
  }

  .section-social {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 30px;
    z-index: 2;

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
    z-index: 2;
  }

  .section-social-mobile {
    display: none;

    @media (max-width: 987px) {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-top: 30px;
      z-index: 2;

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
  }

  @media (max-width: 987px) {
    height: 600px;
    margin-top: 0px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .section-name {
      display: none;
    }

    .section-description {
      display: flex;
      align-items: center;
      text-align: center;

      h1 {
        font-size: 30px;
        margin-block: 10px;
      }

      p {
        font-size: 15px;
      }
    }

    .section-social {
      margin-top: 20px;
    }
  }
`;

export const AboutMeSection = styled.section`
  position: absolute;
  z-index: 3;
  width: 100%;
  margin-top: 550px;
  display: flex;
  flex-direction: column;
  background: var(--primaryDark-color);
  padding-bottom: 120px;

  @media (max-width: 867px) {
    padding-bottom: 30px;
  }

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
  z-index: 4;
  width: 100%;
  margin-top: -80px;

  @media (max-width: 1647px) {
    margin-top: -50px;
  }

  @media (max-width: 1594px) {
    margin-top: -30px;
  }

  @media (max-width: 1274px) {
    margin-top: 20px;
  }

  @media (max-width: 1052px) {
    margin-top: 60px;
  }

  @media (max-width: 914px) {
    margin-top: 100px;
  }

  @media (max-width: 867px) {
    display: none;
  }
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

    @media (max-width: 441px) {
      h1 {
        font-size: 40px;
      }
    }

    @media (max-width: 325px) {
      h1 {
        font-size: 30px;
      }
    }

    p {
      color: var(--tertiary-color);
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 17px;
      padding: 0;
      margin: 0;
    }

    @media (max-width: 325px) {
      p {
        font-size: 13px;
      }
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

  .section-description {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: start;

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

  .section-projects {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;

    @media (max-width: 889px) {
      justify-content: center;
    }
  }
`;

export const Space = styled.div`
  height: 550px;

  @media (max-width: 711px) {
    height: 600px;
  }

  @media (max-width: 624px) {
    height: 650px;
  }

  @media (max-width: 572px) {
    height: 700px;
  }

  @media (max-width: 505px) {
    height: 800px;
  }

  @media (max-width: 440px) {
    height: 840px;
  }

  @media (max-width: 425px) {
    height: 900px;
  }

  @media (max-width: 396px) {
    height: 980px;
  }

  @media (max-width: 362px) {
    height: 1050px;
  }

  @media (max-width: 340px) {
    height: 1180px;
  }
`;

export const Space2 = styled.div`
  height: 550px;
`;
