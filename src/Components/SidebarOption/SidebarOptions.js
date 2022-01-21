import React from "react";
import './SidebarOption.css'

function SidebarOptions({active, text, Icon}) {

    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <img className="icon" src={Icon} />
            <h1>{text}</h1>
        </div>
    )

}

export default SidebarOptions;