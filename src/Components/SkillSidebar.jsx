import React from 'react';
import Sidebar from "../UI/Sidebar";
import OneSkill from "./OneSomethink/OneSkill";
import OneManeuvers from "./OneSomethink/OneManeuvers";
import OneAbility from "./OneSomethink/OneAbility";
import OneWound from "./OneSomethink/OneWound";
import OneVliania from "./OneSomethink/OneVliania";
import UsefulFuncs from "../UsefulFuncs";

const skill =  <OneSkill style={{width: "25rem"}} name={"Быт кочевников"} cost={2} needs={"Ловкость > 3"} effects={"Вы получаете навык Мудрости(кроме Чувства магии) или Харизмы и компетентность на этот навык(игнорируя ограничение на уровень). Вы получаете дополнительный язык. Вы получаете +2 к проверкам Выживания на поверхности."} />
const maneuver = <OneManeuvers style={{width: "25rem"}} name={"Шаг"} reload={1} effect={"1 действие, вы совершаете перемещение на 1 клетку не получая провоцированных атак."}/>
const ability = <OneAbility style={{width: "25rem"}} name={"Всплеск действий"} reload={"Привал"} effect={"Вы можете использовать эту способность, чтобы получить дополнительные 2 действия. Можно использовать не чаще одного раза в бой. 2 заряда."}/>
const vliania = <OneVliania style={{width: "25rem"}} name={"Бегите, глупцы"}
                            predescription={"4 противника(не из паствы), проверка выступления, 2 действия, 1р/бой"}
                            boundEffect1={15}
                            boundEffect2={25}
                            effect1={"страх(спас 15), 3 хода"}
                            effect2={"страх(спас 25), 5 ходов"}/>
const wound = <OneWound style={{width: "25rem"}} name={"Нога, больно!"} weight={"Легкое"} effect={"-1 МС, -5 к максимуму хитов"}/>

const skillsMapToHTML = (skillList) => {
    return skillList.map(arr => <OneSkill style={{width: "25rem"}} name={arr.name} cost={arr.cost} needs={arr.needs} tags={arr.tags} effects={arr.effects}/>)
}

const SkillSidebar = ({SSRCList}) => {
    return (
        <Sidebar buttonText={"Выбрать умения"} data={SSRCList.skills.value}
                 header={"Магазин умений"} toHtml={skillsMapToHTML}/>);
};

export default SkillSidebar;