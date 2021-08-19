import { Avatar } from '@material-ui/core';
import React from 'react'
import './StoryInfo.css';

function StoryInfo({image, profile, title}) {
    return (
        <div style= {{ backgroundImage: `url(${image})` }} className= "story-info">
            <Avatar className= "avatar" src= {profile} />
            <h4> {title} </h4>
        </div>
    )
}

export default StoryInfo
