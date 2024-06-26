import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <a style={{ color: "red",textDecoration:"none" }} href="https://veeranna98.github.io/Portfolio-Project/"><li  className="menuItem">About</li></a>
          {/* <a style={{ color: "red", textDecoration: "none" }} href="https://veeranna98.github.io/fbook/"><li className="menuItem">Blog</li></a> */}
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Made By Vaibhav More (Full stack Developer).
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a style={{ color: "white" }} href="https://github.com/Veeranna98?tab=repositories"><FaGithub /></a>
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://github.com/veeranna463"><FaGitlab /></a> 
          </span>
          {/* <span className="icon">
            <a style={{ color: "white" }} href="https://www.instagram.com/vaibhavmore1997/"><FaInstagram /></a> 
          </span> */}
          {/* <span className="icon">
            <a style={{ color: "white" }} href="https://twitter.com/mvaibhav131"><FaTwitter /></a> 
          </span> */}
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.linkedin.com/"><FaLinkedin /></a> 
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;