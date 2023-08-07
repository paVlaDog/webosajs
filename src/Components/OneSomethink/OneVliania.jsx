import React from 'react';
import "./OneVliania.css"

const OneVliania = ({name, predescription, boundEffect1, effect1, boundEffect2, effect2, ...props}) => {
    return (
        <div className={"one-vliania"} {...props}>
            <div className={"one-vliania-header"}>
                <h5 className={"one-vliania-name white-text"}>
                    {name}
                </h5>
            </div>
            <div className={"one-vliania-main"}>
                <div className={"one-vliania-predescription bold-red-text"}>
                    {predescription}
                </div>
                <div className={"one-vliania-effect-block bold-red-text"}>
                    <div className={"one-vliania-bound-effect bold-red-text"}>
                        {boundEffect1}
                    </div>
                    <div className={"one-vliania-effect bold-red-text"}>
                        {effect1}
                    </div>
                </div>
                <div className={"one-vliania-effect-block bold-red-text"}>
                    <div className={"one-vliania-bound-effect bold-red-text"}>
                        {boundEffect2}
                    </div>
                    <div className={"one-vliania-effect bold-red-text"}>
                        {effect2}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneVliania;