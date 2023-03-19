import { React } from "react";
import "../AppHeader/AppHeader.css";
import Theme from "../../themes";
import discordSVG from "../../assets/discord.svg";
import twitterSVG from "../../assets/twitter.svg";
import moonSVG from "../../assets/moon.svg";
import sunSVG from "../../assets/sun.svg";
import smallIconPNG from "../../assets/icon_small.png";
import { useState } from "react";

function AppHeader() {
  const theme = new Theme();
  const [button, setButton] = useState(
    <button
      onClick={() => {
        theme.themeSelector();
        console.log("nap");
      }}
    >
      <img src={moonSVG} alt="" />
    </button>
  );
  function switchMode() {
    if (document.body.classList.contains("black")) {
      return () =>
        setButton(
          <button
            onClick={() => {
              theme.themeSelector();
              console.log("nap");
            }}
          >
            <img src={moonSVG} alt="" />
          </button>
        );
    } else {
      return () =>
        setButton(
          <button
            onClick={() => {
              theme.themeSelector();
              console.log("hold");
            }}
          >
            <img src={sunSVG} alt="" />
          </button>
        );
    }
  }
  return (
    <div className="navBar" id="navBar">
      <div className="left-align">
        <img src={smallIconPNG} alt="Logo" className="logo" />
        <a
          href="#Title"
          onMouseOver={theme.hoverInColor}
          onMouseOut={theme.hoverOutColor}
        >
          Home
        </a>
        <a href="#Introduction">Introduction</a>
        <a href="#Faq">FAQ</a>
      </div>
      <div className="right-align">
        <div>
          <button>
            <a href="https://twitter.com/AdventurersDAO">
              <img src={twitterSVG} alt="" />
            </a>
          </button>
        </div>
        <div>
          <button>
            <a href="https://discord.com/invite/PGGh5nAFWz">
              <img src={discordSVG} alt="" />
            </a>
          </button>
        </div>
        <div>
          <button onClick={switchMode()}>{button}</button>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
