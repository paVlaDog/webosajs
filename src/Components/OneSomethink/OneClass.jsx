import React from 'react';
import "./OneClass.css"

const OneClass = ({name, description, skills}) => {
    return (
        <div className={"one-class"}>
            <div className={"one-class-header"}>
                <h3 className={"one-class-name white-text"}>
                    {name}
                </h3>
            </div>
            <div className={"one-class-main"}>
                <div className={"one-class-description bold-red-text"}>
                    {description}
                </div>
                <div className={"one-class-skills"}>
                    {skills}
                </div>
            </div>

        </div>
    );
};

export default OneClass;