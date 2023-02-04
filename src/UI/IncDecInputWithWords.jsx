import React from 'react';
import IncDecInput from "./IncDecInput";

const IncDecInputWithWords = ({val, setVal, mapArray, ...props}) => {
    return (
        <IncDecInput className={"one-navik-inp"} val={(+val >= 0 && +val < mapArray.size) ? mapArray.get(+val) : +val} setVal={setVal}
                     decFunc={() => setVal(+val-1)} incFunc={() => setVal(+val+1)} {...props}/>

    );
};

export default IncDecInputWithWords;