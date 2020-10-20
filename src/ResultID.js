import React from "react";
import "./ResultID.css";
import { useStateValue } from "./StateProvider";
import useSearch from "./useSearch";
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";
import id from './useID'
import useID from "./useID"
import { actionTypes } from "./reducer";
// import idCard from './Result'
// import {id} from "./useID"
import { useHistory } from "react-router-dom";
import Result from './Result'

// import {dispatch} from './Result.js'

function ResultID() {

  const [{ term, id }, dispatch] = useStateValue();
  const { data } = useID(id);
  


  return (
    <div>
      <h1>Result ID</h1>
      {data?.id}
      {data?.name}
      <img src={data?.image.url} alt="" />
    </div>
  );
}

export default ResultID;
