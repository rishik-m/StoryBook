import React from 'react'
import './Story.css';
import StoryInfo from './StoryInfo';

function Story() {
    return (
        <div className= "story">
            <StoryInfo
               image= "https://images.unsplash.com/photo-1536834489155-cc2b1f008066?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8MzMyOTg3NHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               profile= "https://images.unsplash.com/uploads/14110635637836178f553/dcc2ccd9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               title= "Anna Head"
            />
            <StoryInfo
               image= "https://images.unsplash.com/photo-1488229297570-58520851e868?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTV8MzMyOTg3NHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               profile= "https://images.unsplash.com/photo-1553837851-341a0c2509e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcCUyMGd1eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
               title= "Steve Wagh" 
            />
            <StoryInfo
               image= "https://images.unsplash.com/photo-1611782712936-6247d9711816?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dWVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
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
