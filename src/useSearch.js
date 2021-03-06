import React from "react";
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";

function useSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.superheroapi.com/api.php/${API_TOKEN}/search/${term}`
        )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log("RESULT useSearch",result)

        });
    };

    fetchData();
  }, [term]);
    // console.log("VLAD DATA",{data})
  return { data };
}

export default useSearch;
