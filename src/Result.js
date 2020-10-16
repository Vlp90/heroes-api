import React, { Component } from "react";
import axios from "axios";
import API_TOKEN from "./keys";
import Card from "./Card";
import "./Result.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import useSearch from "../useSearch";



 function Result()  {

  const [{ term }, dispatch] = useStateValue();

  const { data } = useSearch(term);

  console.log(data);


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     result: [],
  //   };
  // }

  // componentDidMount() {
  //   axios
  //     .get(
  //       `https://www.superheroapi.com/api.php/10157575892622108/search/ind`
  //     )
  //     .then((dbRes) => {
  //       this.setState({ result: dbRes.data.results });
  //       console.log(dbRes.data.results);
  //     })
  //     .catch((dbErr) => {
  //       console.log(dbErr);
  //     });
  // }


    return (
      <>
        <Header />

        <div className="result">

        <h1>Result(s)</h1>
          <div className="result__card">
            {/* {this.state.result.map((element, index) => (
              <Link to='/:id'>
              <Card image={element.image.url} name={element.name} />
              </Link>
            ))} */}
          </div>
          {/* {this.state.result.map((element, index) => (
          <div className="result__info" key={index}>
            <h1>{element.name}</h1>
            <img src={element.image.url} alt="" />
          </div>
        ))} */}
        </div>
      </>
    );
  
}

export default Result
