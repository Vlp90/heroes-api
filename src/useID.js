import React from 'react'
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
import {actionTypes} from './reducer'
import cardID from "./Result"


const useID = (id) => {
    // const [{ id }, dispatch] = useStateValue();
    const [data, setData] = useState(null);
    // const history = useHistory();

// console.log("RESULT USEID", cardID.dispatch)
    // https://www.superheroapi.com/api.php/10157575892622108/63
// console.log("DATA ID HERE", data)

    useEffect(() => {
        const fetchData = async () => {
          fetch(
            `https://www.superheroapi.com/api.php/${API_TOKEN}/73`
            )
            .then((response) => response.json())
            .then((result) => {
                setData(result);
              console.log("RESULT useID",result)
              
            });
        };
    
        fetchData();
      }, [id]);
    
    //   console.log('USE ID', data)
      return { data };
    }


export default useID
