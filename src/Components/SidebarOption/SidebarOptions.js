import React from "react";
import './SidebarOption.css'

function SidebarOptions({text, Icon}) {

    return (
        <div className="sidebarOption">
            <img className="icon" src={Icon} />
            <h1>{text}</h1>
        </div>
    )

}

export default SidebarOptions;