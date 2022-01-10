import React from "react";
import classes from "./NewsCard.module.css";

const DUMMY_DATA = {
  title:
    "Akshay Kumar Bell Bottom screened at world highest mobile theatre in Ladakh",
  author: "Sakshita Khosla",
  description:
    "Actor Akshay Kumar on Sunday said his recent release Bell Bottom was screened at a travelling cinema hall in Ladakh, touted as the worlds highest mobile theatre. [It] makes my heart swell with pride, said Akshay, sharing a picture of the theatre on Twitter. He added, At an altitude of 11,562 feet, the theatre can operate at -28 °C.",
  url: "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2021/08_aug/29_sun/img_1630255412572_833.jpg",
  timestamp: "2021-08-29T16:50:33.000Z",
  link: "https://www.hindustantimes.com/entertainment/bollywood/akshay-kumar-s-bellbottom-screened-at-world-s-highest-mobile-theatre-in-ladakh-makes-my-heart-swell-with-pride-101630246753605-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
  publisher: "Hindustan Times",
};

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

const NewsCard = () => {
  return (
    <div className={classes.newsCard}>
      <div className={classes.newsImgDiv}>
        <img
          src={DUMMY_DATA.url}
          alt="news image"
          className={classes.newsImg}
        />
      </div>
      <div className={classes.newsContent}>
        <p className={classes.title}>{DUMMY_DATA.title}</p>
        <p className={classes.author}>
          <span className={classes.short}>short</span>
          {` by ${DUMMY_DATA.author}/${timeStamp(DUMMY_DATA.timestamp)}`}
        </p>
        <p className={classes.description}>{DUMMY_DATA.description}</p>
        <p className={classes.linkInfo}>
          read more at
          <a className={classes.link} href={DUMMY_DATA.url}>
            {` ${DUMMY_DATA.publisher}`}
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
