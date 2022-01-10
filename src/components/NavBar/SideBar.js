import React, { useState } from "react";
import classes from "./SideBar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const SideBar = () => {
  const [showbar, setShowbar] = useState(false);
  const [english, setEnglish] = useState(true);

  const languageHandler = () => {
    setEnglish((prevState) => !prevState);
  };

  const menuHandler = () => {
    setShowbar((prevState) => !prevState);
  };

  const menuIcon = showbar ? (
    <AiOutlineClose className={classes.menuIcon} onClick={menuHandler} />
  ) : (
    <AiOutlineMenu className={classes.menuIcon} onClick={menuHandler} />
  );

  return (
    <div className={`${classes.sideBar} ${showbar ? classes.showSidebar : ""}`}>
      <div className={classes.sideBarContainer}>
        <div className={classes.menuDiv}>
          {menuIcon}
          <p className={classes.menuTag}>Menu</p>
        </div>
        <div className={classes.language}>
          <button
            onClick={languageHandler}
            className={`${classes.languagebtn} ${
              english ? classes.active : ""
            } ${classes.english} `}
          >
            English
          </button>
          <button
            onClick={languageHandler}
            className={`${classes.languagebtn} ${
              !english ? classes.active : ""
            } ${classes.hindi}  `}
          >
            Hindi
          </button>
        </div>
        <hr className={classes.solid} />
        <label className={classes.labelCategories}>Categories</label>
        <ul className={classes.list}>
          <li className={classes.listItem}>All News</li>
          <li className={classes.listItem}>India</li>
          <li className={classes.listItem}>Business</li>
          <li className={classes.listItem}>Sports</li>
          <li className={classes.listItem}>World</li>
          <li className={classes.listItem}>Politics</li>
          <li className={classes.listItem}>Technology</li>
          <li className={classes.listItem}>Startup</li>
          <li className={classes.listItem}>Entertainment</li>
          <li className={classes.listItem}>Miscellaneous</li>
          <li className={classes.listItem}>Hatke</li>
          <li className={classes.listItem}>Science</li>
          {/* <li className={classes.listItem}>Automobile</li> */}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
