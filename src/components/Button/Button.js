import React from 'react';

import "./Button.scss";

export const Button = ({ text, onClick, disabled }) => {
    return (
        <button onClick={() => onClick()} disabled={disabled} className='button'>
            {text}
        </button>
    )
}