import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Backend } from "../../backend";
import { AnswerButton } from '../../components/AnswerButton/AnswerButton';

import "./TestPage.scss";

export const TestPage = () => {
    const [selectedAnswer, setSelectedAnswer] = useState();
    const questionNr = useParams().nr;
    const questionData = Backend[questionNr];
    return (
        <div className='test-page' >
            <p>Question {questionNr}/6</p>
            <h1 className='test-page__title'>{questionData.question}</h1>
            <div className='answer-container' >
                {questionData.answers.map(answer =>
                    <AnswerButton
                        option={answer.option}
                        answer={answer.text}
                        selectedAnswer={selectedAnswer}
                        clickedAnswer={(option) => setSelectedAnswer(option)}
                    />)
                }
            </div>
        </div>
    )
}