import React, { Component } from "react";
import Cards from "../components/Cards/Cards";
import Hud from "../components/Hud/Hud";

import classes from "./Weather.module.css";

class Weather extends Component {
  render() {
    return (
      <div className={classes.Weather}>
        <input type="text" placeholder="Enter City" />
        <button>Search</button>
        <Hud />
        <Cards />
      </div>
    );
  }
}

export default Weather;
