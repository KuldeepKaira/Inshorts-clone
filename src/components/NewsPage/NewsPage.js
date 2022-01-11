import React from "react";
import AddBar from "./AddBar.js";
import classes from "./NewsPage.module.css";
import NewsCard from "./NewsCard.js";
import { data } from "./Data.js";

const NewsPage = (props) => {
  const newsData = data;
  const display = newsData.map((news) => {
    return (
      <NewsCard
        key={Math.random() * 100}
        title={news.title}
        author={news.author}
        description={news.description}
        url={news.url}
        timestamp={news.timestamp}
        link={news.link}
        publisher={news.publisher}
      />
    );
  });
  console.log(display);

  return (
    <div className={classes.newsContainer}>
      <AddBar />
      {display}
    </div>
  );
};

export default NewsPage;
