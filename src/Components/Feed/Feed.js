import React from "react";
import Ttbox from "../Ttbox/Ttbox";

import './Feed.css'

function Feed() {
    return (       
    <div className="feed">
        <div className="feed--header">
            {/* Header  */}
            <h1>Header</h1>
        </div>
        {/*   TwitterBox  */}

        <Ttbox />

    </div>
    )
}

export default Feed;