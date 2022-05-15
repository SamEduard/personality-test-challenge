import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';

import { Backend } from "../../backend";
import { AnswerButton } from '../../components/AnswerButton/AnswerButton';
import { Button } from '../../components/Button/Button';

import {incrementByAmount} from "../../redux/answersPointsSlice";

import "./TestPage.scss";

export const TestPage = () => {
    const [selectedAnswer, setSelectedAnswer] = useState();

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const questionNr = parseInt(useParams().nr);

    const questionData = Backend[questionNr - 1];

    const nextQuestionHandler = () => {
        setSelectedAnswer();
        const points = questionData.answers.filter(answer => answer.option === selectedAnswer)[0].points;
        dispatch(incrementByAmount(points));

        if(questionNr < 6) {
            navigate(`/test/${questionNr + 1}`);
        } else {
            navigate("/result");
        }
    }

    return (
        <div className='test-page main-container' >
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
            <Button onClick={() => nextQuestionHandler()} disabled={!selectedAnswer} text={questionNr < 6 ? "Next question >" : "See results"} />
        </div>
    )
}