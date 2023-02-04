import React from 'react';
import "./SimpleTextarea.css"

const MyTextArea = React.forwardRef((props, ref) => {
    return (
        <textarea ref={ref} className={"simple-textarea"} {...props}/>
    );
});

export default MyTextArea;