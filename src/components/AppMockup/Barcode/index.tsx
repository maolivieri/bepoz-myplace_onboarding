import styled from "styled-components";
import BarcodeImage from "../../../assets/mockup/barcode.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Barcode = () => {
  return (
    <Container>
      <img style={{ width: "70%" }} src={BarcodeImage} alt="barcode" />
    </Container>
  );
};

export { Barcode };
