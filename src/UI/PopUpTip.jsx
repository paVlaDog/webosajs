import React, {ReactElement, useRef, useState} from 'react';
import './PopUpTip.css';
import SimpleButton from "./SimpleButton";

const PopUpTip = ({ children, text }) => {
    const refSetTimeout = useRef();
    const [showToolTip, setShowToolTip] = useState(false);
    const [showToolTip2, setShowToolTip2] = useState(false);

    const onMouseEnterHandler = () => {
        refSetTimeout.current = setTimeout(() => {
            setShowToolTip(true);
        }, 500)

    };

    const onMouseLeaveHandler = () => {
        clearTimeout(refSetTimeout.current);
        setShowToolTip(false);
    };

    const changeShowToolTip2 = () => {
        setShowToolTip2(!showToolTip2);
    }

    return (
        <div className={"container"} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            {children}
             <div className={"tooltip"}>
                 {(showToolTip || showToolTip2) &&
                     <div className={"toolTipText"}>
                        {text}
                         <SimpleButton className={"toolTipTextButton"} onClick={changeShowToolTip2}>
                             {!showToolTip2 ? "Закрепить" : "Открепить"}
                         </SimpleButton>
                    </div>
                 }
             </div>
        </div>
    );
};

export default PopUpTip;