import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApresentationSection = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .section-name{
    display: flex;
    flex-direction: column;

    .first-name{
      margin: 0;
      padding: 0;
      margin-bottom: -20px;

      color: #FF7A00;
      font-family: "Jost", sans-serif;
      font-weight: 600;
      font-size: 100px;
    }

    .last-name{
      margin: 0;
      padding: 0;

      color: white;
      font-family: "Jost", sans-serif;
      font-weight: 600;
      font-size: 80px;
    }

    .line{
      background: #FF7A00;
      height: 5px;
      width: 100px;
      border-radius: 100px;
    }
  }

  .section-description{
    display: flex;
    flex-direction: column;
    color: white;

    p{
      padding: 0;
      margin: 0;
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 17px;
    }

    h1{
      padding: 0;
      margin: 0;
      font-family: "Jost", sans-serif;
      font-weight: bold;
      font-size: 40px;
      
      margin-block: 15px;

      span{
        color: #FF7A00;
      }
    }
  }
`;