import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.TimeofDay}>
        <h2>Today</h2>
      </div>
      <div className={classes.TimeofDay}>
        <h3>Day</h3>
        <p>24</p>
      </div>

      <div className={classes.TimeofDay}>
        <h3>Evening</h3>
        <p>24</p>
      </div>

      <div className={classes.TimeofDay}>
        <h3>Night</h3>
        <p>24</p>
      </div>
    </div>
  );
};

export default Card;
