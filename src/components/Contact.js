import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaPlay,
} from "react-icons/fa";
const Contact = () => {
  const [header] = React.useState({
    subHeader: "Contact Me",
    text:
      "How can I help you?",
  });
  return (
    <div id='contact' className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="common">
            <h1 className="mainHeader">{header.subHeader}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row justifyCenter">
            <div className="col-6">
              <div className="contactSection-logo">
                <p>Portfo<span>lio.</span></p>
              </div>
              <p>
                You can reach me through these channels. <br />
                Istanbul, Turkey
              </p>
              <ul className="contactCircles">
                <li>
                  <a href="https://tr-tr.facebook.com/" target="_blank"><FaFacebookF className="contactIcon" /></a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank"><FaTwitter className="contactIcon" /></a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank"><FaGithub className="contactIcon" /></a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank"><FaLinkedinIn className="contactIcon" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
