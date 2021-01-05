import React, { useState } from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaSearchDollar,
  FaFileVideo,
  FaCode,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaCss3,
  FaSass,
  FaAngular,
  FaVuejs,
  FaDocker,

} from "react-icons/fa";
import { SiMongodb, SiJavascript, SiHtml5 } from 'react-icons/si'
import { DiScrum } from 'react-icons/di'

const Services = () => {
  const [header] = React.useState({
    subHeading: "Services",
    text:
      "My services and skills",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaCode className="commonIcons" />,
      heading: "Front-end Developer",
      text:
        "“If you think math is hard, try web design.” – Trish Parr",
      headingtwo: 'Languages:',
      language: <ul><li><SiHtml5 /> HTML</li>
        <li><FaCss3 /> CSS</li>
        <li><FaSass /> SASS</li></ul>,
      headingthree: 'Dev Tools:',
      devtools: <ul><li> <FaBootstrap /> Bootstrap</li>
        <li>S Semantic UI</li>

      </ul>,
    },
    // {
    //   id: 2,
    //   icon: <FaCamera className="commonIcons" />,
    //   heading: "Photography",
    //   text:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    // },
    {
      id: 3,
      icon: <FaDatabase className="commonIcons" />,
      heading: "Back-end Developer",
      text:
        "“Talk is cheap. Show me the code.” – Linus Torvalds",
      headingtwo: 'Languages:',
      language: <p><SiJavascript /> Javascript, ES6</p>,
      headingthree: 'Dev Tools:',
      devtools: <ul><li> <FaReact /> React</li>
        <li> <FaAngular /> Angular</li>
        <li> <FaVuejs /> Vue</li>
        <li> <FaNodeJs /> Node.js, NPM</li>
        <li> <SiMongodb /> MongoDB</li>
        <li> <FaDocker /> Docker</li>
        <li> <FaGithub /> Git, Github</li>
        <li> <DiScrum /> Scrum, Agile</li>
      </ul>,
    },
    // {
    //   id: 4,
    //   icon: <FaApple className="commonIcons" />,
    //   heading: "App Development",
    //   text:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    // },
    // {
    //   id: 5,
    //   icon: <FaFileVideo className="commonIcons" />,
    //   heading: "Video Editing",
    //   text:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    // },
    // {
    //   id: 5,
    //   icon: <FaSearchDollar className="commonIcons" />,
    //   heading: "SEO Expert",
    //   text:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    // },
  ]);

  return (
    <div id='services' className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <div className="services__box-header">{info.headingtwo}</div>
                  <div className="services__box-p">{info.language}</div>
                  <div className="services__box-header">{info.headingthree}</div>
                  <div className="services__box-p">{info.devtools}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
