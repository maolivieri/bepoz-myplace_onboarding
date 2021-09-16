import styled from "styled-components";

import DefaultBannerImage from "../../../assets/mockup/banner.png";
import DefaultInAppLogo from "../../../assets/mockup/inapplogo.png";

import MenuIcon from "@material-ui/icons/Menu";

const Container = styled.div`
  width: 100%;
  margin-bottom: -1rem;
`;

const Head = styled.div`
  width: 100%;
  position: relative;
  top: -12vh;
  padding: 0 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeHeader = () => {
  return (
    <Container>
      <img style={{ width: "100%" }} src={DefaultBannerImage} alt="Carrousel" />
      <Head>
        <MenuIcon style={{ color: "#ffffff" }} fontSize="medium" />
        <img style={{ width: "35%" }} src={DefaultInAppLogo} alt="Carrousel" />
      </Head>
    </Container>
  );
};

export { HomeHeader };
