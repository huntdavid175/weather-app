import React, { Component } from "react";
import Cards from "../components/Cards/Cards";
import Hud from "../components/Hud/Hud";
import Api from "../Api/getWeatherData";

import classes from "./Weather.module.css";

class Weather extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const api = new Api(
      "http://api.openweathermap.org/data/2.5/forecast",
      "lodz",
      5,
      "73222932afd336b167e398441ae72ee0",
      "metric"
    );
    const data = await api.getData();
    this.setState({ data: data });
  };

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
