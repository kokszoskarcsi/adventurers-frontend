import { React } from "react";
import "../Faq/Faq.css"
import qna from "../../assets/qna.json"
import { useState } from "react";

function Faq(){
    const questions = qna.questions.map(question => {
        const row = {key:question.key, value: question.q};
        return row;
    });
    const answers = qna.answers.map(answer => {
        const row = {key:answer.key, value: answer.a};
        return row;
    });
    const [currentID, setCurrentID] = useState(1);

    return (
        <div className="Faq">
            <h1>Faq</h1>
            <div className="qna">
                <div className="questions" id="questions">
                    {
                        questions.map(question => {
                            return <p onClick={() => {
                                setCurrentID(question.key);
                                if(document.body.classList.contains('black')){
                                    const collection = document.querySelectorAll('div');
                                    for(let i=0; i< collection.length; i++){
                                        collection[i].style.color = "black";
                                    }
                                }
                            }}>{question.value}</p>
                        })
                    }
                </div>
                <div className="answers">
                    {
                        questions.map(question => {
                            if(question.key == currentID){
                                if(document.body.classList.contains('black')){
                                    return <p style={{color:"var(--dark_text_color)"}} className="label">{question.value}</p>
                                }
                                else{
                                    return <p className="label">{question.value}</p>
                                }
                                
                            }
                        })
                    }
                    {
                        answers.map(answer => {
                            if(answer.key == currentID){
                                if(document.body.classList.contains('black')){
                                    return <p style={{color:"var(--dark_text_color)"}} className="answer">{answer.value}</p>
                                }
                                else{
                                    return <p className="answer">{answer.value}</p>
                                }
                            }
                        })
                    }
                </div>
            </div>
            <div className="icons">
                <img className="pingvin" src="src/assets/pingvin.svg"></img>
                <img className="poti" src="src/assets/poti.svg"></img>
            </div>
        </div>
    )
}

export default Faq;