import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.inshorts}>
        <img
          src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
          alt="inshorts logo"
          className={classes.logoImg}
        />
        <div className={classes.copyright}>
          <span>
            <strong>inshorts</strong> medialabs pvt. ltd.
          </span>
          <span>&copy;COPYRIGHT 2022</span>
        </div>
      </div>
      <hr className={classes.solid} />
      <div className={classes.contactUs}>
        <img
          src="https://assets.inshorts.com/website_assets/images/contact_icon.png"
          alt="contact Us logo"
          className={classes.contactUsImg}
        />
        <div className={classes.termsandC}>
          <span>
            <a>Terms and Conditions</a>
          </span>
          <span>
            <p>Privacy Policies</p>
          </span>
        </div>
      </div>
      <div className={classes.sociallinks}>
        <FaFacebookF className={classes.social} />
        <FaTwitter className={classes.social} />
        <FaLinkedin className={classes.social} />
      </div>
    </div>
  );
};

export default Footer;
