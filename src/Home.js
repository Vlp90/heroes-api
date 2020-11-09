import React from "react";
import "./Home.css";
import Search from "./components/Search";
import SearchHeader from "./components/SearchHeader";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { Button } from "@material-ui/core";

function Home() {
  const [{ term, id }, dispatch] = useStateValue("");
  const history = useHistory();

  const searchRandom = (e) => {
    e.preventDefault();

    const randomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    console.log(randomInteger(1, 700));
    history.push("/random-id");

    dispatch({
      type: actionTypes.SET_FIND_RANDOM_ID,
      id: randomInteger(1, 700),
    });
  };

  return (
    <div className="home">
      <div className="home__search">
        <Search />
      </div>
      <div className="home__searchRandom">
        <Button type="submit" onSubmit={searchRandom} onClick={searchRandom}>
          Get random
        </Button>
      </div>
    </div>
  );
}

export default Home;
