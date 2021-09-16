import { Tile } from "./styles";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeTile = () => {
  return (
    <Tile>
      <FontAwesomeIcon style={{ fontSize: "0.9vh" }} icon="coffee" />
      <Typography style={{ fontSize: "0.9vh" }}>title title</Typography>
      <Typography style={{ fontSize: "0.9vh" }}>1</Typography>
    </Tile>
  );
};

export { HomeTile };
