import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 1.2vh;
  margin-bottom: 2vh;
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3% 2%;
  border-radius: 0.45vh;
  background: #f1f1f1;
  width: 4.5vh;
  height: 4.5vh;
`;
