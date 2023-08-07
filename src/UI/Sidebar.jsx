import React, {useState} from 'react';
import SimpleButton from "./SimpleButton";
import "./Sidebar.css"
import SimpleInput from "./SimpleInput";

const Sidebar = ({buttonText, children, header}) => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <div className={"sidebar-div-with-button"}>
                <SimpleButton className={"big-button"} onClick={() => {setShowMenu(!showMenu)}}>{!showMenu ? buttonText : "Свернуть"}</SimpleButton>
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
                            <SimpleInput style={{width: "30rem", fontWeight: "bold"}} val={"Скоро будет"} setVal={() => {}}/>
                        </div>
                        <div className={"sidebar-main"}>
                            {children}
                        </div>

                    </div> :
                    <div></div>
            }
        </div>
    );
};

export default Sidebar;