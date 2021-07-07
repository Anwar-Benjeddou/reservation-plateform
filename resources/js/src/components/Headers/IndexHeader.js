/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React,{useState,useEffect} from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  const items = [
    {
      src: require("assets/img/YACHT.jpg").default,
      altText: "Somewhere",
      caption: "Somewhere",
    },
    {
      src: require("assets/img/GettingHereCar.jpg").default,
      altText: "Somewhere else",
      caption: "Somewhere else",
    },
    {
      src: require("assets/img/jumeirah-island-united-arab-emirates-scaled.jpg").default,
      altText: "Here it is",
      caption: "Here it is",
    },
    {
      src: require("assets/img/plane.jpg").default,
      altText: "Here it is",
      caption: "Here it is",
    },
  ];
  // const [counter, setCounter] = React.useState(0);
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCounter(prevCount => prevCount + 1); // <-- Change this line!
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []); 
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const handleClickPrev = () => { 
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };const handleClicknext = () => {
    if (index === items.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };
  useEffect(() => {
    const handleAutoplay = setInterval(handleClicknext, 5000);
    return () => clearInterval(handleAutoplay);
  }, [handleClicknext]);
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + items[index].src + ")",
            backgroundRepeat: 'repeat-x'
        }}
      >
        {/* <div>Count: {index}</div> */}
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              {/* <h1 className="presentation-title">Paper Kit React</h1> */}
              {/* <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div> */}
              {/* <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div> */}
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
        {/* <h6 className="category category-absolute">
          Designed and coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=pkr-index-page"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              src={require("assets/img/creative-tim-white-slim2.png").default}
            />
          </a>
        </h6> */}
      </div>
    </>
  );
}

export default IndexHeader;
