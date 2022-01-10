import React from "react";
import classes from "./AddBar.module.css";
import appleApp from "../../images/add1.png";
import googleApp from "../../images/add2.png";

const AddBar = () => {
  return (
    <div className={classes.addContainer}>
      <p className={classes.addText}>
        For the best experience use <strong>inshorts</strong> app on your
        smartphone
      </p>
      <img src={appleApp} alt="Apple app ad" className={classes.addApp} />
      <img src={googleApp} alt="Google app ad" className={classes.addApp} />
    </div>
  );
};

export default AddBar;
