import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from "./Item";



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
  { width: 1200, itemsToShow: 4 }
];

function Portfolio() {
  const [header] = React.useState({
    subHeader: "Portfolio",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos, tempore.",
  });
  const [portfolio] = React.useState([
    { id: 1, title: "Analog Clock:", text: "This project is a working clock made with CSS and Javascript." },
    { id: 2, title: "Drum Kit:", text: "This is a drum kit application for childs." },
    { id: 3, title: "Dice Games:", text: 'When you press the button, dice rolls randomly and generate a winner (or draw).' },
    { id: 4, title: "Change Color:", text: 'Your web page background color will be changed randomly when you clicked button on the page.' },
  ]);
  return (
    <div id='services' className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeader}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
        </div>
        <div className="portfolio1">
          <Carousel breakPoints={breakPoints}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}



export default Portfolio