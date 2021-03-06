import React, { Component } from "react";
import Hud from "../components/Hud/Hud";
import Api from "../Api/getWeatherData";

import classes from "./Weather.module.css";
import Spinner from "../components/UI/Spinner/Spinner";

class Weather extends Component {
  state = {
    data: null,
    searchInput: "lodz",
    doSearch: false,
  };

  componentDidMount() {
    this.getData(this.state.searchInput);
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    if (prevState !== this.state) {
      if (this.state.searchInput !== "" && this.state.doSearch) {
        this.getData(this.state.searchInput);
      }
    }
  }

  getData = async (city) => {
    const api = new Api(
      "http://api.openweathermap.org/data/2.5/weather",
      city,
      "73222932afd336b167e398441ae72ee0",
      "metric"
    );
    const res = await api.getData();
    this.setState({ data: res.data, doSearch: false });
  };

  inputHandler = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  submitHandler = () => {
    this.setState({ doSearch: true });
    this.getData(this.state.searchInput);
  };

  render() {
    return (
      <div className={classes.Weather}>
        <input
          type="text"
          placeholder="Enter City"
          value={this.state.searchInput}
          onChange={this.inputHandler}
        />
        <button onClick={this.submitHandler}>Search</button>
        {this.state.data ? <Hud data={this.state.data} /> : <Spinner />}
        {/* <Cards /> */}
      </div>
    );
  }
}

export default Weather;
