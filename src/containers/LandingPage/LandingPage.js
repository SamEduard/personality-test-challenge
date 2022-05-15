import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

import "./LandingPage.scss";

export const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className='landing-page main-container' >
            <h1>Are you an introvert or an extrovert?</h1>
            <h2>Take the personality test and find out!</h2>
            <Button onClick={() => navigate("/test/1")}  text={"START TEST"} />
        </div>
    )
}