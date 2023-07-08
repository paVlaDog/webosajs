import React from 'react';
import SimpleTextarea from "../UI/SimpleTextarea";
import IncDecInput from "../UI/IncDecInput";
import Accordion from "../UI/Accordion";
import StatsWithDoubleIncDecInput from "../UI/StatsWithDoubleIncDecInput";

const Skills = ({charList, evalList}) => {
    return (
        <div>
            <Accordion title={"Раса"} content={
                <SimpleTextarea
                value = {charList.charRase.value[0]}
                onChange={(e) => {charList.charRase.setValue(0)(e.target.value)}}
                placeholder={"Видимо, человек"}/>
            }/>
            <Accordion title={"Класс"} content={
                <SimpleTextarea
                value = {charList.charClass.value[0]}
                onChange={(e) => {charList.charClass.setValue(0)(e.target.value)}}
                placeholder={"Видимо, воин"}/>
            }/>
            <Accordion title={"Дополнительные умения"} content={
                <div>
                    <div className={"stats-with-field"}>
                        <div className={"bold-red-text"}>Потрачено очков умений:</div>
                        <IncDecInput val={charList.sendSkillPoints.value[0]} setVal={charList.sendSkillPoints.setValue(0)}/>
                    </div>
                    <SimpleTextarea
                        value = {charList.skills.value[0]}
                        onChange={(e) => {charList.skills.setValue(0)(e.target.value)}}
                        placeholder={"Нулевой скилл"}/>
                </div>
            }/>
            <Accordion title={"Манёвры"} content={
                <div>
                    <div className={"stats-with-field"}>
                        <div className={"bold-red-text"}>Очки манёвров:</div>
                        <StatsWithDoubleIncDecInput name={"Очки манёвров"} changeVal={charList.addCountManeuver.value[0]} noChangeVal={evalList.countManeuver} setVal={charList.addCountManeuver.setValue(0)}/>
                    </div>
                    <SimpleTextarea
                        value = {charList.maneuvers.value[0]}
                        onChange={(e) => {charList.maneuvers.setValue(0)(e.target.value)}}
                        placeholder={"Манёвр не удался"}/>
                </div>
            }/>
            <Accordion title={"Способности"} content={
                <div>
                    <SimpleTextarea
                        value = {charList.ability.value[0]}
                        onChange={(e) => {charList.ability.setValue(0)(e.target.value)}}
                        placeholder={"(Не)Способный ученик"}/>
                </div>
            }/>
            <Accordion title={"Ранения"} content={
                <SimpleTextarea
                    value = {charList.wounds.value[0]}
                    onChange={(e) => {charList.wounds.setValue(0)(e.target.value)}}
                    placeholder={"Ты ранен, но в душе"}/>
            }/>
        </div>
    );
};

export default Skills;