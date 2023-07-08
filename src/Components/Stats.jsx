import React from 'react';
import OneHark from "./OneHark";
import OneNavik from "./OneNavik";
import "./Stats.css";
import Accordion from "../UI/Accordion";
import StatsWithSimpleInput from "./StatsWithSimpleInput";
import IncDecInput from "../UI/IncDecInput";
import IncDecInputWithWords from "../UI/IncDecInputWithWords";
import SimpleInput from "../UI/SimpleInput";
import StandartDropValueInput from "../UI/StandartDropValueInput";
import DoubleIncDecInput from "../UI/DoubleIncDecInput";
import StatsWithDoubleIncDecInput from "../UI/StatsWithDoubleIncDecInput";
import PopUpTip from "../UI/PopUpTip";

const harksName = ["Сила", "Телосложение", "Ловкость", "Интеллект", "Мудрость", "Харизма"];

const harksTips = [
    "- Сила определяет телесную мощь, атлетичность и ваши физические возможности. Обычно вы будете использовать силу что бы подниматься, прыгать, плавать, выбивать двери, поднимать ворота и разрывать оковы. Также, она необходима для ближнего боя и использования метательного оружия. Бойцы, фехтовальщики и другие воиныближнего боя предпочитают высокие показатели силы.  \n" +
    "- Вы добавляете СИЛ к вашим броскам атаки в ближнем бою. Также вы можете прибалять его вместо Ловкости к атакам дальнего боя, если используете метательное оружие.\n" +
    "- Грузоподёмность героя: 3 + СИЛ\n" +
    "- Вы прибавляете силу к проверкам Атлетики",
    "- Телосложение определяет ваше здоровье и крепкость. Чаще всего вы будете использовать Телосложение чтобы задерживать дыхание, совершать долгие походы, выполнять напряженную деятельность. Все персонажи получают выгоду от большого телосложения.\n" +
    "- Телосложение влияет на ваш ЖСИ, от которого зависит максимальное ХП и лечение на привале и отдыхе.\n" +
    "- Вы прибавляете телосложение к проверкам Выносливости.",
    "- Ловкость определяет вашу физическую гибкость, рефлексы и баланс. Обычно вы используете ловкость для выполнения акробатических действий, таких как удержание баланса при перемещении по опасной поверхности, искривление вашего тела при перемещении в узких пространствах, поражение врага метательным снарядом или освобождение из пут. Высокая ловкость свойственна персонажам, которые хотят уклоняться от вражеских атак, уметь сражаться дальнобойным или фехтовальным оружием, уметь действовать скрытно или использовать ловкость своих рук для достижения цели.\n" +
    "- Вы добавляете ваш модификатор ловкость к броскам атаки, когда вы используете дальнобойное оружие, а также можете добавить вместо Силы, если используете фехтовальное оружие.\n" +
    "- Вы получаете +ЛОВ к КФЗ(Класс физической защиты), что позволит вам лучше защищаться от физических атак.\n" +
    "- Вы прибавляете ловкость к проверкам Акробатики, Ловкости рук и Незаметности.",
    "- Интеллект описывает ваше психическое видение мира, ваше образование, способность к выявлению причинно-следственных связей, память и использование логики для преодоления проблем и осложнений. Обычно вы используете интеллект для запоминания важных фактов, нахождения ключей к головоломкам или попыток разобраться в новой науке. Персонажи, которые хотят иметь высокий уровень знаний, а также заклинатели вроде волшебников и ведьм жаждут высокие показатели интелекта.\n" +
    "- Вы получаете +ИНТ к кол-ву известных заклинаний.\n" +
    "- Вы можете дополнительно изучить ИНТ владений.\n" +
    "- Вы можете оставить до ИНТ очков владений непотраченными. Это называется \"Отложенные владения\" или \"Свободные владения\".\n" +
    "- Вы прибавляете интеллект к проверкам Анализа, Естественных наук и Социальных наук.",
    "- Мудрость отражает то, как вы приспособлены к своему окружению, представляет общую восприимчивость, интуицию, понимание и другие менее осязаемые чувства. Так же мудрость важна для интуитивного понимания магии, что позволяет легче и чаще её использовать. Хотя мудрость является важным атрибутом для любого персонажа, который хочет быть внимательным, мудрость является особенно важной для магов, ведь напрямую влияет на их силы.\n" +
    "- Мудрость увеличивает ваш МСИ, что влияет на кол-во маны и её регенерацию на привале и отдыхе.\n" +
    "- Мудрость прибавляется к вашим броскам каста заклинаний.\n" +
    "- Максимальное количество известных вам манёвров: 5 + 2*МДР\n" +
    "- Вы прибавляете ловкость к проверкам Бдительности, Внимательности, Выживания, Медицины, Ухода за животными и Чувства магии.",
    "- Харизма определяет вашу способность влиять на других и прочность вашей личности. Высокая харизма дает сильное чувство мотива, в то время как низкая харизма указывает на нестабильную личность. Харизма так же определяет насколько хорошим лидером вы можете быть, отражает вашу силы воли и силу веры. Все персонажи получают пользу от высокой харизмы, особенно те, кому часто приходится использовать свои социальные навыки. Так же, прочность вашего разума и души защищает вас от магических потоков, увеличивая защиту от заклинаний.\n" +
    "- Вы получаете +ХАР к своему КМЗ.\n" +
    "- Вы будете использовать Харизму для различных Влияний, а также при защите от попыток повлиять на ваш разум.\n" +
    "- Вы прибавляете ловкость к проверкам Воли, Веры, Выступления, Запугивания, Обмана и Убеждения.\n"
]

const naviksName = [
    "Атлетика",
    "Выносливость",
    "Акробатика",
    "Ловкость рук",
    "Незаметность",
    "Анализ",
    "Естественные науки",
    "Социальные науки",
    "Бдительность",
    "Внимательность",
    "Выживание",
    "Медицина",
    "Уход за животными",
    "Чувство магии",
    "Вера",
    "Воля",
    "Выступление",
    "Запугивание",
    "Обман",
    "Убеждение"
]

const naviksTips = [
    "Уровень атлетики отражает ваше умение бегать, применять физическую силу, карабкаться и бороться.",
    "Уровень выносливости отражает живучесть вашего организма - сопротивление болезням и ядам, переносимость тяжёлых условий и длительных физических упражнений.",
    "Уровень акробатики отражает ваше умение прыгать, выполнять акробатические приёмы, удачно приземляться и применять свою гибкость.",
    "Уровень ловкости рук отражает ваше умение выскрывать замки, шулерить, совершать карманные кражи и занятия, использующие мелкую моторику.",
    "Уровень незаметности отражает ваше умение скрытно пробираться куда-либо.",
    "Уровень анализа отражает ваше умение анализировать данные, разгадывать головоломки, быстро вникать в научные труды и продумывать сложные планы.",
    "Уровень эрудиции в социальных науках отражает ваши знания в любых науках об обществе - истории, теологии, искусстве, знании этикета высшего света и принципов выходцов из низов, геральдике, политической географии и прочих.",
    "Уровень эрудиции в естественных науках отражает ваши знания в любых науках не связанных с обществом - точных науках, науках о природе, науках о магии, науках о технологиях и науках о иных измерениях (планах).",
    "Уровень бдительности отражает ваше умение быстро реагировать на опасность и чувствовать ложь в словах. Ваш бросок инициативы равен броску бдительности, если ваши умения не говорят обратное.",
    "Уровень внимательности отражает ваше умение находить нужные вещи и подмечать любые детали. Внимательность работает в спокойных ситуациях, в отличии от бдительности, проверки который вы кидаете в случаях, где реагировать нужно быстро.",
    "Уровень выживания отражает ваше умение выживать в дикой природе, охотиться и собирать полезные травы и коренья и ориентироваться на любой местности.",
    "Уровень медицины отражает ваше умение лечить себя и других.",
    "Уровень ухода за животными отражает ваше умение заботиться о животных, управлять скакунами, приручать и дрессировать зверей, а также понимать животных.",
    "Уровень чувства магии отражает ваше интуитивное понимание магических искусств, умение управлять ими и чувствовать изменение ветров. Также, количество известных вам школ магии равно вашему уровню владения данным навыком.",
    "Уровень воли отражает вашу силу воли, умение игнорировать боль и не поддаваться искушениям, а также сопротивление попыткам контроля разума.",
    "Уровень веры отражает силу вашей приверженности богу, и, как следствие, благосклонность богов к вашей персоне.",
    "Уровень выступления отражает ваше умение хорошо держаться на публике, убеждать, смешить или заставлять грустить толпу и произносить вдохновляющие речи.",
    "Уровень запугивания отражает ваше умение заставлять других подчиняться вашим приказам путём угроз.",
    "Уровень обмана отражает ваше умение лгать или притворяться.",
    "Уровень убеждение отражает ваше умение вести диалоги и убеждать или вызывать эмоции у конкретного существа. Основная разница между выступлением и убеждением - первое работает на толпу, второе - про индивидуальный подход."
]



const vladeniaHTip = [
    "Во владения входят умения использовать определённые виды оружия и доспехов, умения использовать различные иструменты, знания, языки, владения определёнными школами магии и специфические навыки.  \n" +
    "Все владения зависят от характеристик или навыков. Владение позволяет вам использовать данный навык без помехи (Если вы носите доспех, которым не владеете, то получаете помеху на любые действия в этом доспехе).  \n" +
    "Со старта у вас 5+ИНТ владений.\n" +
    "При выборе владений вы можете отложить часть очков прокачки \"на потом\". Такие очки называются \"отложенными\" или \"свободными\", их максимальное кол-во зависит от ИНТ.  \n" +
    "У оружейных и мистических владеий есть уровни прокачки.  \n" +
    "При использовании какого-либо владения вы совершаете проверку атрибута, указанного в скобках.  \n" +
    "У некоторых владений может быть несколько вариантов использования(Например, набор фокусника можно использовать и от выступления, и от Ловкости рук, в зависимости от того, что вы делаете).  "]

const vladeniaName = [
    [
    "Использование парного рукопашного оружия (Сила)",
    "Использование двуручного рукопашного оружия (Сила)",
    "Использование простого рукопашного оружия (Сила)",
    "Использование фехтовального оружия (Ловкость)",
    "Использование луков и арбалетов (Ловкость)",
    "Использование универсального, притягивающего и нестандартного дальнобойного оружия (Ловкость)"
    ],
    [
    "Использование лёгких доспехов (Ловкость)",
    "Испольование средних доспехов (Телосложение)",
    "Использование тяжёлых доспехов (Сила)",
    "Использование щитов (Сила)"
    ],
    [
    "Магия Водоворота душ(Мудрость)",
    "Магия Потоков первородной магии (Мудрость)",
    "Магия Вечных пустошей (Мудрость)",
    "Магия Великого урагана (Мудрость)",
    "Магия Солнечного горнила (Мудрость)",
    "Магия Сияния (Мудрость)",
    "Магия Грани реальности (Мудрость)"
    ],
    [
    "Взлом/владение отмычками (Ловкость рук(Ловкость))",
    "Владение ловушками (Ловкость рук(Ловкость))",
    "Владение играми (Анализ/Ловкость рук(Ловкость))",
    "Карманные кражи (Ловкость рук(Ловкость))",
    "Владение инструментами плотника (Ловкость)",
    "Владение инструментами ювелира (Ловкость)",
    "Владение инструментами гончара (Ловкость)",
    "Владение инструментами ткача (Ловкость)",
    "Владение инструментами пивовара (Мудрость)",
    "Владение инструментами кузнеца (Атлетика(Сила))",
    "Владение музыкальными инструментами (Харизма/Интелект)",
    "Владение набором фокусника (Выступление/Лоавкость рук(Ловкость))",
    "Владение набором артиста(включая грим) (Харизма)"
    ],
    [
    "Знание улиц (Социальные науки(Интелект))",
    "Знание высшего света (Социальные науки(Интелект))",
    "Знание искусства (Социальные науки(Интелект))",
    "Знание географии (Социальные науки(Интелект))",
    "Знание истории (Социальные науки(Интелект))",
    "Знание теологии (Социальные науки(Интелект))",
    "Знание технологий (Естественные науки(Интелект))",
    "Знаний магических наук (Естественные науки(Интелект))",
    "Знание точных наук (Естественные науки(Интелект))",
    "Знание природы (Естественные науки(Интелект))",
    "Знание планов (Естественные науки(Интелект))"
    ],
    [
    "Знание общего языка (Харизма/Социальные науки(Интелект))",
    "Знание человеческого языка (Харизма/Социальные науки(Интелект))",
    "Знание языка Диких (Харизма/Социальные науки(Интелект))",
    "Знание говора Морозных земель (Харизма/Социальные науки(Интелект))",
    "Знание рыков Гноллов (Харизма/Социальные науки(Интелект))",
    "Знание языка Ракшасс (Харизма/Социальные науки(Интелект))",
    "Знание языка Арахнид (Харизма/Социальные науки(Интелект))",
    "Знание языка Кобольдов (Харизма/Социальные науки(Интелект))",
    "Знание языка Капп (Харизма/Социальные науки(Интелект))",
    "Знание языка Сарангаев (Харизма/Социальные науки(Интелект))",
    "Знание змеинного наречия (Харизма/Социальные науки(Интелект))"
    ],
    [
    "Кулачный бой (Сила)",
    "Борьба (Атлетика(Сила))",
    "Травничество (Медицина(Мудрость))",
    "Мореходство (Мудрость/Интелект)"
    ]
]

function getVladeniaBlockInformation (evalList) {
    return [
        {
            name: "Оружейные",
            topInformation: <div className={"top-information"}>
                <div>Максимальный ранг - ученик при СИЛ/ЛОВ хотя бы +1, Адепт при СИЛ/ЛОВ хотя бы +6 и 45 мощи, Мастер
                    при СИЛ/ЛОВ хотя бы +8 и 60 мощи.
                </div>
                <div> Текущий максимальный ранг:
                    <SimpleInput disabled={true} val={evalList.maxWeaponsVladeniaRank} setVal={() => {}} disable={true} style={{width: "6rem"}}/>
                </div>
                <div>На максимальное кол-во ограничения не накладываются</div>
            </div>,
            type: 0
        },
        {
            name: "Защитные",
            topInformation: <div className={"top-information"}>
                <div>При отсутвии владения вы получаете помеху на любые действия в этом типе доспехов</div>
            </div>,
            type: 1
        },
        {
            name: "Мистические",
            topInformation: <div className={"top-information"}>
                <div>Максимальный ранг - ученик при МДР хотя бы +1, Адепт при МДР хотя бы +6 и 45 мощи, Мастер при МДР
                    хотя бы +8 и 60 мощи.</div>
                <div>Текущий максимальный ранг:
                    <SimpleInput disabled={true} val={evalList.maxMisticVladeniaRank} setVal={() => {}} disable={true} style={{width: "6rem"}}/>
                </div>
                <div>Максимальное кол-во школ = уровню навыка Чувство магии.
                    Текущее: <SimpleInput disabled={true} val={evalList.maxMagicSchoolCount} setVal={() => {}} disable={true} style={{width: "2rem"}}/>
                </div>
            </div>,
            type: 2
        },
        {
            name: "Плутовские и владения инструментами",
            topInformation: <div className={"top-information"}>
            </div>,
            type: 0
        },
        {
            name: "Знания",
            topInformation: <div className={"top-information"}>
            </div>,
            type: 0
        },
        {
            name: "Языки",
            topInformation: <div className={"top-information"}>
            </div>,
            type: 0
        },
        {
            name: "Прочее",
            topInformation: <div className={"top-information"}>
            </div>,
            type: 0
        },
    ]
}

const vladeniaMapArray = [
    new Map([
        [0, 'Отсутствие'],
        [1, 'Ученик'],
        [2, 'Ветеран'],
        [3, 'Мастер']
    ]),
    new Map([
        [0, 'Отсутствие'],
        [1, 'Владение'],
    ]),
    new Map([
        [0, 'Отсутствие'],
        [1, 'Ученик'],
        [2, 'Адепт'],
        [3, 'Мастер']
    ]),
]

const Stats = ({charList, evalList}) => {
    let harksAndNaviksElement = [];
    let vladeniaElement = [];
    let vladeniaBlockInformation = getVladeniaBlockInformation(evalList);

    function getNaviksEl(begin, len) {
        let naviksContainer = [];
        for (let i=begin; i < begin + len; i++) {
            naviksContainer.push(
                <OneNavik key={"navik" + i} name={naviksName[i]} val={charList.naviks.value[i]}
                              setVal={charList.naviks.setValue(i)} tipText={naviksTips[i]}></OneNavik>
            )
        }
        return naviksContainer;
    }

    for (let i=0; i < harksName.length; i++) {
        harksAndNaviksElement.push(
            <div className={"harks-and-naviks-block"}>
                <OneHark key={"harks" + i}
                         name={harksName[i]}
                         val={charList.harks.value[i]}
                         setVal={charList.harks.setValue(i)}
                         tipText={harksTips[i]}></OneHark>
                {i < 2 ? getNaviksEl(i, 1) :
                    i < 4 ? getNaviksEl(i + (i - 2) * 2, 3) :
                    getNaviksEl(i + 4 + (i - 4) * 5, 6) }
            </div>
        )
    }

    function getVladeniaShift(index) {
        let shift = 0;
        for (let i=0; i < index; i++) {
            shift += vladeniaName[i].length;
        }
        return shift;
    }

    function getVladeniaElement(index, type) {
        let vladeniaInBlockContainer = [];
        for (let j=0; j < vladeniaName[index].length; j++) {
            vladeniaInBlockContainer.push(
                <div className={"stats-with-field"}>
                    <div className={"bold-red-text"}>{vladeniaName[index][j] + ":"}</div>
                    <IncDecInputWithWords key={"vladenia" + index + "-" + j}
                                          val={charList.vladenia.value[getVladeniaShift(index) + j]}
                                          setVal={charList.vladenia.setValue(getVladeniaShift(index) + j)}
                                          mapArray={vladeniaMapArray[type]}
                                          style={{width: "6rem"}}
                    />
                </div>
            )
        }
        return vladeniaInBlockContainer;
    }



    for (let i=0; i < vladeniaName.length; i++) {
        vladeniaElement.push(<Accordion title={vladeniaBlockInformation[i].name} content={
            <div>
                <div className={"bold-red-text vladenia-block-information"} >{vladeniaBlockInformation[i].topInformation}</div>
                <div>{getVladeniaElement(i, vladeniaBlockInformation[i].type)}</div>
            </div>
        }/>)
    }

    function boneInputCreate (val, setVal) {
        return <div className={"bone-input"}>
            <IncDecInput val={
                val === 0 || val === "0" ? 0 :
                val < 4 ? "1к4-" + (4 - val) / 2 :
                val < 12 ? "1к" + val : "1к12+" + (val - 12) / 2
            } setVal={setVal} decFunc={() => setVal(val <= 2 ? 0 : +val - 2)} incFunc={() => setVal(+val + 2)}/></div>
    }

    return (
        <div>
            <div className={"harks-and-naviks-blocks"}>
                {harksAndNaviksElement}
            </div>
            <div className={"vladenia"}>
                <PopUpTip text={vladeniaHTip[0]}>
                    <p className={"big-bold-red-text"}>Владения:</p>
                </PopUpTip>
                <StatsWithDoubleIncDecInput name={"Очки владений"} changeVal={charList.addVladeniaPoint.value[0]} noChangeVal={evalList.vladeniaPoint} setVal={charList.addVladeniaPoint.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Максимум отложенных владений"} changeVal={charList.addDelayedVladeniaPoint.value[0]} noChangeVal={evalList.delayedVladeniaPoint} setVal={charList.addDelayedVladeniaPoint.setValue(0)}/>
                {vladeniaElement}
            </div>
            <div className={"other-stats"}>
                <div className={"big-bold-red-text"}>Прочие характеристики:</div>
                <div className={"stats-with-field"}>
                    <label className={"bold-red-text"}>{"Кость хитов" + ":"}</label>
                    {boneInputCreate(charList.boneHits.value[0], charList.boneHits.setValue(0))}
                </div>
                <div className={"stats-with-field"}>
                    <label className={"bold-red-text"}>{"Кость маны" + ":"}</label>
                    {boneInputCreate(charList.boneMane.value[0], charList.boneMane.setValue(0))}
                </div>
                <StatsWithDoubleIncDecInput name={"Максимум хитов"} changeVal={charList.addMaxHits.value[0]} noChangeVal={evalList.maxHits} setVal={charList.addMaxHits.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Максимум маны"} changeVal={charList.addMaxMane.value[0]} noChangeVal={evalList.maxMane} setVal={charList.addMaxMane.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Жизненные силы (ЖСИ)"} changeVal={charList.addGSI.value[0]} noChangeVal={evalList.GSI} setVal={charList.addGSI.setValue(0)} style={{width: "4rem"}}/>
                <StatsWithDoubleIncDecInput name={"Магические силы (МСИ)"} changeVal={charList.addMSI.value[0]} noChangeVal={evalList.MSI} setVal={charList.addMSI.setValue(0)} style={{width: "4rem"}}/>
                <StatsWithDoubleIncDecInput name={"Класс физической защиты (КФЗ)"} changeVal={charList.addKFZ.value[0]} noChangeVal={evalList.KFZ} setVal={charList.addKFZ.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Класс магической защиты (КМЗ)"} changeVal={charList.addKMZ.value[0]} noChangeVal={evalList.KMZ} setVal={charList.addKMZ.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Восстановление хитов на отдыхе"} changeVal={charList.addRestHitsHeal.value[0]} noChangeVal={evalList.restHitsHeal} setVal={charList.addRestHitsHeal.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Восстановление маны на отдыхе"} changeVal={charList.addRestManeHeal.value[0]} noChangeVal={evalList.restManeHeal} setVal={charList.addRestManeHeal.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Восстановление хитов на привале"} changeVal={charList.addHaltHitsHeal.value[0]} noChangeVal={evalList.haltHitsHeal} setVal={charList.addHaltHitsHeal.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Восстановление маны на привале"} changeVal={charList.addHaltManeHeal.value[0]} noChangeVal={evalList.haltManeHeal} setVal={charList.addHaltManeHeal.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Очки манёвров"} changeVal={charList.addCountManeuver.value[0]} noChangeVal={evalList.countManeuver} setVal={charList.addCountManeuver.setValue(0)}/>
                <StatsWithDoubleIncDecInput name={"Скорость передвижения"} changeVal={charList.addMS.value[0]} noChangeVal={evalList.MS} setVal={charList.addMS.setValue(0)}/>
                <div className={"stats-with-field"}>
                    <div className={"bold-red-text"}>Дополнительные очки навыков:</div>
                    <IncDecInput val={charList.addSkillPoints.value[0]} setVal={charList.addSkillPoints.setValue(0)}/>
                </div>

                {/*<StatsWithSimpleInput name={"Увеличения максимума хитов"} val={charList.addMaxHits.value[0]} setVal={charList.addMaxHits.setValue(0)} style={{width: "3rem"}}/>*/}
                {/*<StatsWithSimpleInput name={"Увеличения максимума маны"} val={charList.addMaxMane.value[0]} setVal={charList.addMaxMane.setValue(0)} style={{width: "3rem"}}/>*/}
                {/*<StatsWithSimpleInput name={"Жизненные силы (ЖСИ)"} val={evalList.GSI} setVal={() => {}} style={{width: "5rem"}} disable={true}/>*/}
                {/*<StatsWithSimpleInput name={"Магические силы (МСИ)"} val={evalList.MSI} setVal={() => {}} style={{width: "5rem"}} disable={true}/>*/}
                {/*<StatsWithSimpleInput name={"Класс физической защиты (КФЗ)"} val={evalList.KFZ} setVal={() => {}} style={{width: "3rem"}} disable={true}/>*/}
                {/*<StatsWithSimpleInput name={"Класс магической защиты (КМЗ)"} val={evalList.KMZ} setVal={() => {}} style={{width: "3rem"}} disable={true}/>*/}
                {/*<StatsWithSimpleInput name={"Восстановление хитов на отдыхе"} val={evalList.restHitsHeal} setVal={() => {}} style={{width: "3rem"}} disable={true}/>*/}
                {/*<StatsWithSimpleInput name={"Восстановление маны на отдыхе"} val={evalList.restManeHeal} setVal={() => {}} style={{width: "3rem"}} disable={true}/>*/}
                {/*<StatsWithSimpleInput name={"Восстановление хитов на привале"} val={evalList.haltHitsHeal} setVal={() => {}} style={{width: "3rem"}} disable={true}/>*/}
                {/*<StatsWithSimpleInput name={"Восстановление маны на привале"} val={evalList.haltManeHeal} setVal={() => {}} style={{width: "3rem"}} disable={true}/>*/}
            </div>
        </div>
    );
};

export default Stats;