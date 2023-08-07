import React from 'react';
import "./OneAbility.css"

const OneAbility = ({name, reload, effect, ...props}) => {
    return (
        <div className={"one-ability"} {...props}>
            <div className={"one-ability-header"}>
                <h5 className={"one-ability-name white-text"}>
                    {name}
                </h5>
            </div>
            <div className={"one-ability-main"}>
                <div className={"one-ability-reload bold-red-text"}>
                    Перезарядка: {reload}
                </div>
                <div className={"one-ability-effect bold-red-text"}>
                    {effect}
                </div>
            </div>
        </div>
    );
};

export default OneAbility;