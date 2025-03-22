import styled from "styled-components";

export const Container = styled.div`
  background: var(--secondary-color);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: -150px;
  height: 250px;
  width: 250px;
  gap: 20px;
  
  span {
    font-family: var(--font-family);
    font-weight: bold;
    text-align: center;
    font-size: 30px;
    color: var(--tertiary-color);
    margin-top: 10px;
  }

  .icon{
    font-size: 50px;
    color: var(--tertiary-color);
  }
`;