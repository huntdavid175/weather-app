import React, { Component } from "react";
import classes from "./Hud.module.css";

class Hud extends Component {
  getDate(dt) {
    const parsedDate = new Date(dt * 1000);
    const dateArray = parsedDate.toDateString().split(" ");
    dateArray[0] += ",";
    dateArray[2] += ",";
    return dateArray.join(" ");
  }

  render() {
    const { main, dt, id, name, weather, sys } = this.props.data;
    const date = new Date("2021-01-19");
    return (
      <div className={classes.Hud}>
        <div className={classes.ImageContainer}>
          <img
            src={`./img/icons/${weather[0].icon}.png`}
            alt="weather-icon"
            height="180px"
            width="180px"
          ></img>
          <p>{weather[0].description.toUpperCase()}</p>
        </div>
        <div>
          <h1 className={classes.Temp}>{Math.round(main.temp)} &#176;</h1>
          <p className={classes.City}>
            {name},{sys.country}
          </p>
          <p className={classes.Date}>{this.getDate(dt)}</p>
        </div>
      </div>
    );
  }
}

export default Hud;
