import React, { Fragment } from "react";
import classes from "./NavBar.module.css";
import Logo from "../../images/logo.png";

const NavBar = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        <div>
          <img src={Logo} alt="inshorts logo" className={classes.logoImg} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
