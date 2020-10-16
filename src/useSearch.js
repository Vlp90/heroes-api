import React from "react";
import { useState, useEffect } from "react";
import API_TOKEN from "./keys";

function useSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.superheroapi.com/api.php/0157575892622108/search/${term}`
        )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result)
        });
    };

    fetchData();
  }, [term]);

  return { data };
}

export default useSearch;
