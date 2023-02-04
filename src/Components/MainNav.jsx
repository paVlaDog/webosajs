import React from 'react';

let listLocation = [
    "stats",
    "equip",
    "skills",
    "spells",
    "history",
]

let nameLocation = [
    "Характеристики и навыки",
    "Экипировка",
    "Умения",
    "Заклинания",
    "История",
]

const MainNav = ({location, setLocation}) => {
    const listNavElements = [];

    for (let i=0; i < listLocation.length; i++) {
        listNavElements.push(
            <h4 onClick={() => {setLocation(listLocation[i])}} className={location === listLocation[i] ? "active" : "nonactive"}>{nameLocation[i]}</h4>
        )
    }

    return (
        <nav>
            {listNavElements}
        </nav>
    );
};

export default MainNav;