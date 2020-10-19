import React from 'react'
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";

function useID(term) {
    const [data, setData] = useState(null);

    // https://www.superheroapi.com/api.php/10157575892622108/63


    useEffect(() => {
        const fetchData = async () => {
          fetch(
            `https://www.superheroapi.com/api.php/${API_TOKEN}/${term}`
            )
            .then((response) => response.json())
            .then((result) => {
              setData(result);
              console.log("RESULT ID",result)
              
            });
        };
    
        fetchData();
      }, [term]);
    
      return { data };
    }
}

export default useID
