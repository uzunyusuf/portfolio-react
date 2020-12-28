// import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import React, { Component } from "react";


// const Portfolio = () => {
// const [header] = React.useState({
//   subHeader: "Portfolio",
//   text:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
// });
// const [portfolio] = React.useState([
//   { id: 1, title: "Analog Clock:", text: "This project is a working clock made with CSS and Javascript." },
//   { id: 2, title: "Drum Kit:", text: "This is a drum kit application for childs." },
//   { id: 3, title: "Dice Games:", text: 'When you press the button, dice rolls randomly and generate a winner (or draw).' },
//   { id: 4, title: "Change Color:", text: 'Your web page background color will be changed randomly when you clicked button on the page.' },
// ]);
// return (
//   <div id='services' className="services">
//     <div className="container">
//       <div className="services__header">
//         <div className="common">
//           <h3 className="heading">{header.mainHeader}</h3>
//           <h1 className="mainHeader">{header.subHeading}</h1>
//           <p className="mainContent">{header.text}</p>
//           <div className="commonBorder"></div>
//         </div>

//         <div className="row bgMain">
//           {portfolio.map((info) => (
//             <div className="col-4 bgMain">
//               <div className="services__box">
//                 {info.icon}
//                 <div className="services__box-header">{info.title}</div>
//                 <div className="services__box-p">{info.text}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// )
// }

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

// function Portfolio() {
//   const [header] = React.useState({
//     subHeader: "Portfolio",
//     text:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
//   });
//   const [portfolio] = React.useState([
//     {
//       id: 1,
//       title: "Analog Clock:",
//       text: "This project is a working clock made with CSS and Javascript.",
//     },
//     {
//       id: 2,
//       title: "Drum Kit:",
//       text: "This is a drum kit application for childs.",
//     },
//     {
//       id: 3,
//       title: "Dice Games:",
//       text:
//         "When you press the button, dice rolls randomly and generate a winner (or draw).",
//     },
//     {
//       id: 4,
//       title: "Change Color:",
//       text:
//         "Your web page background color will be changed randomly when you clicked button on the page.",
//     },
//   ]);
//   const state = {
//     items: [
//       { id: 1, title: "item #1" },
//       { id: 2, title: "item #2" },
//       { id: 3, title: "item #3" },
//       { id: 4, title: "item #4" },
//       { id: 5, title: "item #5" },
//     ],
//   };

//   const { items } = this.state;

//   return (
//     <div id="services" className="services">
//       <div className="container">
//         <div className="services__header">
//           <div className="common">
//             <h3 className="heading">{header.mainHeader}</h3>
//             <h1 className="mainHeader">{header.subHeader}</h1>
//             <p className="mainContent">{header.text}</p>
//             <div className="commonBorder"></div>
//           </div>
//         </div>
//         <div className="portfolio1">
//           <Carousel breakPoints={breakPoints}>
//             {items.map((item) => (
//               <div key={item.id}>{item.title}</div>
//             ))}
//           </Carousel>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Portfolio;


export default class Portfolio extends Component {
  state = {
    items: [
      { id: 1, title: "Analog Clock:", imgURL: 'https://ibb.co/M7P3kwJ' },
      { id: 2, title: "Drum Kit", imgURL: 'https://i.ibb.co/5LsfhpJ/analogclock.png' },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
    ],
    portfolio: [
      {
        id: 1,
        title: "Analog Clock",
        text: "This project is a working clock made with CSS and Javascript.",
        imgURL: 'https://i.ibb.co/5LsfhpJ/analogclock.png',
      },
      {
        id: 2,
        title: "Drum Kit",
        text: "This is a drum kit application for childs.",
        imgURL: 'https://i.ibb.co/5LsfhpJ/analogclock.png',
      },
      {
        id: 3,
        title: "Dice Games",
        text:
          "Dice rolls randomly and generate a winner (or draw).",
        imgURL: 'https://i.ibb.co/5LsfhpJ/analogclock.png',
      },
      {
        id: 4,
        title: "Change Color",
        text:
          "Background color will be changed randomly when you clicked button.",
        imgURL: 'https://i.ibb.co/5LsfhpJ/analogclock.png',
      },
    ],
    header: {
      subHeader: "Portfolio",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore."
      ,
    }

  };

  render() {
    const { items, header, portfolio } = this.state;
    return (
      <div id="portfolio" className="services">
        <div className="container">
          <div className="services__header">
            <div className="common">
              <h1 className="mainHeader">{header.subHeader}</h1>
              <p className="mainContent">{header.text}</p>
              <div className="commonBorder"></div>
            </div>
          </div>
          <div className="portfolio1">
            <Carousel breakPoints={breakPoints}>
              {portfolio.map((item) => (
                <Item>
                  {/* <div key={item.id} >
                    <img src={item.imgURL} alt="" />
                    <p>{item.title}</p>
                  </div> */}
                  <div className="card">
                    <div className="box">
                      <a href="https://uzunyusuf.github.io/change-color/">
                        <img src={item.imgURL} alt="" />
                      </a>
                      <div className="text">{item.title}</div>
                      <p>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}
