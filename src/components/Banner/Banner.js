import { Button } from "@material-ui/core";
import React from "react";
import Search from "../Search/Search";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__search">
        <Search />
        <Button className="banner__searchButton">Search Dates</Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gataway to uncover the hidden gems near you.
        </h5>
        <Button>Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
