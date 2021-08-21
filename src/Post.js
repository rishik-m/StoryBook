import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import './Post.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function Post() {

    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleChangeImg(e) {
        setImage(e.target.value);
    }

    const handleClick= (e) => {
        e.preventDefault();

        db.collection('posts').add({
            text: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profile: user.photoURL,
            username: user.displayName,
            image: image
        })


        setInput("");
        setImage("");
    }

    return (
        <div className= "post">
           <div className= "post-top">
              <Avatar src= {user.photoURL} />
              <form>
                 <input onChange= {handleChange} value= {input} placeholder= {`What's on your mind, ${user.displayName}?`} className= "top-input" />
                 <input value= {image} onChange= {handleChangeImg} placeholder= "Image URL" />
                 <button onClick= {handleClick} type= "submit"> SUBMIT </button>
              </form>
           </div>
           <div className= "post-bottom">
              <div className= "bottom-options">
                  <VideocamIcon style= {{ color: "red" }} />
                  <h3> Live Video </h3>
              </div>
              <div className= "bottom-options">
                  <PhotoLibraryIcon style= {{ color: "green" }} />
                  <h3> Photo/Video </h3>
              </div>
              <div className= "bottom-options">
                  <InsertEmoticonIcon style= {{ color: "orange" }} />
                  <h3> Feeling/Activity </h3>
              </div>
           </div> 
        </div>
    )
}

export default Post
