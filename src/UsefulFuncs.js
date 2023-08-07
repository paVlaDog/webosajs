// import React from "@types/react";

const usefulFuncs = {
    mapToDiv: (str) => {
        return str.split("\n").map((el) => {return <div className={"bold-red-text"}>{el}</div>})
    },
    strArrayToDivArray: (mas) => {
        return mas.map(el => <div className={"bold-red-text"}>{el}</div>)
    }
}

export default usefulFuncs