import React, {useState} from 'react';
import "./Accordion.css"

const Accordion = ({title, content}) => {
    const [isActive, setActive] = useState(false);

    return (
        <div className={"accordion-item"}>
            <div className={"accordion-title"} onClick={() => setActive(!isActive)}>
                <div>{title}</div>
                <div className={"left-sign"}>
                    {isActive ? <p>&#9650;</p> : <p>&#9660;</p>}
                </div>
            </div>
            {isActive && <div className={"accordion-content"}>{content}</div>}
        </div>
    );
};

export default Accordion;