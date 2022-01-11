import React from "react";
import classes from "./NewsCard.module.css";

const timeStamp = (time) => {
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timestamp = new Date(time);
  const day = timestamp.getDate();
  const weekday = daysOfWeek[timestamp.getDay()];
  const month = months[timestamp.getMonth()];
  const year = timestamp.getFullYear();

  const hours = timestamp.getHours();
  const minutes = timestamp.getMinutes();
  const seconds = timestamp.getSeconds();

  const timeoutput = ` ${hours > 12 ? hours - 12 : hours}:${minutes} ${
    hours > 12 ? "pm" : "am"
  } on ${day} ${month} ${year}, ${weekday}`;

  return timeoutput;
};

const NewsCard = (props) => {
  return (
    <div className={classes.newsCard}>
      <div className={classes.newsImgDiv}>
        <img src={props.url} alt="news image" className={classes.newsImg} />
      </div>
      <div className={classes.newsContent}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.author}>
          <span className={classes.short}>short</span>
          {` by ${props.author}/${timeStamp(props.timestamp)}`}
        </p>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.linkInfo}>
          read more at
          <a className={classes.link} href={props.url}>
            {` ${props.publisher}`}
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
