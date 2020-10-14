import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Result from "./Result.js";
import { render } from "@testing-library/react";
import Home from "./Home";
import Header from "./Header.js";
import ResultID from './ResultID'
// https://superheroapi.com/api/access-token/character-id/powerstats

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__routes">
          <Switch>
            <Route exact path="/result" component={Result} />
            <Route exact path="/:id" component={ResultID}/>
            <Route exact path="/" component={Home}/>

           

            {/* <Route path="/random" component={RandomBeer} />
        <Route path="/new" component={AddNewBeer} /> 
        <Route path="/:id" component={OneBeerID} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
