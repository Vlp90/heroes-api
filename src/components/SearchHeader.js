import { Button } from "@material-ui/core";
import React from "react";
import "./SearchHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

function SearchHeader() {



  
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
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            name=""
            id=""
            placeholder="Who are you looking for ?"
          />
          <Button>Find</Button>
        </div>
        <div className="searchHeader__random">
          <h1>or</h1>
          <Button>Random</Button>
        </div>
      </form>
    </div>
  );
}

export default SearchHeader;
