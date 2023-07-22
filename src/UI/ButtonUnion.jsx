import React from 'react';
import SimpleButton from "./SimpleButton";
import "./ButtonUnion.css"

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

const ButtonUnion = ({count, namesArray, chooseButton, setChooseButton}) => {
    const allButton = []

    for (let i = 0; i < count; i++) {
        allButton.push(<SimpleButton
            style={{...(i === 0 ? buttonInUnionStyleLeft :
                    i === count - 1 ? buttonInUnionStyleRight : buttonInUnionStyleCenter),
                color: +chooseButton === i ? "darkred" : "white",
                backgroundColor: +chooseButton === i ? "bisque" : "goldenrod"
            }}
            className={"button-in-union first-button"}
            onClick={() => setChooseButton(i)}
            // key ={"sgsrfesgesgesg" + i}
        >{namesArray[i]}</SimpleButton>)
    }

    return (
        <div className={"button-union"}>
            {allButton}
        </div>
    );
};

export default ButtonUnion;