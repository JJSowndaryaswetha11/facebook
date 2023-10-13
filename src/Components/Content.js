import React, { useEffect, useState } from 'react'
import Menu from './reusable/Menu'
import StatusList from './reusable/StatusList'
import CreatePost from './reusable/CreatePost'
import Post from './reusable/Post'
import profile from'../images/images/pic1.jpeg'
import image from '../images/images/pic2.jpeg'
import db from '../Firebase'
import {getDocs,collection} from 'firebase/firestore'






export default function Content() {
  const[posts,setPosts] = useState([])
  const fetchposts=async()=> {
    const querySnapshot = await getDocs(collection(db,"posts"));
    let temp =[]
    querySnapshot.forEach((doc)=>{
      temp.push({id: doc.id,...doc.data()})
    })
    temp= temp.sort(function(x,y){
        return y.timestamp -x.timestamp
    })
    setPosts(temp)
      
    
  }
  useEffect(()=> {
    fetchposts();

  },[])

  return (
    <div className='d-flex pt-4 ms-3'>
    <Menu/>
    <div className='p-20'>
      <StatusList/>
      <CreatePost fetchposts={fetchposts}/>
      {
        posts.map((post) => <Post {...post}/>)
      }
      
    </div>
    </div>
  )
}
