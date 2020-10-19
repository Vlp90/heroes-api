import React from 'react'
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";
import { useStateValue } from "./StateProvider";


const useID = () => {
    const [{ id }, dispatch] = useStateValue();
    const [data, setData] = useState(null);

    // https://www.superheroapi.com/api.php/10157575892622108/63
console.log("DATA ID", data)

    useEffect(() => {
        const fetchData = async () => {
          fetch(
            `https://www.superheroapi.com/api.php/${API_TOKEN}/63`
            )
            .then((response) => response.json())
            .then((result) => {
              setData(result);
              console.log("RESULT ID",result)
              
            });
        };
    
        fetchData();
      }, []);
    
      return { data };
    }


export default useID
