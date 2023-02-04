import {useState} from "react";

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

    changeStateArray = (state, name) => (index) => (newVal) => {
        const newStateValue = state[0].slice(0)
        newStateValue[index] = newVal
        state[1](newStateValue)
        for (let i = 0; i < newStateValue.length; i++) {
            localStorage.setItem(name + i, newStateValue[i]);
        }
    };

    createStateArray = (name, len, startValue) => {
        const state = useState(this.filling(len, startValue, name));
        return {
            value: state[0],
            setValue: this.changeStateArray(state, name),
            setArray: state[1],
            name: name
        }
    }

    list = {
        charName: this.createStateArray("charName", 1, "Безымянный"),
        power: this.createStateArray("power", 1, "35"),
        curHits: this.createStateArray("curHits", 1, "0"),
        curMane: this.createStateArray("curMane", 1, "0"),
        boneHits: this.createStateArray("boneHits", 1, "6"),
        boneMane: this.createStateArray("boneMane", 1, "6"),
        inspiration: this.createStateArray("inspiration", 1, "0"),
        harks: this.createStateArray("harks", 6, "0"),
        naviks: this.createStateArray("naviks", 20, "0"),
        vladenia: this.createStateArray("vladenia", 99, "0"),
        equip: this.createStateArray("equip", 1, ""),
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
    }

    ectoMaxHits = (+this.list.boneHits.value[0] + 1) * 4 + +this.list.harks.value[1] * 8 + +this.list.addMaxHits.value[0];
    ectoMaxMane = (+this.list.boneHits.value[0] + 1) * 4 + +this.list.harks.value[4] * 8 + +this.list.addMaxMane.value[0];

    evalValueList = {
        maxHits: this.ectoMaxHits,
        maxMane: this.ectoMaxMane,
        skillPoint: +this.list.power.value[0] - (+this.list.harks.value.reduce((acc, cur) => acc + +cur, 0) * 2) - +this.list.naviks.value.reduce((acc, cur) => acc + +cur, 0) - this.list.sendSkillPoints.value[0],
        maxWeaponsVladeniaRank: this.list.harks.value[0] < 1 && this.list.harks.value[2] < 1 ? "Отсутствие" :
            this.list.harks.value[0] < 6 && this.list.harks.value[2] < 6 || this.list.power.value[0] < 45 ? "Ученик" :
                this.list.harks.value[0] < 8 && this.list.harks.value[2] < 8 || this.list.power.value[0] < 60 ? "Ветеран" : "Мастер",
        maxMisticVladeniaRank: this.list.harks.value[4] < 1 ? "Отсутствие" :
            this.list.harks.value[4] < 6 || this.list.power.value[0] < 45 ? "Ученик" :
                this.list.harks.value[4] < 8 || this.list.power.value[0] < 60 ? "Адепт" : "Мастер",
        maxMagicSchoolCount: this.list.naviks.value[13],
        GSI: (+this.list.boneHits.value[0] < 4 ? "1к4-" + (4 - +this.list.boneHits.value[0]) / 2 :
                +this.list.boneHits.value[0] < 12 ? "1к" + +this.list.boneHits.value[0] :
                    "1к12+" + (+this.list.boneHits.value[0] - 12) / 2)
                        + "+" + (+this.list.addGSI.value[0] + +this.list.harks.value[1]),
        MSI: (+this.list.boneMane.value[0] < 4 ? "1к4-" + (4 - +this.list.boneMane.value[0]) / 2 :
                +this.list.boneMane.value[0] < 12 ? "1к" + +this.list.boneMane.value[0] :
                    "1к12+" + (+this.list.boneMane.value[0] - 12) / 2)
                        + "+" + this.list.addMSI.value[0],
        KFZ: 5 + +this.list.harks.value[2] + +this.list.addKFZ.value[0],
        KMZ: 5 + +this.list.harks.value[5] + +this.list.addKMZ.value[0],
        restHitsHeal: (this.ectoMaxHits / 2) + +this.list.addRestHitsHeal.value[0],
        restManeHeal: (this.ectoMaxMane / 2) + +this.list.addRestManeHeal.value[0],
        haltHitsHeal: (this.ectoMaxHits / 4) + +this.list.addHaltHitsHeal.value[0],
        haltManeHeal: (this.ectoMaxMane / 4) + +this.list.addHaltManeHeal.value[0],
    }
}

export default CharlistData