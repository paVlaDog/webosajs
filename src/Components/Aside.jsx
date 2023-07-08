import React from 'react';
import IncDecInput from "../UI/IncDecInput";
import "./Aside.css"
import SimpleInput from "../UI/SimpleInput";
import StandartDropValueInput from "../UI/StandartDropValueInput";
import Loader from "./Loader";

const Aside = ({charList, evalList}) => {
    return (
        <div className={"middle-aside"}>
            <div className={"aside-information-block"}>
                <header className={"char-name"}>
                    <p>Имя:</p>
                    <SimpleInput className={"simple-input"} placeholder={"Потерявший имя"} value={charList.charName.value[0]} onChange={(e) => {charList.charName.setValue(0)(e.target.value)}}/>
                </header>
                <main>
                    <div className={"stats-with-field"}>
                        <div className={"big-bold-red-text"}>Мощь:</div>
                        <IncDecInput val={charList.power.value[0]} setVal={charList.power.setValue(0)}/>
                    </div>
                    <div className={"stats-with-field"}>
                        <div className={"big-bold-red-text"}>Хиты:</div>
                        <StandartDropValueInput val={charList.curHits.value[0]} setVal={charList.curHits.setValue(0)} style={{width: "3rem"}}/>
                        <div className={"big-bold-red-text"}>из</div>
                        <SimpleInput val={evalList.maxHits} setVal={() => {}} disabled={true} style={{width: "3rem"}}/>
                    </div>
                    <div className={"stats-with-field"}>
                        <div className={"big-bold-red-text"}>Мана:</div>
                        <StandartDropValueInput val={charList.curMane.value[0]} setVal={charList.curMane.setValue(0)} style={{width: "3rem"}}/>
                        <div className={"big-bold-red-text"}>из</div>
                        <SimpleInput val={evalList.maxMane} setVal={() => {}} disabled={true} style={{width: "3rem"}}/>
                    </div>
                    <div className={"stats-with-field"}>
                        <div className={"big-bold-red-text"}>Вдохновения:</div>
                        <IncDecInput val={charList.inspiration.value[0]} setVal={charList.inspiration.setValue(0)}/>
                    </div>
                    <div className={"stats-with-field"}>
                        <div className={"big-bold-red-text"}>Очки умений:</div>
                        <SimpleInput val={evalList.skillPoint} setVal={() => {}} disabled={true} style={{width: "3rem"}}/>
                    </div>
                    <div className={"stats-with-field"}>
                        <div className={"big-bold-red-text"}>Монеты:</div>
                        <StandartDropValueInput val={charList.money.value[0]} setVal={charList.money.setValue(0)} style={{width: "3rem"}}/>
                    </div>
                    <div className={"save-load-reset-block"}>
                        <div className={"bold-red-text"}>Загрузка и сохранение:</div>
                        <Loader charList={charList}/>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Aside;