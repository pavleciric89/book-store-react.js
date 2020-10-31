import React from "react";
import CardList from "./components/BookList/CardList";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom"
import Searchbar from "./components/Searchbar/Searchbar";
import Main from "./components/LandingPage/Main";
function App() {
  return (
    <Router>
      <Navbar />
      <Searchbar />
      <Main />
      {/* <CardList /> */}
    </Router>
  );
}

export default App;
