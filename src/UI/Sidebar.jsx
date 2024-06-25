import React, {useState} from 'react';
import SimpleButton from "./SimpleButton";
import "./Sidebar.css"
import SimpleInput from "./SimpleInput";
import UsefulFuncs from "../UsefulFuncs";

const Sidebar = ({buttonText, data, header, toHtml}) => {
    const [showMenu, setShowMenu] = useState(false)
    const [body, setBody] = useState(data)

    return (
        <div>
            <div className={"sidebar-div-with-button"}>
                <SimpleButton className={"big-button"}
                              onClick={() => setShowMenu(!showMenu)}>
                    {!showMenu ? buttonText : "Свернуть"}
                </SimpleButton>
            </div>

            {
                showMenu ?
                    <div className={"sidebar"}>
                        <div className={"sidebar-header"}>
                            <div className={"big-bold-red-text sidebar-name"}>
                                {header}
                            </div>
                        </div>

                        <div className={"sidebar-find"}>
                            <div className={"bold-red-text"}>
                                Поиск
                            </div>
                            <SimpleInput style={{width: "30rem", fontWeight: "bold"}}
                                         setVal={(findText) => {findText !== "" ?
                                             setBody(UsefulFuncs.findInSkillList(data, findText)) : setBody(data)}}/>
                        </div>
                        <div className={"sidebar-main"}>
                            {toHtml(body)}
                        </div>

                    </div> :
                    <div></div>
            }
        </div>
    );
};

export default Sidebar;