import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Searchbar from "./components/Searchbar/Searchbar";
import Main from "./components/LandingPage/Main";
import About from "./components/About/About";
import { divide } from "lodash";
import "./App.css";


function App() {
  console.log('App render')
  return (
    <Router>
        <Route exact path="/" component={Main} />
        <Route path="/booklist" component={BookList} />
        <Route path="/about" component={About} />        
    </Router>
  );
}

export default App;
