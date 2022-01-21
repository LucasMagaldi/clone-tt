import React from "react";
import './Ttbox.css'

function Ttbox() {
    return (
        <div className="ttbox">
            <form>
                <div className="ttbox--input">
                    <img className="profile--photo" src="https://i0.wp.com/arteref.com/wp-content/uploads/2019/07/Releitura-A-criac%CC%A7a%CC%83o-de-Ada%CC%83o.jpg?fit=900%2C700&ssl=1" />
                    <input placeholder="What is happening ?" type="text" />
                </div>  
                <button className="tt-button">Tweet</button>
            </form>
        </div>
    )
}


export default Ttbox;