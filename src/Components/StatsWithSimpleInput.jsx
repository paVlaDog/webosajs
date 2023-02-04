import React from 'react';
import IncDecInput from "../UI/IncDecInput";
import SimpleInput from "../UI/SimpleInput";

const StatsWithSimpleInput = ({name, val, setVal, ...props}) => {
    return (
        <div className={"stats-with-field"}>
            <label className={"bold-red-text"}>{name + ":"}</label>
            <SimpleInput className={"stats-with-simple-input"} val={val} setVal={setVal} {...props}/>
        </div>
    );
};

export default StatsWithSimpleInput;