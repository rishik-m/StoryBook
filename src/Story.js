import React from 'react'
import './Story.css';
import StoryInfo from './StoryInfo';

function Story() {
    return (
        <div className= "story">
            <StoryInfo
               image= "https://images.unsplash.com/photo-1549793959-284bccc3331b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               profile= "https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               title= "Anna Head"
            />
            <StoryInfo
               image= "https://images.unsplash.com/photo-1612885594304-ca622fff47e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxpZ2h0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               profile= "https://images.unsplash.com/photo-1553837851-341a0c2509e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcCUyMGd1eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               title= "Steve Wagh" 
            />
            <StoryInfo
               image= "https://images.unsplash.com/photo-1579546929556-bf8352f5889c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGxpZ2h0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               profile= "https://images.unsplash.com/flagged/photo-1585257505726-c9bc7954eeaa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRldmVsb3AlMjBndXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               title= "Stuart Broad" 
            />
            <StoryInfo
               image= "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8c2NyZWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               profile= "https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               title= "Jimmy Root"
            />
        </div>
    )
}

export default Story
