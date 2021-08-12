import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className= "header">
            <div className= "header-left">
                <img
                    src= {process.env.PUBLIC_URL + "/story.png"}
                    alt= "" 
                />
                <div className= "header-input">
                    <SearchIcon />
                    <input type= "text" />
                </div>
            </div>
            <div className= "header-cent"></div>
            <div className= "header-right"></div>
        </div>
    )
}

export default Header
