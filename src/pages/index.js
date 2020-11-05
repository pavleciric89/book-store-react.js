import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/booklist" component={CardList} />
      </Switch>
    </Router>
  );
}

export default Routes;
