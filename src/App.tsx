import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import "./utils/fontAwesome";

import { theme } from "./styles/theme";

import { ProjectRequirements } from "./pages/ProjectRequirements";
import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" children={<h1>HOME</h1>} />
          <Route path="/project/:id" component={ProjectRequirements} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
