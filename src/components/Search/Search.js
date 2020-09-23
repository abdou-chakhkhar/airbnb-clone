import React from "react";
import "./Search.css";
import PeopleIcon from "@material-ui/icons/People";

function Search() {
  return (
    <div className="search">
      <h2>
        Number of guests <PeopleIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
    </div>
  );
}

export default Search;
