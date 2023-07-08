import React from 'react';
import SimpleTextarea from "../UI/SimpleTextarea";

const History = ({charList, evalList}) => {
    return (
        <div>
            <div className={"big-bold-red-text"}>Аспекты:</div>
            <SimpleTextarea
                value = {charList.aspects.value[0]}
                onChange={(e) => {charList.aspects.setValue(0)(e.target.value)}}
                placeholder={"Серый и убогий"}/>
        </div>
    );
};

export default History;