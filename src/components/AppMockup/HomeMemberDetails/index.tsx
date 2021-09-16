import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2vh;
`;

interface IProps {
  points?: boolean;
  tier?: boolean;
}

const HomeMemberDetails = ({ points = false, tier = false }: IProps) => {
  return (
    <Container>
      <Typography style={{ color: "#ffffff" }}>
        Member's Name <FontAwesomeIcon style={{ marginLeft: "1vh" }} icon="edit" size="sm" />
      </Typography>
      {points && <Typography style={{ color: "#ffffff", fontSize: "0.9rem" }}>Points Balance: 281 points</Typography>}
      {tier && <Typography style={{ color: "#ffffff", fontSize: "0.9rem" }}>Tier Name</Typography>}
    </Container>
  );
};

export { HomeMemberDetails };
