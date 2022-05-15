import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Backend } from "../../backend";
import { AnswerButton } from '../../components/AnswerButton/AnswerButton';

import "./TestPage.scss";

export const TestPage = () => {
    const [selectedAnswer, setSelectedAnswer] = useState();

    const navigate = useNavigate();
    const questionNr = parseInt(useParams().nr);

    const questionData = Backend[questionNr - 1];
    const nextQuestionHandler = () => {
        if(questionNr < 6) {
            setSelectedAnswer();
            //Add logic to sum points
            navigate(`/test/${questionNr + 1}`);
        }
    }

    return (
        <div className='test-page' >
            <p>Question {questionNr}/6</p>
            <h1 className='test-page__title'>{questionData.question}</h1>
            <div className='answer-container' >
                {questionData.answers.map((answer, i) =>
                    <AnswerButton
                        key={i}
                        option={answer.option}
                        answer={answer.text}
                        selectedAnswer={selectedAnswer}
                        clickedAnswer={(option) => setSelectedAnswer(option)}
                    />)
                }
            </div>
            <button onClick={() => nextQuestionHandler()} disabled={!selectedAnswer} className='next-question-button'>
                {questionNr < 6 ? "Next question >" : "See results"}
            </button>
        </div>
    )
}