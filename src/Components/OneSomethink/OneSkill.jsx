import React from 'react';
import "./OneSkill.css"

const OneSkill = ({name, cost, needs, effects, tags, ...props}) => {
    return (
        <div className={"one-skill"} {...props}>
            <div className={"one-skill-header"}>
                <h4 className={"one-skill-name white-text"}>
                    {name}
                </h4>
            </div>
            <div className={"one-skill-main"}>
                <div className={"one-skill-costs bold-red-text"}>
                    Стоимость: {cost} очков навыков
                </div>
                <div className={"one-skill-needs bold-red-text"}>
                    Требования: {needs}
                </div>
                <div className={"one-skill-tags bold-red-text"}>
                    Тэги: {tags}
                </div>
                <div className={"one-skill-effects bold-red-text"}>
                    {effects}
                </div>
            </div>
        </div>
    );
};

export default OneSkill;