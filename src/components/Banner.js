import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaPlay,
} from "react-icons/fa";

const Banner = () => {
  const [state] = React.useState({
    title: 'I am John Doe',
    text: ' i am John, professional web developer with long time experience in this field'
  })
  return (
    <header className="header" >
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <FaFacebookF />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaGithub />
                  </li>
                  <li>
                    <FaLinkedinIn />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header >
  );
};

export default Banner;
