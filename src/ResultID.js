import React from "react";
import "./ResultID.css";
import { useStateValue } from "./StateProvider";
import useSearch from "./useSearch";
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";
import useID from './useID'
import {data} from './Result.js'

function ResultID() {

  const [{ id }, dispatch] = useStateValue();

  const { data } = useID(id);
  console.log("hello", data)

  // https://www.superheroapi.com/api.php/10157575892622108/63


  // useEffect(() => {
  //     const fetchData = async () => {
  //       fetch(
  //         `https://www.superheroapi.com/api.php/${API_TOKEN}/63`
  //         )
  //         .then((response) => response.json())
  //         .then((result) => {
  //           setData(result);
  //           console.log("RESULT ID",result)
            
  //         });
  //     };
  
  //     fetchData();
  //   }, [term]);
  
  //   return { data };
  // }


  return (
    <div>
      <h1>Result ID</h1>
      {data?.id}
      {data?.name}
    </div>
  );
}

export default ResultID;
