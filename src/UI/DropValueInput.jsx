import React from 'react';
import SimpleInput from "./SimpleInput";
import {useState} from "react";
import "./DropValueInput.css";
import "./SimpleButton.css";

const DropValueInput = ({val, setVal, funcArray, ...props}) => {
    const [isActive, setActive] = useState(false);

    return (
        <div className={"drop-value-input simple-button"}>
            <div className={"stats-with-field"}>
                <button onClick={() => setActive(!isActive)}
                        style={{borderBottomRightRadius: "0", borderBottomLeftRadius: "0"}}>
                    {isActive ? <p>&#9650;</p> : <p>&#9660;</p>}
                </button>
                <SimpleInput val={val} setVal={setVal} {...props}/>
            </div>
            {isActive &&
                <div className={"button-list"}>
                    {funcArray.map((el) => {
                        return <button onClick={() => el.func()}>
                            {el.name}
                        </button>
                    })}
                </div>}
        </div>
    );
};

export default DropValueInput;