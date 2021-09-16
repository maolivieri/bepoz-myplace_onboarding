import { Container, BackgroundWrapper, SubContainer } from "./styles";
import mockup from "../../../assets/mockup/mockup.png";
import { HomeHeader } from "../HomeHeader";
import { Barcode } from "../Barcode";
import { HomeMainNav } from "../HomeMainNav";
import { HomeMemberDetails } from "../HomeMemberDetails";
import { HomeBanner } from "../HomeBanner";
import { BottomNav } from "../BottomNav";

const AppMockupHomepage = () => {
  return (
    <Container>
      <SubContainer>
        <BackgroundWrapper>
          <img style={{ width: "100%" }} src={mockup} alt="phone mockup" />
        </BackgroundWrapper>
        <HomeHeader />
        <HomeMemberDetails />
        <HomeMainNav />
        <HomeBanner />
        <Barcode />
      </SubContainer>
      <BottomNav />
    </Container>
  );
};

export { AppMockupHomepage };
