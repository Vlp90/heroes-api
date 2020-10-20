import React from 'react'
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";


function useID (id) {

  const [dataID, setdataID] = useState(null);
    console.log("ID USEID", id)
    



    useEffect(() => {
        const fetchData = async () => {
          fetch(
            `https://www.superheroapi.com/api.php/${API_TOKEN}/${id}`
            )
            .then((response) => response.json())
            .then((result) => {
              setdataID(result);
              console.log("RESULT useID",result)
              
            });
        };
    
        fetchData();
      }, [id]);
    
      console.log('USE ID VLAD', {dataID})
      return { dataID };
    }


export default useID
