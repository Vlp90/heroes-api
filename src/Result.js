import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import API_TOKEN from "./keys";
import Card from "./Card";
import "./Result.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import useSearch from "./useSearch";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "./reducer";


function Result() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useSearch(term);
  const history = useHistory();
  const [CardId, setCardId] = useState("");


  // if (term != null) {
  //   console.log("DATA", data);
  //   console.log("DATA", data.results);
  //   console.log("TERM", term);
  // }

  const cardID = (e) => {
    e.preventDefault();
    // console.log("EVENT TARGET", e.target.id);
    console.log("CURRENT TARGET", e.currentTarget.id);

    // const id = e.currentTarget.id

    // const all = e.target;
    // const name = all.name
    // console.log('DATA VALUE', name)
    // const idCard = data.results

    // const result = idCard.map((el) => {
    //   console.log(el.id)
    // })
    // console.log("DATA FOR ID",result)
    // console.log(data.results);
    // console.log("hitten");
    // history.push("/result-id");

    const fetchData = async () => {
      const id = e.currentTarget.id
      // const dataID = data.id
      fetch(`https://www.superheroapi.com/api.php/${API_TOKEN}/${id}`)
        .then((response) => response.json())
        .then((result) => {
          history.push("/result-id");
          // setData(result);
          console.log("RESULT", result);
        });
      };
      fetchData();
      // console.log(data)
      return { data };




    // dispatch({
    //   type: actionTypes.SET_FIND_ID,
    //   id: CardId,
    // });

    
    // setCardId(data.response)
  };

  return (
    <>
      {/* <Header /> */}

      <div className="result">
        <h1>Result(s)</h1>
        <div className="result__card">
          {data?.response === "success" && (
            <div className="result__info">
              {data.results.map((item) => (
                <div onClick={cardID} id={item.id} >
                  <Card name={item.name} id={item.id} image={item.image.url}  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Result;
