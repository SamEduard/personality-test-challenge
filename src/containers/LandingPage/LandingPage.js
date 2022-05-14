import React from 'react';
import { Link } from 'react-router-dom';

import "./LandingPage.scss";

export const LandingPage = () => {
    return (
        <div className='landing-page' >
            <h1>Are you an introvert or an extrovert?</h1>
            <h2>Take the personality test and find out!</h2>
            <Link className="start-test" to="/test/1" >
                START TEST
            </Link>
        </div>
    )
}