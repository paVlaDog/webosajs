import OneRace from "./Components/OneSomethink/OneRace";

function parseFile(file, parse) {
    return async function (setAll) {
        fetch(file).then(response => response.text().then(text => setAll(parse(text))));
    }
}

function getSkillsSpellsRaceClass () {
    const parseAllSkills = parseFile('OsaRpgRules/Skills.md', parseSkills)
    const parseAllRaces = parseFile('OsaRpgRules/Rase.md', parseRaces)
    return [parseAllSkills, "", parseAllRaces, ""]
}

function parseSkills(str) {
    return str.split("\r\n\r\n").map(str => parseSkill(str))
}

function parseSkill(str) {
    let name = ""
    let cost = ""
    let needs = ""
    let tags = ""
    let description = ""
    let start = 0
    let mode = "findNameBegin"
    for (let i = 0; i < str.length; i++) {
        if (mode === "findNameEnd" && i < str.length - 1 && str[i] === "*" && str[i + 1] === "*") {
            name = str.substring(start, i)
            start = i + 2
            mode = "findCostBegin"
            break
        }
        if (mode === "findNameBegin" && i < str.length - 1 && str[i] === "*" && str[i + 1] === "*") {
            start = i + 2
            mode = "findNameEnd"
        }
    }
    for (let i = start; i < str.length; i++) {
        if (mode === "findCostEnd" && str[i] === ")") {
            cost = str.substring(start, i)
            start = i + 1
            mode = "findNextElBegin"
            break
        }
        if (mode === "findCostBegin" && str[i] === "(") {
            start = i + 1
            mode = "findCostEnd"
        }
    }
    for (let i = start; i < str.length; i++) {
        if (mode === "findNeedsEnd" && str[i] === ")") {
            needs += str.substring(start, i)
            start = i + 1
            mode = "findNextElBegin"
        }
        if (mode === "findNextElBegin" && str[i] === "(") {
            start = i + 1
            mode = "findNeedsEnd"
        }

        if (mode === "findTagsEnd" && str[i] === "}") {
            tags += str.substring(start, i)
            start = i + 1
            mode = "findNextElBegin"
        }
        if (mode === "findNextElBegin" && str[i] === "{") {
            start = i + 1
            mode = "findTagsEnd"
        }

        if (mode === "findNextElBegin" && str[i] === "[") {
            let parsedManeuverWord = parseWord(str, i, "эффект")
            if (parsedManeuverWord[0]) {
                i = parsedManeuverWord[1]
                parseMeneuver()
            }
        }

        if (mode === "findNextElBegin" && str[i] === "-") {
            description += str.substring(i + 1, str.length)
            break
        }
    }
    return {name: name, cost: cost, needs: needs, tags: tags, effects: description}
}

function parseWord(str, index, word) {
    let newIndex = index
    for (; str[newIndex] === word[newIndex - index]; newIndex++) {
        //
    }
    if (newIndex - index === word.length) {
        return [true, newIndex]
    } else {
        return [false, index]
    }
}

function parseRaces(str) {
    const ans = str.split("###").filter(el => el.trim() !== "").map(str => parseRace(str));
    return ans
}

function parseRace(str) {
    let name = ""
    let description = ""
    let stats = ""
    let skills = ""
    let start = 0
    let mode = "findNameEnd"
    for (let i = 0; i < str.length; i++) {
        if (mode === "findNameEnd" && str[i] === "\r" || str[i] === "\n") {
            name = str.substring(start, i)
            start = i + 1
            mode = "findDescriptionBegin"
            break
        }
    }

    const mas = str.substring(start, str.length).split("**Основные параметры:**")
    const masSmall = mas[1].split("**Способности:**")

    description = mas[0]
    stats = masSmall[0].split("\r")
    skills = masSmall[1].split(",").map(el => el.trim())

    return {name: name, description: description, stats: stats, skills: skills}
}

export default getSkillsSpellsRaceClass;