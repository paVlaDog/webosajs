import React from 'react';
import SimpleTextarea from "../UI/SimpleTextarea";
import IncDecInput from "../UI/IncDecInput";
import Accordion from "../UI/Accordion";
import StatsWithDoubleIncDecInput from "../UI/StatsWithDoubleIncDecInput";
import HeaderWithTipBlock from "./HeaderWithTipBlock";
import ButtonUnionTips from "../UI/ButtonUnionTips";
import RaceSidebar from "./RaceSidebar";
import SkillSidebar from "./SkillSidebar";
import ClassSidebar from "./ClassSidebar";

const Skills = ({charList, evalList, SSRCList}) => {
    const raceTip =
        <ButtonUnionTips count={2}
                         namesArray={["Раса", "Выбор расы"]}
                         tipsArray={
                             [
                                 <div>
                                     <div>
                                         В мире OSA есть множество рас, отличающиеся друг от друга внешним видом, местами обитания, менталитетом и даже количеством конечностей.
                                         Вам предстоит выбрать одну из них для своего персонажа.
                                     </div>
                                 </div>,
                                 <div>
                                     <div>
                                        Каждая раса представляет из себя набор из описания, нескольких фактов об этой расе (вроде срока жизни и мест обитания),
                                         а также набора из нескольких умений стоимостью в 4 очка.
                                     </div>
                                     <div>
                                         Выберете расу <a href={"https://github.com/paVlaDog/OSArpg/blob/main/Rase.md"}>в этом файле</a>,
                                         после чего скопируйте всю информацию в поле ниже, чтобы всегда иметь её под рукой.
                                         Если раса влияет на характеристики, навыки, владения или прочие параметры - поменяйте их и отметьте здесь, что поменяли.
                                     </div>
                                 </div>,
                             ]
                         }/>

    const classTip =
        <ButtonUnionTips count={2}
                         namesArray={["Класс", "Выбор класса"]}
                         tipsArray={
                             [
                                 <div>
                                     <div>
                                         В зависимости от того, чем вам персонаж занимался до того, как вступил на путь искателя приключений,
                                         он может принадлежать к одному из множества классов - от Воина или Охотника, до Пастора или Мага жизни.
                                         Вам предстоит выбрать, какие же способности получит ваш персонаж.
                                     </div>
                                 </div>,
                                 <div>
                                     <div>
                                         Каждый класс состоит из набора умений суммарной стоимостью в 7 очков умений и небольшого описания (когда-нибудь оно появится).
                                     </div>
                                     <div>
                                         Выберете класс <a href={"https://github.com/paVlaDog/OSArpg/blob/main/Class.md"}>в этом файле</a>,
                                         после чего скопируйте всю информацию в поле ниже, чтобы всегда иметь её под рукой.
                                         Если класс влияет на характеристики, навыки, владения или прочие параметры - поменяйте их и отметьте здесь, что поменяли.
                                     </div>
                                 </div>,
                             ]
                         }/>

    const skillsTip =
        <ButtonUnionTips count={2}
                         namesArray={["Умения", "Получение умений"]}
                         tipsArray={
                             [
                                 <div>
                                     <div>
                                         Умения - усиление вашего персонажа, которое может каким угодно способом поменять правила игры.
                                         Умения могут увеличить значения любых ваших параметров, добавить вам новые манёвры и способности,
                                         создать механики, отменить действующие на вас правила и ограничения и много всего другого.
                                     </div>
                                     <div>
                                         По мере развития своего персонажа, в зависимости от ваших действий Мастер будет предлагать вам для получения умения,
                                         которые лучше всего отражают занятия и натуру вашего персонажа.
                                     </div>
                                     <div>
                                         Постепенно, ваши действия будут отражаться механиках вашего персонажа.
                                         Возможно, вы получите не того персонажа, которого нужен вам, но того, кого заслуживаете.
                                     </div>
                                 </div>,
                                 <div>
                                     <div>
                                         По ходу игры мастер может обратить внимание, на ваши действия, и предложить вам умение, подходящее вашему персонажу.
                                         Так, например, если вы часто сражаетесь с парным оружием, мы можете получить "Димахера" или "Удар двойных клыков",
                                         а за ваши частые пламенные речи о своей вере - "Пастора" или "Проповедника".
                                     </div>
                                     <div>
                                         Как только мастер предложил вам умение, вы можете сразу поместить его в доступные умения, вместе с его стоимостью.
                                         Когда вы наберёте необходимое кол-во очков умений, вы сможете, потратив их, переместить умение в Полученные
                                         и пользоваться теми преимуществами, которые оно вам предоставляет.
                                         Список всех умений можно посмотреть <a href={"https://github.com/paVlaDog/OSArpg/blob/main/Skills.md"}>здесь</a>,
                                     </div>
                                 </div>,
                             ]
                         }/>

    const maneuverTip =
        <ButtonUnionTips count={2}
                         namesArray={["Манёвры", "Получение манёвров"]}
                         tipsArray={
                             [
                                 <div>
                                     <div>
                                         Манёвры - особый тип способностей, которые вы будете получать по ходу игры.
                                         Все они являются некоторыми боевыми действиями, которые доступны любому персонажу.
                                     </div>
                                     <div>
                                         Каждый манёвры состоит из названия, описания, перезарядки в ходах (указывается в скобочках после названия,
                                         0 - без перезарядки, 1 - можно использовать раз в ход, 2 - раз в 2 хода и т.д.) и описания.
                                     </div>
                                 </div>,
                                 <div>
                                     <div>
                                        Каждый раз, когда вы будете получать новый манёвр от способностей или бонусов класса/расы,
                                         вы обязаны добавить его в список манёвров.
                                     </div>
                                     <div>
                                         У вас есть максимум манёвров, который равен 5 + Мудрость.
                                         Если вы превысили максимум манёвров, то обязаны выбрать манёвры, которые станут вам недоступны,
                                         в размере разницы между текущим количеством манёвров и максимумом.
                                         Пометьте их как недоступные и не используйте их в игре.
                                         Вы можете менять список недоступных манёвров на отдыхе.
                                     </div>
                                 </div>,
                             ]
                         }/>

    const vlianiaTip =
        <ButtonUnionTips count={2}
                         namesArray={["Влияния", "Использование влияний"]}
                         tipsArray={
                             [
                                 <div>
                                     <div>
                                         Влияния - это способности, позволяющие вам воздействовать на других в бою, используя свои социальные навыки.
                                         Сюда входят всевозможные приказы, молитвы, бардовские песни и прочее.
                                     </div>
                                     <div>
                                         Как только вы получаете Влияние от какой-то способности - вы обязаны перенести его сюда.
                                     </div>
                                 </div>,
                                 <div>
                                     <div>
                                         Любое влияние состоит из названия, цели, названия хар-ки ил навыка, по которым необходимо будет проходить проверку,
                                         количества затрачиваемых действий, времени перезарядки и описания эффектов с значением, которое необходимо для активации этого эффекта.
                                     </div>
                                     <div>
                                         При использовании влияния вы совершаете проверку указанной хар-ки/навыка, выбираете самый сильный эффект, значение которого вы превосходите и используете.
                                         Так, если значения эффектов 15+ и 25+, то при броске 27 вы используете второй эффект, при броске 21 - первый, а при броске 9 не используете эффект вообще.
                                     </div>
                                 </div>,
                             ]
                         }/>

    const abilityTip =
        <ButtonUnionTips count={1}
                         namesArray={["Способности"]}
                         tipsArray={
                             [
                                 <div>
                                     <div>
                                         Способности - используемые действия, которые не являются манёврами, заклинаниями или влияниями.
                                         При получении новой способности от любого вашего умения - записывайте её сюда.
                                     </div>
                                 </div>,
                             ]
                         }/>

    const woundsTip =
        <ButtonUnionTips count={3}
                         namesArray={["Ранения", "Получение ранений", "Лечение ранений"]}
                         tipsArray={
                             [
                                 <div>
                                     <div>
                                         Ранения - дебаффы, которые вы получаете по ходу игры за травмирование своего персонажа или потерю им сознания.
                                     </div>
                                     <div>
                                         Ранения делятся на лёгкие и тяжёлые.
                                         Лёгкие приносят небольшие неудобства и довольно легко лечатся, в то время как тяжёлые могут сильно усложнить жизнь вашего персонажа.
                                     </div>
                                 </div>,
                                 <div>
                                     <div>
                                         При потере сознания (хиты опустились ниже нуля) вы получаете лёгкое ранение (точнее, вы получите его, когда очнётесь).
                                         Далее вы каждый ход кидаете спасброски от смерти, при выпадении 1-10 вы теряете 1/4 максимума хитов, при выпадении 11-19
                                         - лечитесь на 1/4 и можете больше не бросать спасброски, при выпадении 20 - исцеляетесь до 1/4 вашего максимума хитов
                                         и можете сразу продолжить бой.
                                     </div>
                                     <div>
                                         Если в какой-то момент потери сознания ваши хиты опустились ниже -1/2 от максимум - вместо лёгкого ранения вы получите тяжёлое.
                                         Ниже -1 от максимума - дополнительное лёгкое. Ниже -3/2 - дополнительное лёгкое заменяется тяжёлым.
                                         Ниже -2 от максимума - мгновенная смерть.
                                     </div>
                                     <div>
                                         Также, вы можете получить ранение и без потери сознания - например, угодив в ловушку или сломав себе ногу при падении.
                                     </div>
                                 </div>,
                                 <div>
                                     <div>
                                         Легкое ранение можно вылечить на привале при помощи подходящих лекарственных средств.
                                         Необходимо пройти проверку Медицины. Проверка облегчается на 5, если совершать её на отдыхе, а не на привале.
                                     </div>
                                     <div>
                                         Тяжёлое ранение можно вылечить только на отдыхе при помощи подходящих лекарственных средств. Необходимо пройти проверку Медицины.
                                         Если выпавшее значение не превышает сложность хотя бы на 10, то тяжёлое ранение перетекает в лёгкое, которое нельзя лечить в течении 1 дня.
                                     </div>
                                 </div>,
                             ]
                         }/>

    return (
        <div>
            <Accordion title={"Раса"} content={
                <div>
                    <HeaderWithTipBlock header={"Раса"} tip={raceTip}/>
                    <SimpleTextarea
                        value = {charList.charRase.value[0]}
                        onChange={(e) => {charList.charRase.setValue(0)(e.target.value)}}
                        placeholder={"Видимо, человек"}/>
                    <RaceSidebar SSRCList={SSRCList}/>
                </div>
            }/>
            <Accordion title={"Класс"} content={
                <div>
                    <HeaderWithTipBlock header={"Класс"} tip={classTip}/>
                    <SimpleTextarea
                        value = {charList.charClass.value[0]}
                        onChange={(e) => {charList.charClass.setValue(0)(e.target.value)}}
                        placeholder={"Видимо, воин"}/>
                    <ClassSidebar SSRCList={SSRCList}/>
                </div>
            }/>
            <Accordion title={"Дополнительные умения"} content={
                <div>
                    <HeaderWithTipBlock header={"Умения"} tip={skillsTip}/>
                    <div className={"stats-with-field"}>
                        <div className={"bold-red-text"}>Потрачено очков умений:</div>
                        <IncDecInput val={charList.sendSkillPoints.value[0]} setVal={charList.sendSkillPoints.setValue(0)}/>
                    </div>
                    <div className={"bold-red-text"}>Полученные умения:</div>
                    <SimpleTextarea
                        value = {charList.skills.value[0]}
                        onChange={(e) => {charList.skills.setValue(0)(e.target.value)}}
                        placeholder={"Нулевой скилл"}/>
                    <div className={"bold-red-text"}>Доступные умения:</div>
                    <SimpleTextarea
                        value = {charList.preAddSkills.value[0]}
                        onChange={(e) => {charList.preAddSkills.setValue(0)(e.target.value)}}
                        placeholder={"Бесперспективняк"}/>
                    <SkillSidebar SSRCList={SSRCList}/>
                </div>
            }/>
            <Accordion title={"Манёвры"} content={
                <div>
                    <HeaderWithTipBlock header={"Манёвры"} tip={maneuverTip}/>
                    <StatsWithDoubleIncDecInput name={"Максимум манёвров"} changeVal={charList.addCountManeuver.value[0]} noChangeVal={evalList.countManeuver} setVal={charList.addCountManeuver.setValue(0)} tipExist={false}/>
                    <SimpleTextarea
                        value = {charList.maneuvers.value[0]}
                        onChange={(e) => {charList.maneuvers.setValue(0)(e.target.value)}}
                        placeholder={"Манёвр не удался"}/>
                </div>
            }/>
            <Accordion title={"Влияния"} content={
                <div>
                    <HeaderWithTipBlock header={"Влияния"} tip={vlianiaTip}/>
                    <SimpleTextarea
                        value = {charList.vliania.value[0]}
                        onChange={(e) => {charList.vliania.setValue(0)(e.target.value)}}
                        placeholder={"(Не)Способный ученик"}/>
                </div>
            }/>
            <Accordion title={"Способности"} content={
                <div>
                    <HeaderWithTipBlock header={"Способности"} tip={abilityTip}/>
                    <SimpleTextarea
                        value = {charList.ability.value[0]}
                        onChange={(e) => {charList.ability.setValue(0)(e.target.value)}}
                        placeholder={"(Не)Способный ученик"}/>
                </div>
            }/>
            <Accordion title={"Ранения"} content={
                <div>
                    <HeaderWithTipBlock header={"Ранения"} tip={woundsTip}/>
                    <SimpleTextarea
                        value = {charList.wounds.value[0]}
                        onChange={(e) => {charList.wounds.setValue(0)(e.target.value)}}
                        placeholder={"Ты ранен, но в душе"}/>
                </div>
            }/>
        </div>
    );
};

export default Skills;