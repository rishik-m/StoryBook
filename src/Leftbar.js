import React from 'react'
import './Leftbar.css'
import Leftrow from './Leftrow';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import EventIcon from '@material-ui/icons/Event';
import { useStateValue } from './StateProvider';

function Leftbar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className= "leftbar">
            <Leftrow src= {user.photoURL} title= {user.displayName} />
            <Leftrow Icon= {PeopleIcon} title= "Friends" />
            <Leftrow Icon= {SupervisedUserCircleIcon} title= "Groups" />
            <Leftrow Icon= {StorefrontIcon} title= "Marketplace" />
            <Leftrow Icon= {VideoLibraryIcon} title= "Watch" />
            <Leftrow Icon= {HistoryIcon} title= "Memories" />
            <Leftrow Icon= {BookmarkIcon} title= "Saved" />
            <Leftrow Icon= {EmojiFlagsIcon} title= "Pages" />
            <Leftrow Icon= {EventIcon} title= "Events" />
        </div>
    )
}

export default Leftbar