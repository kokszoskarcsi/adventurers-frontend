import { React } from "react";
import "../AppHeader/AppHeader.css";
import themeSelector from "../../themes";
import discordSVG from "../../assets/discord.svg";
import twitterSVG from "../../assets/twitter.svg";

function AppHeader() {
  const discordIcon = "gs://daowelcomesite.appspot.com/discord.svg";
  return (
    <div className="navBar">
      <div className="left-align">
        <img src="src/assets/icon_small.png" alt="Logo" />
        <a href="" id="dark">
          Home
        </a>
        <a href="#Introduction">Introduction</a>
        <a href="#Faq">FAQ</a>
      </div>
      <div className="right-align">
        <div>
          <button>
            <a href="https://twitter.com/AdventurersDAO">
              <img src={discordSVG} alt="" />
            </a>
          </button>
        </div>
        <div>
          <button>
            <a href="https://discord.com/invite/PGGh5nAFWz">
              <img src={twitterSVG} alt="" />
            </a>
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              themeSelector();
            }}
          >
            <img src="src/assets/moon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
