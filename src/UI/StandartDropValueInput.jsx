import React from 'react';
import DropValueInput from "./DropValueInput";

const StandartDropValueInput = ({val, setVal, ...props}) => {
    let funcArray = [
        {name: "-10", func: () => {setVal(+val-10)}},
        {name: "-5", func: () => {setVal(+val-5)}},
        {name: "-1", func: () => {setVal(+val-1)}},
        {name: "+1", func: () => {setVal(+val+1)}},
        {name: "+5", func: () => {setVal(+val+5)}},
        {name: "+10", func: () => {setVal(+val+10)}},
    ];

    return (
        <DropValueInput val={val} setVal={setVal} funcArray={funcArray} {...props}/>
    );
};

export default StandartDropValueInput;