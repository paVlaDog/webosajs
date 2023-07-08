import React from 'react';
import IncDecInput from "../UI/IncDecInput";
import "./OneHark.css"
import PopUpTip from "../UI/PopUpTip";

const OneHark = ({name, val, setVal, tipText}) => {
    return (
        <PopUpTip text={tipText}>
            <div className={"stats-with-field"}>
                <label className={"big-bold-red-text"}>{name + ":"}</label>
                <IncDecInput className={"one-hark-inp"} val={val} setVal={setVal}/>
            </div>
        </PopUpTip>
    );
};

export default OneHark;