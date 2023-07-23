import React from 'react';
import IncDecInput from "./IncDecInput";
import SimpleButton from "./SimpleButton";
import SimpleInput from "./SimpleInput";

const DoubleIncDecInput = ({changeVal, noChangeVal, setVal, decFunc = () => setVal(+changeVal-1), incFunc = () => setVal(+changeVal+1), ...props}) => {
    return (
        <div className={"inc-dec-input"}>
            <SimpleButton onClick={() => {decFunc()}} className={"left-button"} type={"button"}>-</SimpleButton>
                <SimpleInput disabled={true} val={noChangeVal} setVal={() => {}} style={{width: "60px"}} {...props}></SimpleInput>
                <SimpleInput val={changeVal} setVal={setVal}></SimpleInput>
            <SimpleButton onClick={() => {incFunc()}} className={"right-button"} type={"button"}>+</SimpleButton>
        </div>
    );
};

export default DoubleIncDecInput;