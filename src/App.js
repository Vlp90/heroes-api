import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Result from "./Result.js";
import { render } from "@testing-library/react";
import Home from './Home'

// https://superheroapi.com/api/access-token/character-id/powerstats

// class App extends Component {
  

  

//   render() {
//     return (
//       <div className="app">
//         <div className="app__search">
//           <Search />
//         </div>

//         <Link to="/result">See All Beers</Link>




//         <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/result" component={Result} />

//         </Switch>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <NavBar /> */}
       <Switch>
       <Route exact path="/" component={Home} />
        <Route exact path="/result" component={Result} />
        {/* <Route path="/random" component={RandomBeer} />
        <Route path="/new" component={AddNewBeer} /> 
        <Route path="/:id" component={OneBeerID} /> */}
      </Switch>
      </div>
    );
  }
}
export default App;
