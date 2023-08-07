import React, {useState} from 'react';
import SimpleButton from "./SimpleButton";
import "./Sidebar.css"

const Sidebar = ({buttonText, children}) => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <SimpleButton onClick={() => {setShowMenu(!showMenu)}}>{buttonText}</SimpleButton>
            {
                showMenu ?
                    <div className={"sidebar"}>
                        <div className={"into-sidebar"}>
                            {children}
                        </div>
                        <SimpleButton onClick={() => {setShowMenu(!showMenu)}}>Скрыть</SimpleButton>
                    </div> :
                    <div></div>
            }
        </div>
    );
};

export default Sidebar;