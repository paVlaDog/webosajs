import React from 'react';
import SimpleTextarea from "../UI/SimpleTextarea";

const Spells = ({charList}) => {
    return (
        <div>
            <div className={"big-bold-red-text"}>Список заклинаний:</div>
            <SimpleTextarea
                value = {charList.spells.value[0]}
                onChange={(e) => {charList.spells.setValue(0)(e.target.value)}}
                placeholder={"Грязный магл!"}/>
        </div>
    );
};

export default Spells;