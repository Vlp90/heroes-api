import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import API_TOKEN from "./keys";
import Card from "./Card";
import "./Result.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import useSearch from "./useSearch";
import useID from "./useSearch";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "./reducer";
import reducer from "./reducer";

function Result() {
  const [{ term, id }, dispatch] = useStateValue();
  const [idCard, setIdCard] = useState("");
  const history = useHistory();

  console.log('ID KEVIN', id)

  // DISPLAY RESULTS FROM TERM
  const { data } = useSearch(term);

  // console.log('BEFORE', idCard)

  const cardID = (e) => {
    e.preventDefault();
    const idCardValue = e.currentTarget.id;

    // console.log("VALUUUUUE", idCardValue)
    history.push("/result-id");
    console.log("INPUT EQUIV", idCard);

    dispatch({
      type: actionTypes.SET_FIND_ID,
      id: idCardValue,
      // id: idCard,
    });

    // console.log("CURRENT TARGET", idCard);
  };

  const handleChange = (e) => {
    setIdCard(e.currentTarget.id);
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
                <div
                  key={item.id}
                  id={item.id}
                  onClick={cardID}
                  onChange={handleChange}
                  value={idCard}
                >
                  <Card
                    value={idCard}
                    name={item.name}
                    image={item.image.url}
                  />
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
