import { React } from "react";
import "../AppHeader/AppHeader.css"
import themeSelector from "../../themes";

function AppHeader(){
    return (
        <div className="navBar">
            <div className="left-align">
                <img src="src/assets/icon_small.png" alt="Logo"/>
                <a href="" id="dark">Home</a>
                <a href="#Introduction">Introduction</a>
                <a href="#Faq">FAQ</a>
            </div>
            <div className="right-align">
                <div>
                    <button><a href="https://twitter.com/AdventurersDAO"><img src="src/assets/twitter.svg" alt="" /></a></button>
                </div>
                <div>
                    <button><a href="https://discord.com/invite/PGGh5nAFWz"><img src="src/assets/discord.svg" alt="" /></a></button>
                </div>
                <div>
                    <button onClick={() => {themeSelector()}}><img src="src/assets/moon.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default AppHeader;