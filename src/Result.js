import React, { Component } from "react";
import axios from "axios";
import API_TOKEN from "./keys";
import Card from "./Card";
import "./Result.css"

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://www.superheroapi.com/api.php/10157575892622108/search/batman`
      )
      .then((dbRes) => {
        this.setState({ result: dbRes.data.results });
        console.log(dbRes.data.results);
      })
      .catch((dbErr) => {
        console.log(dbErr);
      });
  }

  render() {
    return (
      <div className="result">
        <div className="result__card">
          {this.state.result.map((element, index) => (
            <Card image={element.image.url} name={element.name} />
          ))}
        </div>
        {/* {this.state.result.map((element, index) => (
          <div className="result__info" key={index}>
            <h1>{element.name}</h1>
            <img src={element.image.url} alt="" />
          </div>
        ))} */}
      </div>
    );
  }
}
