import React from "react";
import BookList from "./components/BookList";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/LandingPage/Main";
import About from "./components/About/About";
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
