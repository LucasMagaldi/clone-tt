import React from "react";

import './Post.css'

function Post({
    displayName,
    userName,
    verified,
    timestamp,
    text,
    image,
    avatar 
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <img src="" alt="" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}</h3>
                        <h5>{userName}</h5>
                    </div>
                    <div className="post__headerDescription">
                        <p>Hahahahahahah, S2</p>
                    </div>
                </div>
                <iframe src={image} height="600" width="480" frameborder="0" scrolling="no"  ></iframe>
                <div className="post__footer">
                    <a>
                     <img className="post__footer-img" src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-chat-ui-dreamstale-lineal-dreamstale.png"/>
                    </a>
                    <a>
                    <img className="post__footer-img" src="https://img.icons8.com/ios/50/000000/retweet.png"/>
                    </a>
                    <a>
                    <img className="post__footer-img" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-heart-casino-kiranshastry-lineal-kiranshastry.png"/>
                    </a>
                    <a>
                    <img className="post__footer-img" src="https://img.icons8.com/material-sharp/24/000000/share-3.png"/>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Post;