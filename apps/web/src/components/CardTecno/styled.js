import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  gap: 20px;
  color: var(--tertiary-color);
  font-family: var(--font-family);
  font-weight: 700;

  .title{
    font-size: 30px;
  }

  .description{
    font-size: 18px;
    text-align: center;
    font-weight: 400;
    margin-top: -10px;
  }

  .icon{
    font-size: 90px;
  }
`;