import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./SearchHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function SearchHeader() {
  const [{ term, id }, dispatch] = useStateValue("");
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    // console.log(e);

    // TO make the button enter working we change the tagg of the div by form
    e.preventDefault();

    history.push("/result");
    console.log(input);

    // put the search term input in the data layer
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  const searchRandom = (e) => {

    e.preventDefault();

    const randomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    console.log(randomInteger(1, 700))
    history.push("/random-id");

    dispatch({
      type: actionTypes.SET_FIND_RANDOM_ID,
      id: randomInteger(1, 700) ,
    });
  };

  return (
    <div className="searchHeader">
      <form className="searchHeader__form" action="">
        <Link to="/">
          <HomeIcon className="searchHeader__home" />
        </Link>

        <div className="searchHeader__input">
          <SearchIcon
            // onClick={search}
            // onSubmit={search}
            className="search__inputIcon"
          />

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name=""
            id=""
            placeholder="Who are you looking for ?"
          />
          <Button
            type="submit"
            onSubmit={search}
            onClick={search}
            // variant="outlined"
          >
            Find
          </Button>
        </div>
        <div className="searchHeader__random">
          {/* <h1>or</h1> */}

          <Button type="submit" onSubmit={searchRandom} onClick={searchRandom}>
            Get Random
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchHeader;
