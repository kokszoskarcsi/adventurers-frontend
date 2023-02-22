import { React } from "react";
import "../Introduction/Introduction.css"

function Introduction(){
    return (
        <div className="Introduction">
            <div className="IntroHeader">
                <img className="taska" src="src/assets/taska.svg"></img>
                <h1 className="intro">Introduction</h1>
            </div>
            <div className="IntroBody">
                <img className="kupa" src="src/assets/kupa.svg"></img>
                <p>The AdventurersDAO is a decentralized autonomous organization (DAO) built on the Ergo blockchain. Our focus is to bring to life high-quality, one-of-a-kind art pieces that capture the essence of adventure and embody the daring spirit and creativity that defines our community.
                    Our aim is to build a dynamic community of artists, collectors, programmers, writers, researchers, doers, and dreamers alike. We aim to support each other in our endeavors, creating a space where everyone can flourish. To make this a reality, the AdventurersDAO will become fully autonomous step by step, establishing its own treasury and governance system. Members will have the opportunity to make proposals, vote on them with our governance token $OBSIDIAN, and elect leaders tasked with executing them. We like to call ourselves a "Creative Hub DAO" and we aim to make DAOs fun again!
                    <span id="Faq"></span>
                </p>
                <img className="bot" src="src/assets/varazsbot.svg"></img>
            </div>
            
        </div>
    )
}

export default Introduction;