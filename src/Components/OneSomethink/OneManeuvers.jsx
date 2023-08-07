import React from 'react';
import "./OneManeuvers.css"

const OneManeuvers = ({name, reload, effect, ...props}) => {
    return (
        <div className={"one-maneuvers"} {...props}>
            <div className={"one-maneuvers-header"}>
                <h5 className={"one-maneuvers-name white-text"}>
                    {name}
                </h5>
            </div>
            <div className={"one-maneuvers-main"}>
                <div className={"one-maneuvers-reload bold-red-text"}>
                    Перезарядка: {reload} ходов
                </div>
                <div className={"one-maneuvers-effect bold-red-text"}>
                    {effect}
                </div>
            </div>
        </div>
    );
};

export default OneManeuvers;