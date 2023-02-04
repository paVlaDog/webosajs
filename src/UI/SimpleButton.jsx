import React from 'react';
import "./SimpleButton.css"

const SimpleButton = ({children, ...props}) => {
    return (
        <div className={"simple-button"}>
            <button {...props}>{children}</button>
        </div>
    );
};

export default SimpleButton;