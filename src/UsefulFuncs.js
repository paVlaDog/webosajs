// import React from "@types/react";

import OneSkill from "./Components/OneSomethink/OneSkill";
import OneRace from "./Components/OneSomethink/OneRace";

const usefulFuncs = {
    mapToDiv: (str) => {
        return str.split("\n").map((el) => {return <div className={"bold-red-text"}>{el}</div>})
    },
    strArrayToDivArray: (mas) => {
        return mas.map(el => <div className={"bold-red-text"}>{el}</div>)
    },
    findInSkillList: (skillList, str) => {
        return skillList.filter(skill => skill.name.indexOf(str) !== -1 || skill.cost.indexOf(str) !== -1 || skill.needs.indexOf(str) !== -1
            || skill.tags.indexOf(str) !== -1 || skill.effects.indexOf(str) !== -1)
    },
    findOnNameInSkillList: (skillList, str) => {
        const allElem = skillList.filter(skill => skill.name.indexOf(str) !== -1)
        if (allElem.length > 0) return allElem[0]
        else return "Ошибка"
    },
    skillsMapToHTML: (skillList) => {
        return skillList.map(arr => <OneSkill name={arr.name} cost={arr.cost} needs={arr.needs} tags={arr.tags} effects={arr.effects}/>)
    },
}

export default usefulFuncs