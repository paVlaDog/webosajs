import React from 'react';
import DoubleIncDecInput from "./DoubleIncDecInput";
import PopUpTip from "./PopUpTip";

const StatsWithDoubleIncDecInput = ({name, changeVal, noChangeVal, setVal, tipExist=true, tip, ...props} ) => {
    return (
        <div className={"stats-with-field"}>
            {tipExist &&
                <PopUpTip text={tip}>
                    <label className={"bold-red-text"}>{name + ":"}</label>
                </PopUpTip>}

            {!tipExist &&
                <label className={"bold-red-text"}>{name + ":"}</label>}

            <DoubleIncDecInput changeVal={changeVal} noChangeVal={noChangeVal} setVal={setVal} {...props}/>
        </div>
    );
};

export default StatsWithDoubleIncDecInput;