import React from "react";
import "./ResultID.css";
import { useStateValue } from "./StateProvider";
import useSearch from "./useSearch";
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";
import id from "./useID";
import useID from "./useID";
// import idCard from './Result'
// import {id} from "./useID"
import { useHistory } from "react-router-dom";
import Result from "./Result";

import reducer from './reducer'

// import {dispatch} from './Result.js'

function ResultID() {

  // console.log('REDUCER', reducer.action.id)
  const [{ term, id }, dispatch] = useStateValue();
  console.log('TERM', term)
  console.log('ID FINAL PLZZZZZZZZZ', id)

  // console.log("DISPATCH", actionTypes.id)
  // const [idCard, setIdCard] = useState();

  // const [{ id, term }, dispatch] = useStateValue();
  
  // console.log("AFTER", term);
  // console.log("AFTER", id);
  
// let id = 78

  // const { dataID } = useID(id);


  return (
    <div>
      <h1>Result ID</h1>
      {/* {dataID.id}
      {dataID.name}
      <img src="https://www.superherodb.com/pictures2/portraits/10/100/10546.jpg" alt="" /> */}
    </div>
  );
}

export default ResultID;
