import React, { useEffect, useState } from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebaseConfig'
import { collection, orderBy, onSnapshot,  } from 'firebase/firestore'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "posts"),orderBy("timestamp", "desc"),(querySnapshot) =>{
      
      setPosts(querySnapshot.docs.map((doc)=>({id: doc.id, data:doc.data()})))
    })
   
  }, [])

  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        {posts.map((post) =>(
          <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          />
        ))}
    </div>
  )
}

export default Feed
