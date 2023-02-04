import React from 'react';
import IncDecInput from "../UI/IncDecInput";
import "./OneHark.css"

const OneHark = ({name, val, setVal}) => {
    return (
        <div className={"stats-with-field"}>
            <label className={"big-bold-red-text"}>{name + ":"}</label>
            <IncDecInput className={"one-hark-inp"} val={val} setVal={setVal}/>
        </div>
    );
};

export default OneHark;