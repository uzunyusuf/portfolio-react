import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "John Doe" },
    { id: 2, title: "Email:", text: "example@example.com" },
    { id: 3, title: "Github:", text: <a href='https://github.com/' target="_blank">/johndoe</a> },
    { id: 4, title: "Linkedin:", text: <a href='https://linkedin.com/' target="_blank">/johndoe</a> },
  ]);

  return (
    <div id='about' className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="https://thispersondoesnotexist.com/image" alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                dignissimos voluptas, voluptatem eum blanditiis aliquid. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Expedita,
                aspernatur!
              </div>
              <div className="about__info-p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, aspernatur!
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p> {info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
