import React, { Component } from "react";
import classes from "./Hud.module.css";

class Hud extends Component {
  render() {
    return (
      <div className={classes.Hud}>
        <div className={classes.ImageContainer}>
          <img
            src="https://img.icons8.com/ios/452/cloud.png"
            alt="weather-icon"
            height="150px"
            width="150px"
          ></img>
        </div>
        <div>
          <h1 className={classes.Temp}>21</h1>
          <p className={classes.City}>Dusseldorf</p>
          <p className={classes.Date}>Tuesday 01, Dec, 2015</p>
        </div>
      </div>
    );
  }
}

export default Hud;
