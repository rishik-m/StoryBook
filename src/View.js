import React, { useEffect } from 'react'
import './View.css'
import Story from './Story';
import Post from './Post';
import Message from './Message';
import { useState } from 'react';
import db from './firebase';

function View() {

   const [posts, setPosts] = useState([]);

   useEffect(() => {
      db.collection("posts").orderBy('timestamp', "desc").onSnapshot((snapshot) => 
         setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
   }, [])

    return (
        <div className= "view">
           <Story />
           <Post />

           {posts.map((post) => (
              <Message
                 key= {post.id}
                 profile= {post.data.profile}
                 text= {post.data.text}
                 timestamp= {post.data.timestamp}
                 username= {post.data.username}
                 image= {post.data.image}
              />
           ))}
        </div>
    )
}

export default View
