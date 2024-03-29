import React, {useState} from 'react';
import SimpleTextarea from "../UI/SimpleTextarea";
import SimpleButton from "../UI/SimpleButton";
import Accordion from "../UI/Accordion";
import IncDecInput from "../UI/IncDecInput";
import StatsWithDoubleIncDecInput from "../UI/StatsWithDoubleIncDecInput";
import "./Equip.css"
import PopUpTip from "../UI/PopUpTip";
import HeaderWithTipBlock from "./HeaderWithTipBlock";
import ButtonUnionTips from "../UI/ButtonUnionTips";
import SimpleInput from "../UI/SimpleInput";
import IncDecInputWithWords from "../UI/IncDecInputWithWords";
import BoneIncDecInput from "../UI/BoneIncDecInput";
import ButtonUnion from "../UI/ButtonUnion";
import ButtonUnionTipsWithoutChoose from "../UI/ButtonUnionTipsWithoutChoose";
import Checkbox from "./Checkbox";
import usefulFuncs from "../UsefulFuncs";

const weaponsModifiers = "* Парное - Вы тратите 1 действие на атаку вместо 2.\n" +
    "* Простое - Простым считается оружие, не являющееся парным или двуручным.\n" +
    "* Полутороручное - Можно использовать в одной руке, как простое или в двух руках, как двуручное.\n" +
    "* Двуручное - Занимает 2 руки. \n" +
    "\n" +
    "* Длинное - Вы можете атаковать противников через клетку от вас. Ваша зона контроля увеличивается на 1 клетку Помеха на атаки по существам в радиусе 1 клетки. \n" +
    "* Двойное - Занимает 2 руки. Можно атаковать любой частью оружия.\n" +
    "* Гибкое - Игнорирование щитов.\n" +
    "* Фехтовальное - Для проверок атаки можно использовать ловкость вместо силы.\n" +
    "* Скрытое - Преимущество на проверки обнаружения\n" +
    "* Необезоруживаемое - Невозможно обезоружить.\n" +
    "\n" +
    "* Универсальное - Атаки в ближнем бою без помех.\n" +
    "* Метательное - Для проверок атак дальнего боя можно использовать силу вместо ловкости. (Ну, и метать соответственно можно) (Дальность без помехи/с помехой)\n" +
    "* Притягивающее - После успешного попадания действием можно попробовать притянуть, соревнование атлетики, при победе вы притягиваете противника.\n" +
    "* Перезарядка(Реакция/Действие) - Вы обязаны потратить реакцию/действие на перезарядку оружия. Перезарядка требует двух рук.\n" +
    "\n" +
    "* Дробящее - дробящий урон.\n" +
    "* Колющее - колющий урон.\n" +
    "* Рубящее - рубящий урон.";

const armorDescription = "Лёгкие доспехи не дают негативных бонусов, если это не прописано в самих доспехах.  \n" +
    "Средние доспехи запрещают получать бонус от ловкости и уменьшают скорость на 1.    \n" +
    "Тяжёлые доспехи запрещают получать бонус от ловкости, уменьшают скорость на 2 и дают помеху на проверки навыков Ловкости и использование заклинаний.\n" +
    "Вы не получаете бонусы за второй щит(кроме баклера)."

const mageDescription = "Некоторые заклинания нуждаются в фокусировке - неком предмете, который способен помочь сконцентрировать магические силы \n" +
    "Различные фокусировки отличаются по необходимости зарядки (Кристаллы необходимо менять), " +
    "удобству(одноручная фокусировка явно удобнее двуручной) и бонусу каста (некоторые имеют свойство +1, добавляющее +1 к бонусу каста)\n" +
    "Также, некоторые заклинания получают дополнительные эффекты при использовании фокусировки"

const preWeaponsText = [
    "Стандартный урон парного оружия: (Новичок: МОД/2 | Ученик: 1к4+МОД/2 | Ветеран: 1к8+МОД/2 | Мастер: 1к12+МОД/2)\n",
    "Стандартный урон простого оружия: (Новичок: 1к4+МОД | Ученик: 1к8+МОД | Ветеран: 1к12+МОД | Мастер: 2к8+МОД)\n",
    "Стандартный урон полутороручного оружия - как у простого в одной руке, как у двуручного в 2ух.\n",
    "Стандартный урон двуручного оружия: (Новичок: 1к8+МОД | Ученик: 1к12+МОД | Ветеран: 2к8+МОД | Мастер: 1к20+МОД)\n",
    "Стандартный урон парного оружия: (Новичок: МОД/2 | Ученик: 1к4+МОД/2 | Ветеран: 1к8+МОД/2 | Мастер: 1к12+МОД/2)\n",
    "Стандартный урон простого оружия: (Новичок: 1к4+МОД | Ученик: 1к8+МОД | Ветеран: 1к12+МОД | Мастер: 2к8+МОД)\n",
    "Стандартный урон двуручного оружия: (Новичок: 1к8+МОД | Ученик: 1к12+МОД | Ветеран: 2к8+МОД | Мастер: 1к20+МОД)\n"
];

const namesPairMeleeWeapons = [
    ["Дубинка (Урон:-, парное, дробящее) ", 5 ],
    ["Серп (Урон:-, парное, рубящее/колющее) ", 8 ],
    ["Кастет (Урон:-, парное, необезоруживаемое, дробящее) ", 8 ],
    ["Сантенсу (Урон:-, парное, необезоруживаемое, колющее) ", 15 ],
    ["Кинжал (Урон:-, парное, метательное(40/80), фехтовальное, рубящее) ", 15 ],
    ["Танто (Урон:-, парное, метательное(40/80), фехтовальное, рубящее) ", 15 ],
    ["Нунчаки (Урон:0, парное, фехтовальное, дробящее) ", 20 ],
    ["Гладиус (Урон:0, парное, фехтовальное, рубящее) ", 20 ],
    ["Скимитар (Урон:0, парное, фехтовальное, рубящее) ", 20 ],
    ["Короткий меч (Урон:0, парное, фехтовальное, рубящее) ", 20 ],
    ["Абордажная сабля (Урон:0, парное, фехтовальное, рубящее) ", 20 ],
    ["Вакидзаси (Урон:0, парное, фехтовальное, рубящее) ", 20 ],
    ["Сай (Урон:0, парное, фехтовальное, колющее) ", 20 ],
    ["Шуангоу (Урон:0, парное, фехтовальное, рубящее/колющее) ", 30 ],
    ["Лёгкий молот (Урон:0, парное, метательное(20/60), дробящее) ", 20 ],
    ["Ручной топор (Урон:0, парное, метательное(20/60), рубящее) ", 20 ],
    ["Когти (Урон:0, парное, необезаруживаемое, фехтовальное, рубящее) ", 30 ],
    ["Катар (Урон:0, парное, необезаруживаемое, фехтовальное, рубящее) ", 30 ],
    ["Кастет \"Рога оленя\" (Урон:0, парное, необезаруживаемое, фехтовальное, рубящее) ", 30 ],
    ["Томагавк (Урон:0, парное, метательное(20/60), фехтовальное, рубящее) ", 35 ],
    ["Крис (Урон:0, парное, метательное(40/80), фехтовальное, рубящее) ", 40 ],
    ["Боевой веер (Урон:0, парное, метательное(30/60), фехтовальное, скрытое, рубящее) ", 45 ]
]
const namesSimpleMeleeWeapons = [
    ["Гасило (Урон:-, простое, Гибкое, дробящее) ", 10 ],
    ["Кнут (Урон:-, простое, фехтовальное, длинное, Гибкое, рубящее) ", 15 ],
    ["Уруми (Урон:-, простое, фехтовальное, длинное, Гибкое, рубящее) ", 15 ],
    ["Девятихвостка (Урон:-, простое, фехтовальное, длинное, Гибкое, рубящее) ", 15 ],
    ["Амигаса (Урон:-, простое, скрытое, головной убор, рубящее) ", 20 ],
    ["Рапира (Урон:-, простое, фехтовальное, колющее) ", 30 ],
    ["Чакра (Урон:-, простое, фехтовальное, метательное(60/120), рубящее) ", 35 ],
    ["Булава (Урон:0, простое, дробящее) ", 30 ],
    ["Боевая кирка (Урон:0, простое, колющее) ", 30 ],
    ["Фальшион (Урон:0, простое, рубящее) ", 30 ],
    ["Хопеш (Урон:0, простое, рубящее) ", 30 ],
    ["Клевец (Урон:0, простое, колющее) ", 30 ],
    ["Кистень (Урон:0, простое, дробящее)  ", 30 ],
    ["Моргенштерн (Урон:0, простое, Гибкое, дробящее) ", 35 ],
    ["Цеп (Урон:0, простое, Гибкое, дробящее) ", 35 ],
    ["Меч-трость (Урон:0, простое, скрытое, колющее) ", 35 ]
]
const namesHalfMeleeWeapons = [
    ["Боевой посох (Урон:-, полутороручное, дробящее) ", 15 ],
    ["Копьё (Урон:-, полутороручное, метательное(20/60), колющее) ", 25 ],
    ["Меч-пояс (Урон:-, полутороручное, скрытое, Гибкое, рубящее) ", 45 ],
    ["Боевой топор (Урон:0, полутороручное, рубящее) ", 55 ],
    ["Боевой молот (Урон:0, полутороручное, дробящее) ", 55 ],
    ["Длинный меч (Урон:0, полутороручное, рубящее) ", 55 ],
    ["Катана (Урон:0, полутороручное, рубящее) ", 55 ]
]
const namesTwohandMeleeWeapons = [
    ["Палица (Урон:-, двуручное, дробящее) ", 10 ],
    ["Боевая коса (Урон:-, двуручное, колющее/рубящее) ", 20 ],
    ["Молот (Урон:0, двуручное, дробящее) ", 35 ],
    ["Бердыш (Урон:0, двуручное, рубящее) ", 35 ],
    ["Секира (Урон:0, двуручное, рубящее) ", 35 ],
    ["Дзё (Урон:0, двуручное, дробящее) ", 35 ],
    ["Двуручный меч (Урон:0, двуручное, рубящее)  ", 35 ],
    ["Багор (Урон:0, двуручное, длинное, колющее) ", 40 ],
    ["Пика (Урон:0, двуручное, длинное, колющее) ", 40 ],
    ["Длинное копье (Урон:0, двуручное, длинное, колющее) ", 40 ],
    ["Гвизарма (Урон:0, двуручное, длинное, колющее) ", 40 ],
    ["Гуань дао (Урон:0, двуручное, рубящее/колющее) ", 50 ],
    ["Глефа (Урон:0, двуручное, рубящее/колющее) ", 50 ],
    ["Алебарда (Урон:0, двуручное, длинное, рубящее/колющее) ", 50 ],
    ["Фламберг (Урон:+, двуручное, рубящее) ", 350 ],
    ["Гаррота (Урон:-, двуручное, Гибкое, можно использовать только захватом) ", 10 ],
    ["Кусаригама (двойное (Урон:0, простое, рубящее)/(Урон:-, простое, длинное, дробящее)) ", 70 ]
]
const namesPairRangeWeapons = [
    ["Гантань (Урон:--, дис(30/60),  парное, скрытое) (Металлические шарики) ", 1 ],
    ["Сюрикен (Урон:-, дис(60/120), парное, фехтовальное, бл.бой) ", 3 ],
    ["Кунай (Урон:-, дис(60/120), парное, фехтовальное, бл.бой) ", 3 ],
    ["Ручной арбалет (Урон:0, дис(80/320), парное, перезарядка(реакция/действие), Снаряды - болты) ", 35 ]
]
const namesSimpleRangeWeapons = [
    ["Дротик(3шт) (Урон:--, простое, дис(30/80)) ", 2 ],
    ["Праща (Урон:--, простое, дис(60/120), Снаряды - камни) ", 5 ],
    ["Бумеранг (Урон:--, простое, дис(40/80), возвращающаеся) ", 15 ],
    ["Духовая трубка (Урон:--, простое, дис(90/180), перезарядка реакцией, Снаряды - дротики) ", 10 ],
    ["Шэньбяо (Урон:--, простое, дис(40/80), притягивающее) ", 10 ],
    ["Кунай на цепи (Урон:--, простое, дис(40/80), универсальное, длинное, Гибкое, притягивающее) ", 20 ],
    ["Метательное копьё (Урон:-, простое, дис(60/120), универсальное, можно кидать от Силы) ", 5 ],
    ["Легкий арбалет (Урон:-, простое, дис(100/400), перезарядка(реакция), Снаряды - болты) ", 40 ],
    ["Сеть (простое, дис(10/20), существо обездвижно, спас Сил 15) ", 5 ]
]
const namesTwohandRangeWeapons = [
    ["Короткий лук (Урон:--, дис(80/320), двуручное, Снаряды - стрелы) ", 15 ],
    ["Гарпун (Урон:--, дис(40/100), двуручное, притягивающее) ", 25 ],
    ["Длинный лук (Урон:-, дис(150/600), двуручное, тяжёлое, Снаряды - стрелы) ", 35 ],
    ["Тяжёлый арбалет (Урон:+, дис(120/480), двуручное, перезарядка(действие), Снаряды - болты) ", 60 ]
]
const namesAmmunition = [
    ["Камни", 0 ],
    ["Стрелы(5)", 2 ],
    ["Болты(5)", 2 ],
    ["Дротики(3)", 2 ]
]
const namesLightArmor = [
    [ "Стёганный (Лёгкий, КД +2)", 15 ],
    [ "Кожанный (Лёгкий, КД +3)", 30 ],
    [ "Клёпанная кожа (Лёгкий, КД +4)", 90 ],
    [ "Мифриловая кольчужная рубаха (Лёгкий, КД +5)", 400 ]
]
const namesMediumArmor = [
    [ "Шкурный (Средний, КД +4)", 20],
    [ "Полукольчужный (Кольчужная рубаха) (Средний, КД +5)", 45],
    [ "Полуламеллярный (Кираса) (Средний, КД +6)", 75],
    [ "Ламинарный (Средний, КД +7)", 120],
    [ "Полулаты (Средний, КД +8)", 200]
]
const namesHeavyArmor = [
    ["Колечный (Тяжёлый, КД +6)", 25],
    ["Кольчуга (Тяжёлый, КД +7)", 50],
    ["Ламеллярный (Чешуйчатый) (Тяжёлый, КД +8)", 90],
    ["Пластинчатый (Тяжёлый, КД +9)", 150],
    ["Латы (Тяжёлый, КД +10)", 350]
]
const namesShield = [
    [ "Баклер (-3 к атакам/кастам этой рукой, +1КД, можно носить в одной руке с оружием.)" , 10],
    [ "Гоплон (+1КД и +1КД от обороны.)" , 20],
    [ "Каплевидный (+2КД и +1КД от обороны, -2 к атакам/кастам)" , 30],
    [ "Башенный (+3КД и +1КД от обороны, неуязвимость к выстрелам спереди, -1 МС, -3 к атакам/кастам)" , 50]
]
const namesMagicWeapons = [
    ["Двуручный магический посох(1 кристалл)",15 ],
    ["Жезл мага(1 кристалл)",35 ],
    ["Самозаряжающийся двуручный посох",45 ],
    ["Металлический жезл мага(простое, урон:-, дробящее)(1 кристалл)",50 ],
    ["Сфера(1 кристалл)",60 ],
    ["Самозаряжающийся жезл",65 ],
    ["Клятвенный клинок(аналогичен кинжалу)(1 кристалл)",65 ],
    ["Качественный двуручный посох(+1)(1 кристалл)",90 ],
    ["Самозаряжающийся металлический жезл",95 ],
    ["Самозаряжающийся Клятвенный клинок(аналогичен кинжалу)",100 ],
    ["Летающая сфера(1 кристалл)",200 ],
    ["Криацен, кристалл магии",10 ],
    ["Большой Криацен",35 ]
]
const namesAmulets = [
    ["Одноцветный оберег(+2 КМЗ против выбранной школы)",15 ],
    ["Радужный оберег(+1 КМЗ против всех школ)",35 ],
    ["Монокристальный оберег(+5 КМЗ против выбранной школы)",45 ],
    ["Большой радужный оберег(+2 КМЗ против всех школ)",65 ]
]
const namesOther = [
    ["Факел(10шт)",2 ],
    ["Верёвка(10м)",2 ],
    ["Зелье лечения(1к12)",3 ],
    ["Зелье лечения(1к20)",5 ],
    ["Зелье скорости(+2МС, 1 бой/10 минут)",15 ],
    ["Зелье усиления(+1 к выбранной хар-ке, 1 час)",35 ],
    ["Зелье дыхания под водой(дыхание под водой на час)",25 ],
    ["Зелье Тёмного зрения(тёмное зрение на 4 часа)",15 ],
    ["Бинт",1 ],
    ["Связка лекарственных трав",5 ],
    ["Плащ",2 ],
    ["Богатый плащ",8 ],
    ["Крюк-кошка",5 ],
    ["Набор отмычек",10 ],
    ["Игровой набор",3 ],
    ["Шулерский игровой набор",10 ],
    ["Икона и свечи",5 ],
    ["Переносное святилище",25 ],
    ["Благовония",5 ],
    ["Вино",2 ],
    ["Пиво(5 бутылок)",2 ],
    ["Мука",1 ],
    ["Капкан",8 ],
    ["Небольшой набор для создания механизмов",5 ],
    ["Большой набор для создания механизмов",20 ],
    ["Рацион на 5 дней",5 ],
    ["Лира/арфа/барабан",8 ],
    ["Духовой музыкальный инструмент",4 ],
    ["Пустые бутыльки и колбы(10 штук)",1 ],
    ["Набор алхимика",15 ],
    ["Вечногорящий факел",25 ],
    ["Карманный ножик",3 ],
    ["Богатая одежда",15 ],
    ["Украшения(Серьги/браслет/ожерелье/перстень)",5 ],
    ["Инкрустированные украшения",20 ],
    ["Трубка и табак",3 ],
    ["Ткацкий набор",5 ],
    ["Цепи",8 ],
    ["Антимагический венок(блокирует магические способности)",25 ],
    ["Сумка",3 ],
    ["Бальзамированная конечность",6 ],
    ["Металлическая балка",5 ],
    ["Седло и обмундировние для скакуна",15 ],
    ["Набор для грима",12 ],
    ["Амулет с черепом",5 ],
    ["Колода таро",3 ],
    ["Банка со светлячками",5 ],
    ["Перо и чернила",3 ],
    ["Карандаш",5 ],
    ["Бумага(3 листа)",1 ],
    ["Пустая книга",10 ],
    ["Справочник(на ваш выбор)",30 ],
    ["Фляга масла",3 ],
    ["Ночной фонарик",5 ],
    ["Воровской фонарик",10 ],
    ["Ломик",5 ],
    ["Набор доспешного мастера",15 ],
    ["Точильный камень",5 ],
    ["Набор свечей(5шт)",3 ],
    ["Воск(200гр)",3 ],
    ["Бутылка жира",1 ],
    ["Песочные часы",3 ],
    ["Прочные перчатки",3 ],
    ["Линза",2 ],
    ["Свёрток с специями",3 ],
    ["Повязка на глаза/затычка для ушей",2 ],
    ["Флаг/герб",2 ],
    ["Карманное зеркальце с фотографией",5 ],
    ["Полая трубка",1 ],
    ["Медицинский набор",10 ]
]

const namesMas = [
    namesPairMeleeWeapons,
    namesSimpleMeleeWeapons,
    namesHalfMeleeWeapons,
    namesTwohandMeleeWeapons,
    namesPairRangeWeapons,
    namesSimpleRangeWeapons,
    namesTwohandRangeWeapons,
    namesAmmunition,
    namesLightArmor,
    namesMediumArmor,
    namesHeavyArmor,
    namesShield,
    namesMagicWeapons,
    namesAmulets,
    namesOther
]

// const tipCapacity = "- Ваш показатель грузоподъёмности - 3 + СИЛ.\n" +
//     "- При подсчёте грузоподъёмности учитываются только тяжёлые вещи. Все маленькие вещи считаются лишь в группе.\n" +
//     "- 1/2 грузоподъёмности это - парное оружие, 40 стрел, 20 болтов, множество мелких вещей\n" +
//     "- 1 грузоподъёмности - простое и двуручное оружие, лёгкие и средние доспехи\n" +
//     "- 2 грузоподъёмности - тяжёлые доспехи"

const mapToSimpleDiv = (str) => {
    return str.split("\n").map((el) => {return <div>{el}</div>})
}

function getShift(masNumber) {
    return namesMas.reduce((sum, el) => namesMas.indexOf(el) < masNumber ? sum + el.length : sum, 0)
}

function getAccordionContent(index, charList) {
    let thingsBlockContainer = [];
    let shift = getShift(index);
    thingsBlockContainer.push(
        <div key={"thingsPreWeaponsText" + shift} className={"bold-red-text things-block-information"}>{preWeaponsText[index]}</div>
    )
    for (let i=0; i < namesMas[index].length; i++) {
        thingsBlockContainer.push(
            <div key={"things" + shift + i} className={"stats-with-field"}>
                <div className={"bold-red-text"}>{namesMas[index][i][0] + ":"}</div>
                <IncDecInput val={charList.things.value[shift + i]} setVal={charList.things.setValue(shift + i)}/>
                <div className={"bold-red-text"}>Стоимость: {namesMas[index][i][1]}</div>
            </div>
        )
    }
    return thingsBlockContainer;
}

const costMoneyEval = (namesMas, things) => {
    let sum = 0;
    for (let i = 0; i < namesMas.length; i++) {
        for (let j = 0; j < namesMas[i].length; j++) {
            sum += +namesMas[i][j][1] * +things[getShift(i, namesMas) + j]
        }
    }
    return sum
}

const addEquips = (equip, things, setEquip, ) => {
    let currentEquip = equip;
    for (let i = 0; i < namesMas.length; i++) {
        for (let j = 0; j < namesMas[i].length; j++) {
            if (things[getShift(i) + j] === 1) {
                if (currentEquip !== "") currentEquip += ", "
                currentEquip += namesMas[i][j][0].trim();
            } else if (things[getShift(i) + j] !== "0" && things[getShift(i) + j] !== 0) {
                if (currentEquip !== "") currentEquip += ", "
                currentEquip += namesMas[i][j][0].trim() + "(" + things[getShift(i) + j] + " штук)";
            }
        }
    }
    setEquip(currentEquip);
}

const Equip = ({charList, evalList}) => {
    const [buyMode, setBuyMode] = useState(false);

    const equipTip =
        <ButtonUnionTips count={3}
                         namesArray={["Экипировка", "Закупка", "Грузоподъёмность"]}
                         tipsArray={
                             [
                                 <div>
                                     <div>
                                         На этой вкладке хранятся все вещи, которые вы добыли в приключениях или имели со старта.
                                     </div>
                                     <div>
                                         Здесь же учитывается грузоподъёмность, чтобы ваш персонаж не перетрудился при ношении тяжёлых вещей и не надорвал себе спину.
                                     </div>
                                     <div>
                                         Также, здесь можно в удобном формате закупиться стартовыми вещами.
                                     </div>
                                 </div>,
                                 <div>
                                     <div>
                                         Нажав на кнопку внизу листа вы активируете режим закупки.
                                         В нём вы можете купить оружие, доспехи, магические фокусировки и прочие вещи в удобном формате.
                                     </div>
                                     <div>
                                         Сверху отображаются потраченные на данный момент монеты, при нажатии "Окончить закупку" потраченные монеты спишутся с вашего счёта, а вещи добавятся в инвентарь.
                                         Обратите внимание, что грузоподъёмность никто за вас считать не будет(
                                     </div>
                                 </div>,
                                 <div>
                                     <div>
                                         Грузоподъёмность показывает, сколь много снаряжения способен таскать ваш персонажа. Её значение равно 3 + Сила.
                                     </div>
                                     <div>
                                         При подсчёте грузоподъёмности учитываются только тяжёлые вещи. Все маленькие вещи считаются лишь в группе.
                                     </div>
                                     <div>
                                         1/2 грузоподъёмности это - парное оружие, 40 стрел, 20 болтов, множество мелких вещей
                                     </div>
                                     <div>
                                         1 грузоподъёмности - простое и двуручное оружие, лёгкие и средние доспехи
                                     </div>
                                     <div>
                                         2 грузоподъёмности - тяжёлые доспехи
                                     </div>
                                 </div>,
                             ]
                         }/>



    const mapArmorType = new Map([
        [0, "Нет доспеха"],
        [1, "Лёгкий"],
        [2, "Средний"],
        [3, "Тяжёлый"]
    ])

    const mapAmuletType = {
        0: "Нет школы",
        1: "От одной школы",
        2: "От всех школ"
    }

    return (
        <div>
            <HeaderWithTipBlock header={"Снаряжение"} tip={equipTip}/>
            <StatsWithDoubleIncDecInput name={"Грузоподъёмность"} changeVal={charList.addCapacity.value[0]} noChangeVal={evalList.capacity} setVal={charList.addCapacity.setValue(0)} tipExist={false}/>
            <PopUpTip text={"Потраченную грузоподъёмность считайте сами, ибо функционал не реализован"}>
                <div className={"stats-with-field"}>
                    <div className={"bold-red-text"}>Занятая грузоподъёмность:</div>
                    <IncDecInput val={charList.busyCapasity.value[0]} setVal={charList.busyCapasity.setValue(0)}/>
                </div>
            </PopUpTip>

            <div className={"bold-red-text"}>Снаряжение:</div>
            <SimpleTextarea
                value = {charList.equip.value[0]}
                onChange={(e) => {charList.equip.setValue(0)(e.target.value)}}
                placeholder={"Мне нужна твоя одежда и твой мотоцикл"}/>
            <Accordion title={"Экипированное"} content={
                <div className={"harks-and-naviks-blocks"}>
                    <div className={"harks-and-naviks-block"}>
                        <div className={"big-bold-red-text"}>Основная рука</div>
                        <div className={"stats-with-field"}>
                            <ButtonUnionTipsWithoutChoose count={4} namesArray={["Оружие", "Щит", "Фокусировка", "Свободная"]}
                                                          chooseButton={charList.currentMainEquip.value[0]}
                                                          setChooseButton={charList.currentMainEquip.setValue(0)}
                                                          tipsArray={[
                                                              <div>
                                                                  <div className={"stats-with-field"}>
                                                                      <div className={"bold-red-text"}>Тип оружия:</div>
                                                                      <ButtonUnion count={3} namesArray={["Парное", "Простое", "Двуручное"]}
                                                                                   chooseButton={charList.currentMainWeaponsType.value[0]}
                                                                                   setChooseButton={charList.currentMainWeaponsType.setValue(0)}/>
                                                                  </div>
                                                                  <div className={"stats-with-field"}>
                                                                      <div className={"bold-red-text"}>Название:</div>
                                                                      <SimpleInput val={charList.nameMainWeapons.value[0]} setVal={charList.nameMainWeapons.setValue(0)}/>
                                                                  </div>
                                                                  <div>
                                                                      <div className={"stats-with-field"}>
                                                                          <div className={"bold-red-text"}>Кость:</div>
                                                                          <BoneIncDecInput val={charList.boneMainWeapons.value[0]} setVal={charList.boneMainWeapons.setValue(0)}/>
                                                                          <Checkbox val={charList.fencingMainWeapons.value[0]} setVal={charList.fencingMainWeapons.setValue(0)}
                                                                                    names={["Фехтовальное вкл", "Фехтовальное выкл"]}/>
                                                                      </div>
                                                                      <div className={"stats-with-field"}>
                                                                          <div className={"bold-red-text"}>Модификатор атаки:</div>
                                                                          <IncDecInput val={charList.MODMainWeapons.value[0]} setVal={charList.MODMainWeapons.setValue(0)}/>
                                                                      </div>
                                                                  </div>
                                                              </div>,
                                                              <div>
                                                                  <div className={"stats-with-field"}>
                                                                      <div className={"bold-red-text"}>Название:</div>
                                                                      <SimpleInput val={charList.nameMainShield.value[0]} setVal={charList.nameMainShield.setValue(0)}/>
                                                                  </div>
                                                                  <div>
                                                                      <div className={"stats-with-field"}>
                                                                          <div className={"bold-red-text"}>КД:</div>
                                                                          <IncDecInput val={charList.KFZMainShield.value[0]} setVal={charList.KFZMainShield.setValue(0)}/>
                                                                      </div>
                                                                  </div>
                                                                  <div>
                                                                      <div className={"stats-with-field"}>
                                                                          <div className={"bold-red-text"}>КД от обороны:</div>
                                                                          <IncDecInput val={charList.KFZMainShieldDefense.value[0]} setVal={charList.KFZMainShieldDefense.setValue(0)}/>
                                                                      </div>
                                                                  </div>
                                                              </div>,
                                                              <div>
                                                                  <div className={"stats-with-field"}>
                                                                      <div className={"bold-red-text"}>Тип фокусировки:</div>
                                                                      <ButtonUnion count={2} namesArray={["Простое", "Двуручное"]}
                                                                                   chooseButton={charList.focusType.value[0]}
                                                                                   setChooseButton={charList.focusType.setValue(0)}/>
                                                                  </div>
                                                                  <div className={"stats-with-field"}>
                                                                      <div className={"bold-red-text"}>Название:</div>
                                                                      <SimpleInput val={charList.nameMainFocus.value[0]} setVal={charList.nameMainFocus.setValue(0)}/>
                                                                  </div>
                                                                  <div>
                                                                      <div className={"stats-with-field"}>
                                                                          <div className={"bold-red-text"}>Бонус каста:</div>
                                                                          <IncDecInput val={charList.BKMainFocus.value[0]} setVal={charList.BKMainFocus.setValue(0)}/>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          ]}/>
                        </div>
                    </div>
                    {
                        (+charList.currentMainEquip.value[0] !== 0 || +charList.currentMainWeaponsType.value[0] !== 2) &&
                        +charList.focusType.value[0] === 0 &&
                        <div className={"harks-and-naviks-block"}>
                            <div className={"big-bold-red-text"}>Дополнительная рука</div>
                            <div className={"stats-with-field"}>
                                <ButtonUnionTipsWithoutChoose count={4} namesArray={["Оружие", "Щит", "Фокусировка", "Свободная"]}
                                                              chooseButton={charList.currentAdditionalEquip.value[0]}
                                                              setChooseButton={charList.currentAdditionalEquip.setValue(0)}
                                                              tipsArray={[
                                                                  <div>
                                                                      <div className={"stats-with-field"}>
                                                                          <div className={"bold-red-text"}>Тип оружия:</div>
                                                                          <ButtonUnion count={2} namesArray={["Парное", "Простое"]}
                                                                                       chooseButton={charList.currentAdditionalWeaponsType.value[0]}
                                                                                       setChooseButton={charList.currentAdditionalWeaponsType.setValue(0)}/>
                                                                      </div>
                                                                      <div className={"stats-with-field"}>
                                                                          <div className={"bold-red-text"}>Название:</div>
                                                                          <SimpleInput val={charList.nameAdditionalWeapons.value[0]} setVal={charList.nameAdditionalWeapons.setValue(0)}/>
                                                                      </div>
                                                                      <div>
                                                                          <div className={"stats-with-field"}>
                                                                              <div className={"bold-red-text"}>Кость:</div>
                                                                              <BoneIncDecInput val={charList.boneAdditionalWeapons.value[0]} setVal={charList.boneAdditionalWeapons.setValue(0)}/>
                                                                              <Checkbox val={charList.fencingAdditionalWeapons.value[0]} setVal={charList.fencingAdditionalWeapons.setValue(0)}
                                                                                        names={["Фехтовальное вкл", "Фехтовальное выкл"]}/>
                                                                          </div>
                                                                          <div className={"stats-with-field"}>
                                                                              <div className={"bold-red-text"}>Модификатор атаки:</div>
                                                                              <IncDecInput val={charList.MODAdditionalWeapons.value[0]} setVal={charList.MODAdditionalWeapons.setValue(0)}/>
                                                                          </div>
                                                                      </div>
                                                                  </div>,
                                                                  <div>
                                                                      <div className={"stats-with-field"}>
                                                                          <div className={"bold-red-text"}>Название:</div>
                                                                          <SimpleInput val={charList.nameAdditionalShield.value[0]} setVal={charList.nameAdditionalShield.setValue(0)}/>
                                                                      </div>
                                                                      <div>
                                                                          <div className={"stats-with-field"}>
                                                                              <div className={"bold-red-text"}>КД:</div>
                                                                              <IncDecInput val={charList.KFZAdditionalShield.value[0]} setVal={charList.KFZAdditionalShield.setValue(0)}/>
                                                                          </div>
                                                                      </div>
                                                                      <div>
                                                                          <div className={"stats-with-field"}>
                                                                              <div className={"bold-red-text"}>КД от обороны:</div>
                                                                              <IncDecInput val={charList.KFZAdditionalShieldDefense.value[0]} setVal={charList.KFZAdditionalShieldDefense.setValue(0)}/>
                                                                          </div>
                                                                      </div>
                                                                  </div>,
                                                                  <div>
                                                                      <div className={"stats-with-field"}>
                                                                          <div className={"bold-red-text"}>Название:</div>
                                                                          <SimpleInput val={charList.nameAdditionalFocus.value[0]} setVal={charList.nameAdditionalFocus.setValue(0)}/>
                                                                      </div>
                                                                      <div>
                                                                          <div className={"stats-with-field"}>
                                                                              <div className={"bold-red-text"}>Бонус каста:</div>
                                                                              <IncDecInput val={charList.BKAdditionalFocus.value[0]} setVal={charList.BKAdditionalFocus.setValue(0)}/>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              ]}/>
                            </div>
                        </div>
                    }


                    <div className={"harks-and-naviks-block"}>
                        <div className={"big-bold-red-text"}>Доспех</div>
                        <div>
                            <div className={"stats-with-field"}>
                                <div className={"bold-red-text"}>Название:</div>
                                <SimpleInput val={charList.armorName.value[0]} setVal={charList.armorName.setValue(0)}/>
                            </div>
                            <div className={"stats-with-field"}>
                                <div className={"bold-red-text"}>Тип:</div>
                                <IncDecInputWithWords val={charList.armorType.value[0]} setVal={charList.armorType.setValue(0)}
                                                      mapArray={mapArmorType} style={{width: "7rem"}}/>
                            </div>
                            <div className={"stats-with-field"}>
                                <div className={"bold-red-text"}>КД:</div>
                                <IncDecInput val={charList.armorKFZ.value[0]} setVal={charList.armorKFZ.setValue(0)}/>
                            </div>
                        </div>
                    </div>

                    <div className={"harks-and-naviks-block"}>
                        <div className={"big-bold-red-text"}>Амулет</div>
                        <div>
                            <div className={"stats-with-field"}>
                                <div className={"bold-red-text"}>Название:</div>
                                <SimpleInput val={charList.amuletName.value[0]} setVal={charList.amuletName.setValue(0)}/>
                            </div>
                            <div className={"stats-with-field"}>
                                <div className={"bold-red-text"}>Школа:</div>
                                <IncDecInputWithWords val={charList.amuletType.value[0]} setVal={charList.amuletType.setValue(0)}
                                                      mapArray={mapArmorType} style={{width: "7rem"}}/>
                            </div>
                            <div className={"stats-with-field"}>
                                <div className={"bold-red-text"}>Бонус КМЗ:</div>
                                <IncDecInput val={charList.amuletKMZ.value[0]} setVal={charList.amuletKMZ.setValue(0)}/>
                            </div>
                        </div>
                    </div>

                </div>
            }/>


            <SimpleButton onClick={() => {setBuyMode(!buyMode)}}>Включить режим закупки</SimpleButton>
            { buyMode &&
                <div className={"buy-mode-block"}>
                    <div className={"big-bold-red-text"}>Потраченные монеты: {costMoneyEval(namesMas, charList.things.value)}</div>
                    <SimpleButton onClick={() => {
                        charList.money.setValue(0)(charList.money.value[0] - costMoneyEval(namesMas, charList.things.value))
                        addEquips(charList.equip.value[0], charList.things.value, charList.equip.setValue(0))
                        charList.things.setArray(Array(charList.things.value.length).fill("0"))
                        setBuyMode(!buyMode);
                    }}>Окончить закупку</SimpleButton>
                    <Accordion title={"Оружие"} content={
                        <div>
                            <Accordion title={"Свойства оружий"} content={
                                <div>
                                    {usefulFuncs.mapToDiv(weaponsModifiers)}
                                </div>
                            }/>
                            <Accordion title={"Парное оружие ближнего боя"} content={
                                <div>
                                    {getAccordionContent(0, charList)}
                                </div>
                            }/>
                            <Accordion title={"Простое оружие ближнего боя"} content={
                                <div>
                                    {getAccordionContent(1, charList)}
                                </div>
                            }/>
                            <Accordion title={"Полутороручное оружие ближнего боя"} content={
                                <div>
                                    {getAccordionContent(2, charList)}
                                </div>
                            }/>
                            <Accordion title={"Двуручное оружие ближнего боя"} content={
                                <div>
                                    {getAccordionContent(3, charList)}
                                </div>
                            }/>
                            <Accordion title={"Парное оружие дальнего боя"} content={
                                <div>
                                    {getAccordionContent(4, charList)}
                                </div>
                            }/>
                            <Accordion title={"Простое оружие дальнего боя"} content={
                                <div>
                                    {getAccordionContent(5, charList)}
                                </div>
                            }/>
                            <Accordion title={"Двуручное оружие дальнего боя"} content={
                                <div>
                                    {getAccordionContent(6, charList)}
                                </div>
                            }/>
                            <Accordion title={"Боеприпасы"} content={
                                <div>
                                    {getAccordionContent(7, charList)}
                                </div>
                            }/>
                        </div>
                    }/>
                    <Accordion title={"Доспехи и щиты"} content={
                        <div>
                            <Accordion title={"Типы доспехов"} content={
                                <div>
                                    {usefulFuncs.mapToDiv(armorDescription)}
                                </div>
                            }/>
                            <Accordion title={"Лёгкие доспехи"} content={
                                <div>
                                    {getAccordionContent(8, charList)}
                                </div>
                            }/>
                            <Accordion title={"Средние доспехи"} content={
                                <div>
                                    {getAccordionContent(9, charList)}
                                </div>
                            }/>
                            <Accordion title={"Тяжёлые доспехи"} content={
                                <div>
                                    {getAccordionContent(10, charList)}
                                </div>
                            }/>
                            <Accordion title={"Щиты"} content={
                                <div>
                                    {getAccordionContent(11, charList)}
                                </div>
                            }/>
                        </div>
                    }/>
                    <Accordion title={"Магические усиления и амулеты"} content={
                        <div>
                            <Accordion title={"Правила фокусировок и амулетов"} content={
                                <div>
                                    {usefulFuncs.mapToDiv(mageDescription)}
                                </div>
                            }/>
                            <Accordion title={"Магическая фокусировка"} content={
                                <div>
                                    {getAccordionContent(12, charList)}
                                </div>
                            }/>
                            <Accordion title={"Обереги"} content={
                                <div>
                                    {getAccordionContent(13, charList)}
                                </div>
                            }/>
                        </div>
                    }/>
                    <Accordion title={"Прочее"} content={
                        <div>
                            <div className={"stats-with-field"}>
                                <div className={"bold-red-text"}>{namesMas[14][0][0] + ":"}</div>
                                <IncDecInput val={charList.things.value[0]} setVal={charList.things.setValue(0)}/>
                            </div>

                            {getAccordionContent(14, charList)}
                        </div>
                    }/>
                </div>
            }
        </div>
    );
};

export default Equip;