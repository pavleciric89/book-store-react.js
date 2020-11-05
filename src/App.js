import React from "react";
import CardList from "./components/BookList/CardList";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Searchbar from "./components/Searchbar/Searchbar";
import Main from "./components/LandingPage/Main";
import About from "./components/About/About";
import { divide } from "lodash";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}>
          <Navbar />
          <Searchbar />
          <Main />
        </Route>
        <Route path="/booklist" component={CardList}>
          <Navbar />
          <Searchbar />
          <CardList />
        </Route>
        <Route path="/about" component={About}>
          <Navbar />
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
