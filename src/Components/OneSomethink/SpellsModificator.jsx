import React from 'react';
import "./SpellsModificator.css"

const SpellsModificator = ({zagovors, bonusCost, bonusDifficulty, effect}) => {
    return (
        <div className={"spells-modificator"}>
            <div className={"spells-modificator-main"}>
                <div className={"bold-red-text"}>
                    Заговоры: {zagovors}
                </div>
                <div className={"bold-red-text"}>
                    Дополнительная стоимость: {bonusCost} маны
                </div>
                <div className={"bold-red-text"}>
                    Дополнительная сложность: {bonusDifficulty}
                </div>
                <div className={"bold-red-text"}>
                    {effect}
                </div>
            </div>
        </div>
    );
};

export default SpellsModificator;