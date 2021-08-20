import { Avatar } from '@material-ui/core';
import React from 'react'
import './Message.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';

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
            <div className= "message-options">
                <div className= "message-option">
                    <ThumbUpIcon />
                    <p> Like </p>
                </div>
                <div className= "message-option">
                    <ChatBubbleOutlineIcon />
                    <p> Comment </p>
                </div>
                <div className= "message-option">
                    <NearMeIcon />
                    <p> Share </p>
                </div>
            </div>
        </div>
    )
}

export default Message
