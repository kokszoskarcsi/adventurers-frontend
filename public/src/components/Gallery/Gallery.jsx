import { React } from "react";
import "../Gallery/Gallery.css"
import adventurerPictures from "../../assets/pictures.json"
import { useState } from "react";

function Gallery(){
    const pictures = adventurerPictures.adventurers.map(adventurer => {
        const row = {key:adventurer.key, value: adventurer.value};
        return row;
    });
    var [index, setIndex] = useState(0);

    return (
        <div className="Gallery" id="Gallery">
            <img class="arrow left" src="src/assets/left_arrow.svg" onClick={() => {
                if(index == 0){
                    var value = pictures.length-2;
                }
                else{
                    var value = index - 1;
                }
                setIndex(value);
            }} alt="" />
            <div className="flex">
                <img className="sidePic" src={pictures.at(index-1).value} alt="" />
                <img className="middlePic" src={pictures.at(index).value} alt="" />
                <img className="sidePic" src={pictures.at(index+1).value} alt="" />
            </div>
            <img class="arrow right" src="src/assets/right_arrow.svg" onClick={() => {
                if(index+2 == pictures.length){
                    var value = 0;
                }
                else{
                    var value = index + 1;
                }
                setIndex(value);
            }} alt="" />
            <span id="Introduction"></span>
        </div>
    )
}

export default Gallery;