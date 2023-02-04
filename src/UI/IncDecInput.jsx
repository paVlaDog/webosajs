import React from 'react';
import SimpleInput from "./SimpleInput";
import "./IncDecInput.css";
import "./SimpleInput.css";
import SimpleButton from "./SimpleButton";

const IncDecInput = ({val, setVal, decFunc = () => setVal(+val-1), incFunc = () => setVal(+val+1), ...props}) => {
    return (
        <div className={"inc-dec-input"}>
            <SimpleButton onClick={() => {decFunc()}} className={"left-button"} type={"button"}>-</SimpleButton>
                <SimpleInput val={val} setVal={setVal} {...props}></SimpleInput>
            <SimpleButton onClick={() => {incFunc()}} className={"right-button"} type={"button"}>+</SimpleButton>
        </div>
    );
};

export default IncDecInput;