import React from 'react'

export default function Status(props) {
  return (
    <div className='status'>
        <img src = {props.imgurl} width={200} height={350} className="image" alt='statusimage ' />
        <img src={props.profileUrl} height={45} width={45} alt='status-profileclass' className='status-profile'/>
        <div className='name'> <b>{props.name}</b></div>
    </div>
  )
}
