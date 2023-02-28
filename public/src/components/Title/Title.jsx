import { React } from "react";
import "../Title/Title.css";
import welcomePicSVG from "../../assets/welcomePicture.svg";

function Title() {
  return (
    <div className="Title">
      <span id="Title"></span>
      <img className="welcomePic" src={welcomePicSVG} alt="" />
    </div>
  );
}

export default Title;
