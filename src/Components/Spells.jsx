import React from 'react';
import SimpleTextarea from "../UI/SimpleTextarea";
import IncDecInputWithWords from "../UI/IncDecInputWithWords";

const mapArray = new Map([
    [0, 'Не заклинатель'],
    [1, 'Полузаклинатель'],
    [2, 'Заклинатель']
])

const Spells = ({charList, evalList}) => {
    return (
        <div>
            <div className={"one-navik stats-with-field"}>
                <label className={"bold-red-text"}>{"Заклинатель" + ":"}</label>
                <IncDecInputWithWords val={charList.mage.value[0]} setVal={charList.mage.setValue(0)} mapArray={mapArray}/>
            </div>
            <div className={"big-bold-red-text"}>Список заклинаний:</div>
            <SimpleTextarea
                value = {charList.spells.value[0]}
                onChange={(e) => {charList.spells.setValue(0)(e.target.value)}}
                placeholder={"Грязный магл!"}/>
        </div>
    );
};

export default Spells;