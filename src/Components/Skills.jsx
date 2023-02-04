import React from 'react';
import SimpleTextarea from "../UI/SimpleTextarea";
import IncDecInput from "../UI/IncDecInput";

const Skills = ({charList}) => {
    return (
        <div>
            <div className={"big-bold-red-text"}>Раса:</div>
            <SimpleTextarea
                value = {charList.charRase.value[0]}
                onChange={(e) => {charList.charRase.setValue(0)(e.target.value)}}
                placeholder={"Видимо, человек"}/>

            <div className={"big-bold-red-text"}>Класс:</div>
            <SimpleTextarea
                value = {charList.charClass.value[0]}
                onChange={(e) => {charList.charClass.setValue(0)(e.target.value)}}
                placeholder={"Видимо, воин"}/>

            <div className={"big-bold-red-text"}>Дополнительные умения:</div>
            <div className={"stats-with-field"}>
                <div className={"bold-red-text"}>Потрачено очков умений:</div>
                <IncDecInput val={charList.sendSkillPoints.value[0]} setVal={charList.sendSkillPoints.setValue(0)}/>
            </div>
            <SimpleTextarea
                value = {charList.skills.value[0]}
                onChange={(e) => {charList.skills.setValue(0)(e.target.value)}}
                placeholder={"Нулевой скилл"}/>



            <div className={"big-bold-red-text"}>Ранения:</div>
            <SimpleTextarea
                value = {charList.wounds.value[0]}
                onChange={(e) => {charList.wounds.setValue(0)(e.target.value)}}
                placeholder={"Ты ранен, но в душе"}/>
        </div>
    );
};

export default Skills;