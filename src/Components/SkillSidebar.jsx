import React from 'react';
import Sidebar from "../UI/Sidebar";
import OneSkill from "./OneSomethink/OneSkill";
import OneManeuvers from "./OneSomethink/OneManeuvers";
import OneAbility from "./OneSomethink/OneAbility";
import OneWound from "./OneSomethink/OneWound";
import OneVliania from "./OneSomethink/OneVliania";

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


// "- **Бегите, глупцы!** - 4 противника(не из паствы), проверка выступления, 2 действия, 1р/бой\n" +
// "\t\t- (15+ - страх(спас 15), 3 хода)\n" +
// "\t\t- (25+ - страх(спас 25), 5 ходов)"

const SkillSidebar = () => {
    return (
        <Sidebar buttonText={"Выбрать скиллы"} children={[skill, maneuver, ability, vliania, wound]}/>);
};

export default SkillSidebar;