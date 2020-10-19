import React from 'react'
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";

function useID(id) {
    const [data, setData] = useState(null);

    // https://www.superheroapi.com/api.php/10157575892622108/63


    useEffect(() => {
        const fetchData = async () => {
          fetch(
            `https://www.superheroapi.com/api.php/${API_TOKEN}/${id}`
            )
            .then((response) => response.json())
            .then((result) => {
              setData(result);
              console.log("RESULT ID",result)
              
            });
        };
    
        fetchData();
      }, [id]);
    
      return { data };
    }


export default useID
