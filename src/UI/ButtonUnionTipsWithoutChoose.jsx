import React, {useState} from 'react';
import SimpleButton from "./SimpleButton";
import "./ButtonUnionTips.css"
import ButtonUnion from "./ButtonUnion";

const buttonInUnionStyle = {
    marginLeft: "0",
    marginRight: "0",
}

const buttonInUnionStyleLeft = {
    ...buttonInUnionStyle,
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px"
}

const buttonInUnionStyleCenter = {
    ...buttonInUnionStyle,
    borderRadius: "0px"
}

const buttonInUnionStyleRight = {
    ...buttonInUnionStyle,
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px"
}

const ButtonUnionTips = ({count, namesArray, tipsArray, chooseButton, setChooseButton}) => {
    const allButton = []
    const allTips = []

    for (let i = 0; i < count; i++) {
        allButton.push(<SimpleButton
            style={{...(i === 0 ? buttonInUnionStyleLeft :
            i === count - 1 ? buttonInUnionStyleRight : buttonInUnionStyleCenter),
                color: +chooseButton === i ? "darkred" : "white",
                backgroundColor: +chooseButton === i ? "bisque" : "goldenrod"
            }}
            className={"button-in-union first-button"}
            onClick={() => setChooseButton(+i)}
        >{namesArray[i]}</SimpleButton>)
    }

    for (let i = 0; i < count; i++) {
        allTips.push(<div>{+chooseButton === i && tipsArray[i]}</div>)
    }

    return (
        <div>
            <div className={"button-union"}>
                {allButton}
            </div>
            <div>
                {allTips}
            </div>
        </div>
    );
};

export default ButtonUnionTips;