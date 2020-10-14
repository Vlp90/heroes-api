import React from "react";
import "./Header.css";
import SearchHeader from "../src/components/SearchHeader.js";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <SearchHeader />
      </div>
    </div>
  );
}

export default Header;
