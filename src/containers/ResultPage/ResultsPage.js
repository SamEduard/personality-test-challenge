import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Button } from '../../components/Button/Button';

import { restartPoints } from "../../redux/answersPointsSlice";

import "./ResultsPage.scss";

export const ResultsPage = () => {
    const sumPoints = useSelector((state) => state.answersPoints.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickRestart = () => {
        dispatch(restartPoints());
        navigate("/");
    }

    return (
        <div className='result-page main-container' >
            <h1>Results:</h1>
            <p>0 = Extremely introvert. 18 = Extremely extrovert. You scored {sumPoints}/18</p>
            <h1>You are an {sumPoints > 9 ? <span className='result-page__extrovert'>extrovert</span> : <span className='result-page__introvert'>introvert</span>}</h1>
            <Button onClick={() => onClickRestart()} text="Start again" />
        </div>
    )
}