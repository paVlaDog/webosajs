import React, {useState} from 'react';
import SimpleButton from "../UI/SimpleButton";
import "./HeaderWithTipBlock.css"

const HeaderWithTipBlock = ({header, tip}) => {
    const [showTip, setShowTip] = useState(false);
    return (
        <div>
            <div className={"header-block"}>
                <div className={"header-red-text"}>{header}</div>
                <SimpleButton onClick={() => {setShowTip(!showTip)}}>?</SimpleButton>
            </div>
            <div className={"tip-block bold-red-text"}>
                {showTip && tip}
            </div>
        </div>

    );
};

export default HeaderWithTipBlock;