import React from 'react';
import SimpleButton from "../UI/SimpleButton";

const defaultCharacter = [[""],["35"],["28"],["28"],["6"],["6"],["0"],["0","0","0","0","0","0"],["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],["0","0","0","0",0,"0","0","0","0","0","0","0","0","0","0","0","0",0,0,"0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],[""],[""],[""],[""],[""],[""],[""],["0"],["0"],["150"],["0"],["0"],["0"],["0"],["0"],["0"],["0"],["0"],["0"]]

const Loader = ({charList}) => {
    let JSONdata = JSON.stringify(Object.entries(charList).map((el) => el[1].value));
    let dataFile;

    function dumpCharacter(allData) {
        let blob1 = new Blob([allData], { type: "text/json;charset=utf-8" });

        let isIE = !!document.documentMode;
        if (isIE) {
            window.navigator.msSaveBlob(blob1, "Customers.txt");
        } else {
            let url = window.URL || window.webkitURL;
            let a = document.createElement("a");
            a.download = charList.charName.value[0] + ".txt";
            a.href = url.createObjectURL(blob1);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }

    async function downloadFile (file) {
        if(!file.target.files.length){
            return
        }
        const filesList = Array.from(file.target.files)
        const fileText = await filesList[0].text()
        dataFile = JSON.parse(fileText)

        file.target.files = [];
    }

    function dowloadCharacter (arrayData) {
        const setData = Object.entries(charList).map((el) => el[1].setArray);

        for (let i=0; i < arrayData.length; i++) {
            setData[i](arrayData[i]);
        }
    }

    function resetCharacter() {
        const setData = Object.entries(charList).map((el) => el[1].setArray);
        for (let i=0; i < defaultCharacter.length; i++) {
            setData[i](defaultCharacter[i]);
        }
    }

    return (
        <div className={"loader"}>
            <SimpleButton onClick={() => {dumpCharacter(JSONdata)}}>Save</SimpleButton>
            <input type={"file"} onChange={downloadFile}/>
            <SimpleButton onClick={() => {dowloadCharacter(dataFile)}}>Load</SimpleButton>
            <SimpleButton onClick={resetCharacter}>Reset</SimpleButton>
        </div>
    );
};

export default Loader;