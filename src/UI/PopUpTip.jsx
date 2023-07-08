import React, {ReactElement, useRef, useState} from 'react';
import './PopUpTip.css';

const PopUpTip = ({ children, text }) => {
    const refSetTimeout = useRef();
    const [showToolTip, setShowToolTip] = useState(false);

    const onMouseEnterHandler = () => {
        refSetTimeout.current = setTimeout(() => {
            setShowToolTip(true);
        }, 500)

    };

    const onMouseLeaveHandler = () => {
        clearTimeout(refSetTimeout.current);
        setShowToolTip(false);
    };

    return (
        <div className={"container"} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            {children}
             <div className={"tooltip"}>
                 {showToolTip && <div className={"tooltiptext"}>{text}</div>}
             </div>
        </div>
    );
};

export default PopUpTip;