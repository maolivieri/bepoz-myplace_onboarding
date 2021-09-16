import { Tile } from "./styles";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomTile = () => {
  return (
    <Tile>
      <FontAwesomeIcon style={{ fontSize: "1vh" }} icon="coffee" />
      <Typography style={{ fontSize: "0.9vh" }}>title title</Typography>
    </Tile>
  );
};

export { BottomTile };
