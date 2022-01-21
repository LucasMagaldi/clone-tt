import React from "react";
import Ttbox from "../Ttbox/Ttbox";
import Post from "../Post/Post";

import './Feed.css'

function Feed() {
    return (       
    <div className="feed">
        <div className="feed--header">
            {/* Header  */}
            <h2>Home</h2>
        </div>
        {/*   TwitterBox  */}

        <Ttbox />
        <Post userName="@89tentacao" displayName="Nogueira" image="https://assets.pinterest.com/ext/embed.html?id=710583647465885601" />
        <Post userName="@Vivendo" displayName="Vivendo" image= "https://assets.pinterest.com/ext/embed.html?id=44121271341431924" />
        <Post />
        <Post />
    </div>
    )
}

export default Feed;