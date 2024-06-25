import React from 'react';
import "./OneRace.css"
import usefulFuncs from "../../UsefulFuncs";

const OneRace = ({name, description, stats, skills}) => {
    return (
        <div className={"one-race"}>
            <div className={"one-race-header"}>
                <h3 className={"white-text"}>
                    {name}
                </h3>
            </div>
            <div className={"one-race-main"}>
                <div className={"one-race-description bold-red-text"}>
                    {description}
                </div>
                <div className={"one-race-stats"}>
                    {usefulFuncs.strArrayToDivArray(stats)}
                </div>
                <div className={"one-race-skills bold-red-text"}>
                    {skills}
                </div>
            </div>
        </div>
    );
};

export default OneRace;