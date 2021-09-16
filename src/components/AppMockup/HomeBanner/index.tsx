import { Container, VenuesSelectionContainer, TierBannerContainer, VenuesLabel, VenuesIcon } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Typography from "@material-ui/core/Typography";

interface IProps {
  venuesSelection?: boolean;
  tierBanner?: boolean;
}

const HomeBanner = ({ venuesSelection = true, tierBanner = false }: IProps) => {
  return (
    <Container>
      {venuesSelection && (
        <VenuesSelectionContainer style={{ background: "green" }}>
          <VenuesLabel>
            <Typography style={{ color: "#ffffff", fontSize: "1.1vh" }}>Venue Name</Typography>
            <Typography style={{ color: "#ffffff", fontSize: "0.8vh" }}>
              Online ordering is available at this location
            </Typography>
          </VenuesLabel>
          <VenuesIcon>
            <FontAwesomeIcon style={{ color: "#ffffff" }} icon="chevron-circle-down" size="1x" />
          </VenuesIcon>
        </VenuesSelectionContainer>
      )}
      {tierBanner && (
        <TierBannerContainer style={{ background: "blue" }}>
          <Typography style={{ color: "#ffffff", fontSize: "1.1vh" }}>Tier Name</Typography>
        </TierBannerContainer>
      )}
    </Container>
  );
};

export { HomeBanner };
