import React, { useState } from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaSearchDollar,
  FaFileVideo,
} from "react-icons/fa";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam libero cumque vel, quas dicta ipsum.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Design",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "App Development",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    },
    {
      id: 5,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "SEO Expert",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
    },
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
