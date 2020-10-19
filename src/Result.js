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
          {/* {term && ( */}
              {data?.response === "success" && (
            <div>
              <h1>{data?.response}</h1>

              {data.results.map((item) => (
                <h1>{item.name}</h1>
              ))}
            </div>
              )}
          {/* )} */}

          {/* {data?.results.map((item) => ( 
   <h1>{item.name}</h1>
   } */}
          {/* <h1>{data}</h1> */}

          {/* {data?.results.map((item) => ( 
   <h1>{item.name}</h1>
   ))} */}
          {/* 
 {data.results.map((item) => ( 
   <h1>{item.name}</h1>
   )}; */}

          {/* {term && (
   {data.response}
   )} */}
          {/* {term && (
   <h1>{data?.response}</h1>
   {data.results.map((el) => (
     <h1>{el.name}</h1>
   ))} */}

          {/* )} */}
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
