import React from "react";
import CardList from "./components/BookList/CardList";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Searchbar from "./components/Searchbar/Searchbar";
import Main from "./components/LandingPage/Main";
function App() {
  return (
    <Router>
      <Navbar />
      <Searchbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/booklist" component={CardList} />
      </Switch>
    </Router>
  );
}

export default App;
