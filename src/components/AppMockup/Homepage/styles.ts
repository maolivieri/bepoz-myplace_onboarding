import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 54vh;
  width: 27vh;
  background: #a12;
`;
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #a12;
  flex: 1;
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  height: 54vh;
  width: 27vh;
`;
