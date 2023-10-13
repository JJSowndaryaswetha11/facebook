import { Timestamp, addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { CameraFill, EmojiSmile, Images, PersonCircle } from 'react-bootstrap-icons'
import db from '../../Firebase'
import { useSelector } from 'react-redux'

export default function CreatePost(props) {
      const [message,setMessage]= useState("") 
      
      const user = useSelector((state)=> state.user.value)
        
      
      const [image,setImage] = useState("")
  const handleSubmit = () => {
    addDoc(collection(db, "posts"),{
      message,
      name:user.displayName,
      image,
      timestamp:Timestamp.fromDate(new Date()),
      profilepic:user.photoUrl
    }).then(()=> {
      props.fetchposts()
      setImage("")
      setMessage("")
    })
  }
  return (
    <div className='create-post background-white border my-4'>
       <div className='d-flex align-items-center mx-3'>
        <PersonCircle className='fs-1 pe-2'/>
        <input type='search'placeholder="What's On your mind??" className='search-box' style={{flex:1}} 
        value={message} onChange={(e)=> setMessage(e.target.value)}/>
        <input type='search'placeholder="imgurl" className='search-box' 
        value={image} onChange={(e)=> setImage(e.target.value)}/>
        <button className='btn btn-success ms-3 postbutton 'onClick={handleSubmit}>Post</button>
       </div>
       <div className='d-flex pt-5 pb-1 justify-content-evenly'>
        <div className='d-flex post-icon align-items-center'>
          <CameraFill color='red'/> Live video
        </div>
        <div className='d-flex post-icon align-items-center'>
          <Images color='green'/> PhotoVideo
        </div>
        <div className='d-flex post-icon align-items-center'>
          <EmojiSmile color='gold'/> Feeling activity
        </div>
       </div>

    </div>
  )
}
