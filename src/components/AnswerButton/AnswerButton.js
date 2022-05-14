import React from 'react';


import "./AnswerButton.scss";

export const AnswerButton = ({option, answer, selectedAnswer, clickedAnswer}) => {
    return (
        <button onClick={() => clickedAnswer(option)} className={`answer ${selectedAnswer === option ? "answer--selected" : ""}`} >
            <p className={`answer__option ${selectedAnswer === option ? "answer__option--selected" : ""}`} > {option}</p>
            <h1 className='answer__text'>{answer}</h1>
        </button>
    )
}