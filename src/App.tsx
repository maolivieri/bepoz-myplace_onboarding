import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./utils/fontAwesome";

import { ProjectRequirements } from "./pages/ProjectRequirements";

export function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" children={<h1>HOME</h1>} />
        <Route path="/project/:id" component={ProjectRequirements} />
      </Switch>
    </Router>
  );
}
