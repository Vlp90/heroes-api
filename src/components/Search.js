import React from "react";
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  return (
    <div className='search__container'>
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
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            name=""
            id=""
            placeholder="Who are you looking for ?"
          />

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
