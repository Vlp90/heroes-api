import React, { Component, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "./reducer";
import useSearch from "./useSearch";

function Card({ image, name, idNumber }) {
//   const [{ term }, dispatch] = useStateValue();
//   const { data } = useSearch(term);
//   const history = useHistory();
//   const [CardId, setCardId] = useState("");

//   const cardID = (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log("DATA ID", data);
//     const { idNumber } = data;
//     console.log("ID NUMBER", data);

//     // const idCard = data.results

//     // const result = idCard.map((el) => {
//     //   console.log(el.id)
//     // })
//     // console.log("DATA FOR ID",result)
//     // console.log(data.results);
//     console.log("hitten");
//     // history.push("/result-id");

//     // const fetchData = async () => {
//     //   // const dataID = data.id
//     //   fetch(`https://www.superheroapi.com/api.php/${API_TOKEN}/63`)
//     //     .then((response) => response.json())
//     //     .then((result) => {
//     //       // setData(result);
//     //       console.log("RESULT", result);
//     //     });
//     //   };
//     //   fetchData();
//     //   console.log(data)
//     //   return { data };

//     dispatch({
//       type: actionTypes.SET_FIND_ID,
//       id: CardId,
//     });

//     setCardId(data.response);
//   };

  return (
    // <NavLink exact to="/result-id">
    <div  className="card">
      {/* <img src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg" alt=""/>
            <h1>Name</h1> */}
      <h6>{idNumber}</h6>
      <img src={image} alt="" />
      <h1>{name}</h1>
    </div>
    // </NavLink>
  );
}

export default Card;
