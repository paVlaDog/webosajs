import React from 'react';
import "./SimpleInput.css"

const SimpleInput = ({val, setVal, ...props}) => {
    return (
        <div className={"simple-input"}>
            <input value={val} onChange={(e) => {setVal(e.target.value)}} {...props}/>
        </div>
    );
};

export default SimpleInput;