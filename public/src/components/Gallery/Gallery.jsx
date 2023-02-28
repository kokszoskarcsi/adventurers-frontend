import { React } from "react";
import "../Gallery/Gallery.css";
import { useState } from "react";
import leftArrowSVG from "../../assets/left_arrow.svg";
import rightArrowSVG from "../../assets/right_arrow.svg";
import tehenSVG from "../../assets/image872.svg";
import rokaSVG from "../../assets/image884.svg";
import kecskeSVG from "../../assets/image896.svg";
import capybaraSVG from "../../assets/image908.svg";
import bagolySVG from "../../assets/image920.svg";
import nyulemberSVG from "../../assets/image932.svg";
import farkasSVG from "../../assets/image998.svg";
import magusSVG from "../../assets/image1010.svg";
import halSVG from "../../assets/image18528.svg";
import nyulSVG from "../../assets/image18550.svg";
import kutyaSVG from "../../assets/image18574.svg";
import capaSVG from "../../assets/image18576.svg";

function Gallery() {
  const pictures = [
    { key: 1, value: tehenSVG },
    { key: 2, value: rokaSVG },
    { key: 3, value: kecskeSVG },
    { key: 4, value: capybaraSVG },
    { key: 5, value: bagolySVG },
    { key: 6, value: nyulemberSVG },
    { key: 7, value: farkasSVG },
    { key: 8, value: magusSVG },
    { key: 9, value: halSVG },
    { key: 10, value: nyulSVG },
    { key: 11, value: kutyaSVG },
    { key: 12, value: capaSVG },
  ];
  var [index, setIndex] = useState(0);

  return (
    <div className="Gallery" id="Gallery">
      <img
        class="arrow left"
        src={leftArrowSVG}
        onClick={() => {
          if (index == 0) {
            var value = pictures.length - 2;
          } else {
            var value = index - 1;
          }
          setIndex(value);
        }}
        alt=""
      />
      <div className="flex">
        <img className="sidePic" src={pictures.at(index - 1).value} alt="" />
        <img className="middlePic" src={pictures.at(index).value} alt="" />
        <img className="sidePic" src={pictures.at(index + 1).value} alt="" />
      </div>
      <img
        class="arrow right"
        src={rightArrowSVG}
        onClick={() => {
          if (index + 2 == pictures.length) {
            var value = 0;
          } else {
            var value = index + 1;
          }
          setIndex(value);
        }}
        alt=""
      />
      <span id="Introduction"></span>
    </div>
  );
}

export default Gallery;
