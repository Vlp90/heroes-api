import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { Button } from "@material-ui/core";

function Search() {
  const [{ term }, dispatch] = useStateValue("");
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    console.log(e);

    // TO make the button enter working we change the tagg of the div by form
    e.preventDefault();

    history.push("/result");
    console.log(input);

    // put the search termn input in the data layer
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };

  return (
    <div className="search__container">
      {/* <h1>Find you heroe / Villain</h1> */}
      <form className="search">
        <div className="search__input">
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

          {/* <MicIcon className="search__inputIcon" /> */}
        </div>

        {/* {!hideButtons ? ( */}
        <div className="search__buttons">
          {/* <Button
              type="submit"
              onSubmit={search}
              onClick={search}
              variant="outlined"
            >
       
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button> */}
        </div>
        {/* ) : ( */}
        <div className="search__buttonsHidden">
          {/* <Button
              type="submit"
              onSubmit={search}
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button> */}
        </div>
        {/* )} */}
      </form>
    </div>
  );
}

export default Search;
