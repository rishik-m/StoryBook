import React from 'react'
import './View.css'
import Story from './Story';
import Post from './Post';

function View() {
    return (
        <div className= "view">
           <Story />
           <Post />
        </div>
    )
}

export default View
