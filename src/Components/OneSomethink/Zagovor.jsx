import React from 'react';
import "./Zagovor.css"

const Zagovor = ({difficulty, cost, time, focus, range, effect}) => {
    return (
        <div className={"zagovor"}>
            <div className={"zagovor-main"}>
                <div className={"bold-red-text"}>
                    Сложность: {difficulty}
                </div>
                <div className={"bold-red-text"}>
                    Стоимость: {cost} маны
                </div>
                <div className={"bold-red-text"}>
                    Время: {time}
                </div>
                <div className={"bold-red-text"}>
                    Фокусировка: {focus ? "Да" : "Нет"}
                </div>
                <div className={"bold-red-text"}>
                    Дальность: {range}
                </div>
                <div className={"bold-red-text"}>
                    {effect}
                </div>
            </div>
        </div>
    );
};

export default Zagovor;