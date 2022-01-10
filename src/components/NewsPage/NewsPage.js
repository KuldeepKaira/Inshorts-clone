import React from "react";
import AddBar from "./AddBar.js";
import classes from "./NewsPage.module.css";
import NewsCard from "./NewsCard.js";

const NewsPage = (props) => {
  return (
    <div className={classes.newsContainer}>
      <AddBar />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default NewsPage;
