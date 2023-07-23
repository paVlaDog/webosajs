import React from 'react';
import IncDecInput from "./IncDecInput";
import "./BoneIncDecInput.css"

const BoneIncDecInput = ({val, setVal}) => {
    return (
        <div className={"bone-input"}>
            <IncDecInput val={
                val === 0 || val === "0" ? 0 :
                    val < 4 ? "1к4-" + (4 - val) / 2 :
                        val < 14 ? "1к" + val :
                            val < 16 ? "1к12+" + (val - 12) / 2 :
                                val < 18 ? "2к8" :
                                    val < 20 ? "2к8+1" :
                                        val < 22 ? "1к20" : "1к20+" + (val - 20) / 2
            } setVal={setVal} decFunc={() => setVal(val <= 2 ? 0 : +val - 2)} incFunc={() => setVal(+val + 2)} disabled={true} className={"bone-inc-dec-input"}/>
        </div>
    );
};

export default BoneIncDecInput;