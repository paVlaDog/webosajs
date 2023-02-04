import React from 'react';
import SimpleTextarea from "../UI/SimpleTextarea";

const Equip = ({charList}) => {
    return (
        <div>
            <div className={"big-bold-red-text"}>Снаряжение:</div>
            <SimpleTextarea
                value = {charList.equip.value[0]}
                onChange={(e) => {charList.equip.setValue(0)(e.target.value)}}
                placeholder={"Мне нужна твоя одежда и твой мотоцикл"}/>
        </div>
    );
};

export default Equip;