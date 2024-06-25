import React from 'react';
import Sidebar from "../UI/Sidebar";
import OneSkill from "./OneSomethink/OneSkill";
import OneClass from "./OneSomethink/OneClass";

const skill1 = <OneSkill name={"Впечатляющая ловкость"} cost={3} needs={""} effects={"Максимальная Ловкость со старта для вас - 5, все максимальные значения Ловкости при определённом уровен мощи увеличиваются на 1. Вы получаете +1ЛОВ. Вы получаете владение навыком Акробатика."} />
const skill2 = <OneSkill name={"Перекат"} cost={2} needs={""} effects={"Вы получаете манёвр *Перекат*(1).*Перекат*(1) - Действием, перемещение на две клетки, во время этого перемещения вы не получаете провоцированные атаки."} />
const skill3 = <OneSkill name={"Тёмные души"} cost={2} needs={""} effects={"Вы можете использовать *Перекат* реакцией при атаке в ближнем бою по вам. Проверка Акробатики с добавочной сложностью +5, если значение выше атаки противника - противник промахивается, вы совершаете перекат. При провале - перекат не совершается, атака по вам автоматически успешна."} />

const el =  <OneClass name={"Ловкач"} description={"Наделенные невероятной ловкостью от природы, Ловкачи пользуются ей без зазрения совести, бла-бла-бла"}
                     skills={[skill1, skill2, skill3]}/>

const ClassSidebar = ({SSRCList}) => {
    return (
        <Sidebar buttonText={"Выбрать класс"} children={SSRCList.allClass.value}/>);
};

export default ClassSidebar;

