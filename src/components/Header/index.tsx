import { Container, Nav } from "./styles";
import Logo from "../../assets/logo.png";
import ListItem from "@material-ui/core/ListItem";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="Bepoz logo" />
      <Nav>
        <ListItem>MY ACCOUNT</ListItem>
        <ListItem>LOGOUT</ListItem>
      </Nav>
    </Container>
  );
};

export { Header };
