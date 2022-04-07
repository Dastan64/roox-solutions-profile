import React from 'react';
import "./Button.scss";

const Button = ({children, ...props}) => {
    return (
        <button {...props} className={`button ${props.className}`} type="button">
            {children}
        </button>
    );
};

export default Button;