import {useState} from "react";

const startManeuvers = "- *Отход*(1) - Тратит 1 действие, все перемещения до конца хода не провоцируют атак, вы получаете -1МС на этот ход.\n" +
    "- *Засада*(1) - Тратит 2 действия. В следующий раз, когда вы попробуете напасть на противника, вы проходите соревнование Незаметность против Бдительности, при успехе противник считается Захваченным врасплох.\n" +
    "- *Оборона*(1) - Тратит 1 действие, вы получаете +1КФЗ и с преимуществом наносите провоцированные атаки. Любой щит(кроме баклера), даёт +1КФЗ в обороне. Заканчивает ход.\n" +
    "- *Борьба*(1) - Вы можете попытаться забороть противника, сбив его с ног, сместив на одну клетку, совершив Захват или попытаться сделать что-то ещё(на усмотрение мастера). Соревнование Атлетики против Атлетики/Акробатики противника(На его выбор). Захват стоит 2 действия, сбитие и смещение - 1. Владение умением Борьба позволяет использовать этот навык или защищаться от него с преимуществом."

class CharlistData {
    filling = (len, startValue, str) => {
        let array = Array(len).fill(startValue);
        for (let i = 0; i < array.length; i++) {
            if (localStorage.getItem(str + i) !== null) {
                array[i] = localStorage.getItem(str + i);
            }
        }
        return array;
    }

    changeStateField = (state, name) => (index) => (newVal) => {
        const newStateValue = state[0].slice(0)
        newStateValue[index] = newVal
        state[1](newStateValue)
        for (let i = 0; i < newStateValue.length; i++) {
            localStorage.setItem(name + i, newStateValue[i]);
        }
    };

    changeStateArray = (state, name) => (newVal) => {
        state[1](newVal)
        for (let i = 0; i < newVal.length; i++) {
            localStorage.setItem(name + i, newVal[i]);
        }
    };

    createStateArray = (name, len, startValue) => {
        const state = useState(this.filling(len, startValue, name));
        return {
            value: state[0],
            setValue: this.changeStateField(state, name),
            setArray: this.changeStateArray(state, name),
            name: name
        }
    }


    list = {
        charName: this.createStateArray("charName", 1, "Безымянный"),
        power: this.createStateArray("power", 1, "35"),
        curHits: this.createStateArray("curHits", 1, "0"),
        curMane: this.createStateArray("curMane", 1, "0"),
        boneHits: this.createStateArray("boneHits", 1, "6"),
        boneMane: this.createStateArray("boneMane", 1, "0"),
        inspiration: this.createStateArray("inspiration", 1, "0"),
        harks: this.createStateArray("harks", 6, "0"),
        naviks: this.createStateArray("naviks", 20, "0"),
        vladenia: this.createStateArray("vladenia", 99, "0"),
        equip: this.createStateArray("equip", 1, "Рюкзак, спальник, простая одежда, рацион на 5 дней."),
        mage: this.createStateArray("mage", 1, "0"),
        things: this.createStateArray("things", 500, "0"),
        charClass: this.createStateArray("charClass", 1, ""),
        charRase: this.createStateArray("charRase", 1, ""),
        skills: this.createStateArray("skills", 1, ""),
        spells: this.createStateArray("spells", 1, ""),
        wounds: this.createStateArray("wounds", 1, ""),
        aspects: this.createStateArray("aspects", 1, ""),
        addMaxHits: this.createStateArray("addMaxHits", 1, "0"),
        addMaxMane: this.createStateArray("addMaxMane", 1, "0"),
        money: this.createStateArray("money", 1, "150"),
        sendSkillPoints: this.createStateArray("sendSkillPoints", 1, "0"),
        addKFZ: this.createStateArray("addKFZ", 1, "0"),
        addKMZ: this.createStateArray("addKMZ", 1, "0"),
        addGSI: this.createStateArray("addGSI", 1, "0"),
        addMSI: this.createStateArray("addMSI", 1, "0"),
        addRestHitsHeal: this.createStateArray("addRestHitsHeal", 1, "0"),
        addRestManeHeal: this.createStateArray("addRestManeHeal", 1, "0"),
        addHaltHitsHeal: this.createStateArray("addHaltHitsHeal", 1, "0"),
        addHaltManeHeal: this.createStateArray("addHaltManeHeal", 1, "0"),
        addVladeniaPoint: this.createStateArray("addVladeniaPoint", 1, "0"),
        addDelayedVladeniaPoint: this.createStateArray("addDelayedVladeniaPoint", 1, "0"),
        addCapacity: this.createStateArray("addCapacity", 1, "0"),
        busyCapasity: this.createStateArray("busyCapasity", 1, "0"),
        addSkillPoints: this.createStateArray("addSkillPoints", 1, "0"),
        addCountManeuver: this.createStateArray("addCountManeuver", 1, "0"),
        addMS: this.createStateArray("addMS", 1, "0"),
        maneuvers: this.createStateArray("maneuvers", 1, startManeuvers),
        ability: this.createStateArray("ability", 1, ""),
        history: this.createStateArray("history", 1, ""),
        preAddSkills: this.createStateArray("preAddSkills", 1, ""),
        vliania: this.createStateArray("vliania", 1, ""),
        armorName: this.createStateArray("armorName", 1, ""),
        armorType: this.createStateArray("armorType", 1, "0"),
        armorKFZ: this.createStateArray("armorKFZ", 1, "0"),
        amuletName: this.createStateArray("amuletName", 1, ""),
        amuletType: this.createStateArray("amuletType", 1, "0"),
        amuletKMZ: this.createStateArray("amuletKMZ", 1, "0"),
        boneMainWeapons: this.createStateArray("boneMainWeapons", 1, "0"),
        MODMainWeapons: this.createStateArray("MODMainWeapons", 1, "0"),
        boneAdditionalWeapons: this.createStateArray("boneAdditionalWeapons", 1, "0"),
        MODAdditionalWeapons: this.createStateArray("MODAdditionalWeapons", 1, "0"),
        KFZMainShield: this.createStateArray("KFZMainShield", 1, "0"),
        KFZAdditionalShield: this.createStateArray("KFZAdditionalShield", 1, "0"),
        KFZMainShieldDefense: this.createStateArray("KFZMainShieldDefense", 1, "0"),
        KFZAdditionalShieldDefense: this.createStateArray("KFZAdditionalShieldDefense", 1, "0"),
        nameMainWeapons: this.createStateArray("nameMainWeapons", 1, ""),
        nameAdditionalWeapons: this.createStateArray("nameAdditionalWeapons", 1, ""),
        nameMainShield: this.createStateArray("nameMainShield", 1, ""),
        nameAdditionalShield: this.createStateArray("nameAdditionalShield", 1, ""),
        nameMainFocus: this.createStateArray("nameMainFocus", 1, ""),
        nameAdditionalFocus: this.createStateArray("nameAdditionalFocus", 1, ""),
        BKMainFocus: this.createStateArray("BKMainFocus", 1, "0"),
        BKAdditionalFocus: this.createStateArray("BKAdditionalFocus", 1, "0"),
        currentMainEquip: this.createStateArray("currentMainEquip", 1, "3"),
        currentAdditionalEquip: this.createStateArray("currentAdditionalEquip", 1, "3"),
        currentMainWeaponsType: this.createStateArray("currentMainWeaponsType", 1, "0"),
        currentAdditionalWeaponsType: this.createStateArray("currentAdditionalWeaponsType", 1, "0"),
        defenseMode: this.createStateArray("defenseMode", 1, "0"),
        addMODWeaponsAttack: this.createStateArray("addMODWeaponsAttack", 1, "0"),
        fencingMainWeapons: this.createStateArray("fencingMainWeapons", 1, "0"),
        fencingAdditionalWeapons: this.createStateArray("fencingAdditionalWeapons", 1, "0"),
        addMaxSpells: this.createStateArray("addMaxSpells", 1, "0"),
        intCast: this.createStateArray("intCast", 1, "0"),
        addBK: this.createStateArray("addBK", 1, "0"),
        focusType: this.createStateArray("focusType", 1, "0"),// loader
    }

    mageMDRBonus = +this.list.mage.value[0] === 0 ? 0 :
        (this.list.mage.value[0] === 1 ? (+this.list.harks.value[4]) / 2 : +this.list.harks.value[4])
    ectoMaxHits = (+this.list.boneHits.value[0] !== 0 ? +this.list.boneHits.value[0] + 1 : 0) * 4 +
        +this.list.harks.value[1] * 8 + +this.list.addMaxHits.value[0] + this.list.addGSI.value[0] * 8;
    ectoMaxMane = (+this.list.boneMane.value[0] !== 0 ? +this.list.boneMane.value[0] + 1 : 0) * 4 +
         +this.mageMDRBonus * 8 + +this.list.addMaxMane.value[0] + this.list.addMSI.value[0] * 8;


    detectSign = (val) => {
        return (val < 0 ? "-" : "+") + Math.abs(val)
    }

    SICreate = (val, add) =>
        val === 0 ? +add :
        val < 4 ? "1к4" + this.detectSign((val - 4) / 2 + +add):
        val < 12 ? "1к" + val + (+add === 0 ? "" : "+" + +add) : "1к12" + this.detectSign((val - 12) / 2 + +add)

    boneCreate = (val) => val === 0 || val === "0" ? 0 :
                            val < 4 ? "1к4-" + (4 - val) / 2 :
                                val < 14 ? "1к" + val :
                                    val < 16 ? "1к12+" + (val - 12) / 2 :
                                        val < 18 ? "2к8" :
                                            val < 20 ? "2к8+1" :
                                                val < 22 ? "1к20" : "1к20+" + (val - 20) / 2






    evalValueList = {
        maxHits: this.ectoMaxHits,
        maxMane: this.ectoMaxMane,
        skillPoint: +this.list.power.value[0]
            - 11
            - (+this.list.harks.value.reduce((acc, cur) => acc + +cur, 0) * 2)
            - +this.list.naviks.value.reduce((acc, cur) => acc + +cur, 0)
            - +this.list.sendSkillPoints.value[0]
            + +this.list.addSkillPoints.value[0],
        vladeniaPoint: 5 + +this.list.harks.value[3] + +this.list.addVladeniaPoint.value[0] - (+this.list.vladenia.value.reduce((acc, cur) => acc + +cur, 0)),
        delayedVladeniaPoint: +this.list.harks.value[3] + +this.list.addDelayedVladeniaPoint.value[0],
        maxWeaponsVladeniaRank: this.list.harks.value[0] < 1 && this.list.harks.value[2] < 1 ? "Отсутствие" :
            this.list.harks.value[0] < 6 && this.list.harks.value[2] < 6 || this.list.power.value[0] < 45 ? "Ученик" :
                this.list.harks.value[0] < 8 && this.list.harks.value[2] < 8 || this.list.power.value[0] < 60 ? "Ветеран" : "Мастер",
        maxMisticVladeniaRank: this.list.harks.value[4] < 1 ? "Отсутствие" :
            this.list.harks.value[4] < 6 || this.list.power.value[0] < 45 ? "Ученик" :
                this.list.harks.value[4] < 8 || this.list.power.value[0] < 60 ? "Адепт" : "Мастер",
        maxMagicSchoolCount: this.list.naviks.value[13],
        GSI: this.SICreate(+this.list.boneHits.value[0], (+this.list.addGSI.value[0] + +this.list.harks.value[1])),
        MSI: this.SICreate(+this.list.boneMane.value[0], (+this.list.addMSI.value[0] + this.mageMDRBonus)),
        KFZ: 5 + +this.list.addKFZ.value[0] + +this.list.armorKFZ.value[0] +
            (+this.list.armorType.value[0] > 1 ? 0 : Math.floor(+this.list.harks.value[2] / 2))
        + +this.list.KFZMainShield.value[0] + +this.list.KFZAdditionalShield.value[0] +
            (+this.list.defenseMode.value[0] === 1 ? 1 + +this.list.KFZMainShieldDefense.value[0] + +this.list.KFZAdditionalShieldDefense.value[0] : 0),
        KMZ: 5 + +this.list.harks.value[5] + +this.list.addKMZ.value[0] + +this.list.amuletKMZ.value[0],
        restHitsHeal: (this.ectoMaxHits / 4) + +this.list.addRestHitsHeal.value[0],
        restManeHeal: (this.ectoMaxMane / 4) + +this.list.addRestManeHeal.value[0],
        haltHitsHeal: (this.ectoMaxHits / 8) + +this.list.addHaltHitsHeal.value[0],
        haltManeHeal: (this.ectoMaxMane / 8) + +this.list.addHaltManeHeal.value[0],
        capacity: 3 + +this.list.harks.value[0] + +this.list.addCapacity.value[0],
        countManeuver: 5 + 2 * +this.list.harks.value[4] + +this.list.addCountManeuver.value[0],
        MS: 6 + +this.list.addMS.value[0] - (+this.list.armorType.value[0] > 1 ? 1 : 0) - (+this.list.armorType.value[0] > 2 ? 1 : 0),
        weaponsAttack: "1к20+" + this.boneCreate(this.list.boneMainWeapons.value[0]) + "+" +
            ((+this.list.fencingMainWeapons.value[0] === 0 ? +this.list.harks.value[0] : +this.list.harks.value[2])
                + +this.list.MODMainWeapons.value[0] + +this.list.addMODWeaponsAttack.value[0]),
        weaponsAdditionalAttack: "1к20+" + this.boneCreate(this.list.boneAdditionalWeapons.value[0]) + "+" +
            ((+this.list.fencingAdditionalWeapons.value[0] === 0 ? +this.list.harks.value[0] : +this.list.harks.value[2])
                + +this.list.MODAdditionalWeapons.value[0] + +this.list.addMODWeaponsAttack.value[0]),
        mageAttack: "1к20+" + ((+this.list.intCast.value[0] === 0 ? +this.list.harks.value[4] : +this.list.harks.value[3])
                + +this.list.addBK.value[0] + +this.list.BKMainFocus.value[0] + +this.list.BKAdditionalFocus.value[0]),
        maxSpells: (+this.list.mage.value[0] === 0 ? 0 : 3)
            + +this.list.harks.value[3] * (this.list.vladenia.value.slice(10, 17).reduce((prev, cur) => +prev + +cur, 0))
            + +this.list.addMaxSpells.value[0]
    }
}

export default CharlistData