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

const harksName = ["Сила", "Телосложение", "Ловкость", "Интеллект", "Мудрость", "Харизма"];
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
                <div>0 - не имеется, 1 - ученик, 2 - ветеран, 3 - мастер</div>
                <div>Максимальный ранг - ученик при СИЛ/ЛОВ хотя бы +1, Адепт при СИЛ/ЛОВ хотя бы +6 и 45 мощи, Мастер
                    при СИЛ/ЛОВ хотя бы +8 и 60 мощи.
                    Текущий максимальный ранг: <SimpleInput val={evalList.maxWeaponsVladeniaRank} setVal={() => {}} disable={true} style={{width: "6rem"}}/>
                </div>
                <div>На максимальное кол-во ограничения не накладываются</div>
            </div>,
            type: 0
        },
        {
            name: "Защитные",
            topInformation: <div className={"top-information"}>
                <div>0 - не имеется, 1 - имеется</div>
                <div>При отсутвии владения вы получаете помеху на любые действия в этом типе доспехов</div>
            </div>,
            type: 1
        },
        {
            name: "Мистические",
            topInformation: <div className={"top-information"}>
                <div>0 - не имеется, 1 - ученик, 2 - ветеран, 3 - мастер</div>
                <div>Максимальный ранг - ученик при МДР хотя бы +1, Адепт при МДР хотя бы +6 и 45 мощи, Мастер при МДР
                    хотя бы +8 и 60 мощи.
                    Текущий максимальный ранг: <SimpleInput val={evalList.maxMisticVladeniaRank} setVal={() => {}} disable={true} style={{width: "6rem"}}/>
                </div>
                <div>Максимальное кол-во школ = уровню навыка Чувство магии.
                    Текущее: <SimpleInput val={evalList.maxMagicSchoolCount} setVal={() => {}} disable={true} style={{width: "2rem"}}/>
                </div>
            </div>,
            type: 2
        },
        {
            name: "Плутовские и владения инструментами",
            topInformation: <div className={"top-information"}>
                <div>0 - не имеется, 1 - имеется</div>
            </div>,
            type: 0
        },
        {
            name: "Знания",
            topInformation: <div className={"top-information"}>
                <div>0 - не имеется, 1 - имеется</div>
            </div>,
            type: 0
        },
        {
            name: "Языки",
            topInformation: <div className={"top-information"}>
                <div>0 - не имеется, 1 - имеется</div>
            </div>,
            type: 0
        },
        {
            name: "Прочее",
            topInformation: <div className={"top-information"}>
                <div>0 - не имеется, 1 - имеется</div>
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
                <OneNavik key={"navik" + i} name={naviksName[i]} val={charList.naviks.value[i]} setVal={charList.naviks.setValue(i)}></OneNavik>
            )
        }
        return naviksContainer;
    }

    for (let i=0; i < harksName.length; i++) {
        harksAndNaviksElement.push(
            <div className={"harks-and-naviks-block"}>
                <OneHark key={"harks" + i} name={harksName[i]} val={charList.harks.value[i]} setVal={charList.harks.setValue(i)}></OneHark>
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
        return <div className={"bone-input"}><IncDecInput val={val < 4 ? "1к4-" + (4 - val) / 2 : val < 12 ? "1к" + val : "1к12+" + (val - 12) / 2}
                         setVal={setVal} decFunc={() => setVal(+val - 2)} incFunc={() => setVal(+val + 2)}/></div>
    }

    return (
        <div>
            <div className={"harks-and-naviks-blocks"}>
                {harksAndNaviksElement}
            </div>
            <div className={"vladenia"}>
                <p className={"big-bold-red-text"}>Владения:</p>
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