import React from "react";
import "./App.css";
import Home from "./Home";
import Header from './Header'
import Result from "./Result";
import ResultID from './ResultID'
import Random from './Random'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/result">
          <Header />
            <Result />
          </Route>

          <Route path="/result-id">
          <Header />
            <ResultID />
          </Route>

          <Route path="/random-id">
          <Header />
            <Random />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
