import React from 'react';
import "./OneWound.css"

const OneWound = ({name, weight, effect, ...props}) => {
    return (
        <div className={"one-wound"} {...props}>
            <div className={"one-wound-header"}>
                <h5 className={"one-wound-name white-text"}>
                    {name}
                </h5>
            </div>
            <div className={"one-wound-main"}>
                <div className={"one-wound-weight bold-red-text"}>
                    Тяжесть: {weight}
                </div>
                <div className={"one-wound-effect bold-red-text"}>
                    {effect}
                </div>
            </div>
        </div>
    );
};

export default OneWound;