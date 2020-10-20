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
  // console.log("RESULT ID PAGE", idCard)
  
  const { data } = useID(id);
  // console.log("RESULT ID PAGE FUCKER", data)
  // const history = useHistory();
  // const [{ idCard }, dispatch] = useStateValue();
  // dispatch({
  //   type: actionTypes.SET_FIND_ID,
  //   id: idCard,
  // });
  // console.log('DISPATCH', idCard)
  // // console.log('YOUPIII',{dispatch})
  

  // // const [{ id }, dispatch] = useStateValue();
  // const { dataID } = useID(id);
  // console.log("hello DATA ID", dataID)
  // console.log("hello DATA ID", id)


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
      <img src={data?.image.url} alt="" />
    </div>
  );
}

export default ResultID;
