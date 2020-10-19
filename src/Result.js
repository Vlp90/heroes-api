import React, { Component } from "react";
import axios from "axios";
import API_TOKEN from "./keys";
import Card from "./Card";
import "./Result.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import useSearch from "./useSearch";
import { useStateValue } from "./StateProvider";

function Result() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useSearch(term);

  if (term != null) {
    console.log("DATA", data);
    console.log("DATA", data.results);
    console.log("TERM", term);
  }

  return (
    <>
      <Header />

      <div className="result">
        <h1>Result(s)</h1>
        <div className="result__card">
          {data?.response === "success" && (
            <div className="result__info">
              {data.results.map((item) => (
                <>
                  <Card name={item.name} image={item.image.url} />
                </>
              ))}
            </div>
          )}
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

export default Result;
