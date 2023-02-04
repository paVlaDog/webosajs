import React from 'react';
import DoubleIncDecInput from "./DoubleIncDecInput";

const StatsWithDoubleIncDecInput = ({name, changeVal, noChangeVal, setVal, ...props} ) => {
    return (
        <div className={"stats-with-field"}>
            <label className={"bold-red-text"}>{name + ":"}</label>
            <DoubleIncDecInput changeVal={changeVal} noChangeVal={noChangeVal} setVal={setVal} {...props}/>
        </div>
    );
};

export default StatsWithDoubleIncDecInput;