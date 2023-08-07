import React from 'react';
import Sidebar from "../UI/Sidebar";
import OneRace from "./OneSomethink/OneRace";
import OneSkill from "./OneSomethink/OneSkill";

const skill1 = <OneSkill name={"Быт кочевников"} cost={2} needs={"Ловкость > 3"} effects={"Вы получаете навык Мудрости(кроме Чувства магии) или Харизмы и компетентность на этот навык(игнорируя ограничение на уровень). Вы получаете дополнительный язык. Вы получаете +2 к проверкам Выживания на поверхности."} />
const skill2 = <OneSkill name={"Реакция тигра"} cost={2} needs={"Ловкость > 3"} effects={"Вы получаете дополнительную реакцию. Вы можете использовать реакцию, чтобы получить +2КФЗ против атак ближнего боя."} />

const el =  <OneRace header={"Ракшасса"} description={
    "Ракшаса - мудрые и гордые странники, культура которых предписывает посетить как можно больше мест до 30 лет, накопить историй, а потом вернуться и осесть, рассказывая истории о далёких землях подрастающему поколению. Из всех рас у них самые напряжённые отношения с Каппами, которые уже не одно десятилетие хотят отхватить хотя бы кусочек Радебира и вечно разгорающийся с новой силой конфликт заставляет Ракшас отправляться на континет и с дипломатической миссией."
}
                     stats = {["Средний рост: **170-210см**",
                         "Средняя продолжительность жизни: **85 лет**",
                         "Места обитания: **Радебир**",
                         "Размер - **средний**",
                         "Скорость - **6**",
                         "Языки - **общий + язык Ракшасс** "]}
                     skills={[skill1, skill2]}/>


const RaceSidebar = () => {
    return (
        <Sidebar buttonText={"Выбрать расу"} children={[el, el, el]} header={"Выбор расы"}/>);
};

export default RaceSidebar;