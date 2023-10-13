import React from 'react'
import profile from '../../images/images/dp2.png'
import { ChatLeftDots, ChevronExpand, CollectionPlay, Flag, HouseDoor, PlusSquare, ShopWindow } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

export default function Menu() {
    const user = useSelector((state)=> state.user.value)
    return (

        <div className='content-left mb-20'>
            <div className='d-flex align-items-center'>
                <img className='me-2 br-20' src={user.photoUrl} width='35' height='35'alt='profileimage' />
                <b>{user.displayName}</b>
            </div>
          
          <div className='d-flex'>
            <PlusSquare/>
            <b>{"COVID-19 Information Center"}</b>
           </div>
           <div className='d-flex'>
            <HouseDoor/>
            <b>{"Pages"}</b>
           </div>
           <div className='d-flex'>
            <Flag/>
            <b>{"Friends"}</b>
           </div>
           <div className='d-flex'>
            <ChatLeftDots/>
            <b>{"Messanger"}</b>
           </div>
           <div className='d-flex'>
            <ShopWindow/>
            <b>{"MarketPlace"}</b>
           </div>
           <div className='d-flex'>
            <ChevronExpand/>
            <b>{"More"}</b>
           </div>
           

          
        </div>

    )
}
