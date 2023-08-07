import React from 'react';
import "./OneSpell.css"

const OneSpell = ({name, level, rarity, type, effect}) => {
    return (
        <div className={"one-spell"}>
            <div className={"one-spell-header"}>
                <h3 className={"one-spell-name white-text"}>
                    {name}
                </h3>
            </div>
            <div className={"one-spell-main"}>
                <div>
                    <a className={"one-spell-level bold-red-text"}>{level}</a>
                    <a className={"one-spell-rarity bold-red-text"}>{rarity}</a>
                    <a className={"one-spell-type bold-red-text"}>{type}</a>
                </div>
                <div className={"one-spell-description bold-red-text"}>
                    {effect}
                </div>
            </div>

        </div>
    );
};

export default OneSpell;