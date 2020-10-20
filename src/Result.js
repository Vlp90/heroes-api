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
  const [{ term, id }, dispatch] = useStateValue();
  // const [valueID, setValueID] = useState("");
  const [idCard, setIdCard] = useState("");
  const history = useHistory();


  const { data } = useSearch(term);

  // console.log("FIND DATA HERE BITCH", data)

  // const [CardId, setCardId] = useState("");

  // if (term != null) {
  //   console.log("DATA", data);
  //   console.log("DATA", data.results);
  //   console.log("TERM", term);
  // }

  const cardID = (e) => {
    e.preventDefault();
    // console.log("EVENT TARGET", e.target.id);
    
    const idCard = e.currentTarget.id;
    console.log("VALUUUUUE", idCard)
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
    history.push("/result-id");
    console.log("CURRENT TARGET", idCard);

    dispatch({
      type: actionTypes.SET_FIND_ID,
      id: idCard,
    });

    // const fetchData = async () => {
    //   const idCard = e.currentTarget.id
    //   // const dataID = data.id
    //   // fetch(`https://www.superheroapi.com/api.php/${API_TOKEN}/${id}`)
    //   //   .then((response) => response.json())
    //   //   .then((result) => {
    //   //     // history.push("/result-id");
    //   //     // setData(result);
    //   //     console.log("RESULT", result);
    //   //   });

    //   };
    // fetchData();
    // // console.log(data)
    // return { data };

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
                <div onClick={cardID} key={item.id} id={item.id} value={idCard}>
                  <Card name={item.name} id={item.id} image={item.image.url} />
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
