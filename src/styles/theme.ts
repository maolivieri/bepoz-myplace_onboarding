import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#887BB0",
    },
    secondary: {
      main: "#85D2D0",
    },
    success: {
      main: "#94C973",
    },
    text: {
      primary: "#22222",
      secondary: "#252525",
      disabled: "#2020",
      hint: "#2258",
    },
  },
});

export { theme };
