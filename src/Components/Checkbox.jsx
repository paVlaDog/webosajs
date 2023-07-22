import React from 'react';
import "./Checkbox.css";

const Checkbox = ({val, setVal, names, ...props}) => {
    // const [checked, setChecked] = useState(true);

    function changeCheckbox() {
        setVal(+val === 0 ? 1 : 0);
    }

    return <div className={+val === 0 ? "simple-button" : "other-simple-button"}>
        <button {...props} onClick={(e) => {changeCheckbox()}}>
            {+val === 0 ? names[0] : names[1]}
        </button>
    </div>
};

export default Checkbox;