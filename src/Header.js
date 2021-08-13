import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
                    <input type= "text" placeholder= "Search StoryBook" />
                </div>
            </div>
            <div className= "header-cent">
                <div className= "header-icons header-icons--active">
                    <HomeIcon fontSize= "large" />
                </div>
                <div className= "header-icons">
                    <SupervisedUserCircleIcon fontSize= "large" />
                </div>
                <div className= "header-icons">
                    <StorefrontIcon fontSize= "large" />
                </div>
                <div className= "header-icons">
                    <SubscriptionsIcon fontSize= "large" />
                </div>
                <div className= "header-icons">
                    <MenuIcon fontSize= "large" />
                </div>
            </div>
            <div className= "header-right">
                <div className= "header_right-options">
                   <Avatar />
                   <h4> Rishik </h4>
                </div>
                <IconButton> <ListIcon /> </IconButton>
                <IconButton> <MessageIcon /> </IconButton>
                <IconButton> <NotificationsNoneIcon /> </IconButton>
                <IconButton> <ArrowDropDownIcon /> </IconButton>
            </div>
        </div>
    )
}

export default Header
