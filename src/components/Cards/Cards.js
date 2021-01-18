import React, { Component } from "react";
import Card from "./Card/Card";
import classes from "./Cards.module.css";

class Cards extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Cards;
