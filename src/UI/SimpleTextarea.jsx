import React from 'react';
import "./SimpleTextarea.css"

const MyTextArea = React.forwardRef((props, ref) => {
    return (
        <div>
            <textarea ref={ref} className={"simple-textarea"} {...props}/>
        </div>

    );
});

export default MyTextArea;