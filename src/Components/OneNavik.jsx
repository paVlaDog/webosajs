import React from 'react';
import IncDecInput from "../UI/IncDecInput";
import "./OneNavik.css";
import IncDecInputWithWords from "../UI/IncDecInputWithWords";
import PopUpTip from "../UI/PopUpTip";

const mapArray = new Map([
    [0, 'Отсутствие(+0)'],
    [1, 'Владение(+1к4)'],
    [2, 'Компетентность(+1к8)'],
    [3, 'Мастерство(+1к12)']
])

const OneNavik = ({name, val, setVal, tipText}) => {
    return (
        <PopUpTip text={tipText}>
            <div className={"one-navik stats-with-field"}>
                <label className={"bold-red-text"}>{name + ":"}</label>
                <IncDecInputWithWords val={val} setVal={setVal} mapArray={mapArray}/>
            </div>
        </PopUpTip>
    );
};

export default OneNavik;