import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Search = () => {
  return (
    <div className="search">
      <input type="search" />
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </div>
  );  
};

export default Search;
