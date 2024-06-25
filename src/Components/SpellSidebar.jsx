import React from 'react';
import Sidebar from "../UI/Sidebar";
import OneSpell from "./OneSomethink/OneSpell";
import SpellsModificator from "./OneSomethink/SpellsModificator";
import Zagovor from "./OneSomethink/Zagovor";

const el1 =  <OneSpell name={"Охлаждение"} level={"Ученик"} rarity={"Распространенное"} type={"Заговор"}
                      effect={<Zagovor cost={4} difficulty={15} time={"2 действия"} focus={false} range={10} effect={"Вы можете прикосновением охладить какой-либо объект. Чем выше температура - тем проще охладить. Этого заклинания хватит, чтобы охладить кусок раскалённого металла или заморозить литр воды, не придавая особой формы. Получившийся лёд не крепкий, если вы сделаете ледяную дубинку, она расколется после первого удара, но успеет нанести урон."}/>} />
const el2 =  <OneSpell name={"Твёрдый лёд"} level={"Адепт"} rarity={"Редкое"} type={"Модификатор"}
                      effect={<SpellsModificator bonusCost={4} bonusDifficulty={5} zagovors={"Охлаждение"} effect={"Теперь заклинания хватит, чтобы охладить литр магмы до комнатной температуры или создать из воды простенький меч. Получившийся лёд достаточно твёрдый, чтобы сражаться и достаточно острый, чтобы иметь всего -1 урон в сравнении с оригиналом. Но, крайне быстро тупится и тает."}/>} />

const SpellSidebar = ({SSRCList}) => {
    return (
        <Sidebar buttonText={"Выбрать заклинания"} children={SSRCList.spells.value}/>);
};

export default SpellSidebar;