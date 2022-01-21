import React from "react";
import './Sidebar.css'

import SidebarOptions from "../SidebarOption/SidebarOptions";


function Sidebar() {
    return (
        <div className="sidebar">
            <img className="tt-logo" src="https://cdn-icons-png.flaticon.com/512/733/733579.png"/>
            <SidebarOptions active Icon="https://cdn-icons.flaticon.com/png/512/4849/premium/4849108.png?token=exp=1642710906~hmac=180570a86f5e58415f4071f62a0f4399" text="Home"/>
            <SidebarOptions Icon= "https://cdn-icons-png.flaticon.com/512/1827/1827975.png"  text="Discover"/>
            <SidebarOptions Icon="https://cdn-icons.flaticon.com/png/512/2326/premium/2326010.png?token=exp=1642710600~hmac=3a674b99dc0a8f34e78d4a0031a810a5" text="Notifications"/>
            <SidebarOptions Icon= "https://cdn-icons.flaticon.com/png/512/5063/premium/5063960.png?token=exp=1642710780~hmac=c2d08e43858037dde489050bd570e38a"  text="Mensages"/>
            <SidebarOptions Icon= "https://cdn-icons.flaticon.com/png/512/4460/premium/4460398.png?token=exp=1642711253~hmac=76c34aa7587eeb1c2814b060171a3adf"  text="Itens"/>
            <SidebarOptions Icon="https://cdn-icons-png.flaticon.com/512/507/507205.png" text="List"/>
            <SidebarOptions Icon= "https://cdn-icons-png.flaticon.com/512/1077/1077063.png"  text="Profile"/>
        
            <button className="sidebar-button">TWETT</button>
        </div>
    )
}

export default Sidebar;