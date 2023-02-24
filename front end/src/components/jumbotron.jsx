import React, { useRef, useEffect }from "react";
import "../style/styles.css";
import "../style/title.css";
import { GoblalButton } from "./generalbutton";

export const Jumbotron = () => {


  const textWrapperRef = useRef(null);

  useEffect(() => {
    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
  }, []);

  return (
    <div>
      <div className="jumbotron">
        <div className="banner">
        <h1 className="ml12">WELCOME TO BSB</h1>
          <GoblalButton name={"Show All"} path={"/products"} />
        </div>
      </div>

      <div className="categories">
        <div className="section-title">
          <h2>our Categories</h2>
        </div>
      </div>
    </div>
  );
};
