import React from 'react';
import IncDecInput from "../UI/IncDecInput";
import "./OneHark.css"
import PopUpTip from "../UI/PopUpTip";

const OneHark = ({name, val, setVal, tipText}) => {
    return (
        <div className={"stats-with-field"}>
            <PopUpTip text={tipText}>
                <label className={"big-bold-red-text"}>{name + ":"}</label>
            </PopUpTip>
            <IncDecInput className={"one-hark-inp"} val={val} setVal={setVal}/>
        </div>
    );
};

export default OneHark;