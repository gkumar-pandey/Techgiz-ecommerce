import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer d-flex justify-center items-center flex-col ">
      <div>
        <div className="d-flex items-center justify-between ">
          <Link
            className="link"
            to={"https://www.linkedin.com/in/gkpandey/"}
            target="_blank"
          >
            <BsLinkedin className="icon" />
          </Link>
          <Link
            className="link"
            to={"https://github.com/gkumar-pandey"}
            target="_blank"
          >
            <BsGithub className="icon" />
          </Link>
          <Link className="link">
            <BsTwitter
              className="icon"
              to={"https://twitter.com/gautamkp078"}
              target="_blank"
            />
          </Link>
        </div>
      </div>
      <p>
        Developed by <span>GKP</span>
      </p>
    </div>
  );
};

export default Footer;
