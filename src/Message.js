import { Avatar } from '@material-ui/core';
import React from 'react'
import './Message.css';

function Message({ username, profile, image, text, time }) {
    return (
        <div className= "message">
            <div className= "message-top">
               <Avatar src= {profile} className= "message-avatar" />
               <div className= "top-det">
                  <h3> {username} </h3>
                  <p> Time </p>
               </div>
            </div>
            <div className= "message-bottom">
               <p> {text} </p>
            </div>
            <div className= "message-img">
               <img src= {image} alt= "" />
            </div>
        </div>
    )
}

export default Message
