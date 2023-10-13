import React from 'react'
import fblogo from '../images/images/logo.png'

import {  ArrowsAngleExpand, Bell, ChatLeftDots, CollectionPlay, Flag, HouseDoor, People,  PersonCircle, Plus, Power, Search, ShopWindow} from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

export default function Header() {
  const user = useSelector((state)=> state.user.value)
  return (
    <div className='p-3 d-flex background-white   justify-content-between'>
      <div className=' d-flex align-items-center '>
          <img src={fblogo} alt='fb-logo' width='40px'></img>
          <div className='search-container  algin-items-center mx-3 p-1 border-radius'>
          <Search className='ms-1 me-1'/>
          <input type='search' placeholder='Search-Facebook' className=' search-box mx-1'/>
         </div>
         
         <div className='d-flex menu fs-3 cursor-pointer '>
          <div className='menu-icon-hover active'>
             <HouseDoor/>
          </div>
          <div className='menu-icon-hover'>
            <Flag/>
           </div>
           <div className='menu-icon-hover'> 
            <CollectionPlay/>
          </div>
          <div className='menu-icon-hover'>
            <ShopWindow/>
          </div>
          <div className='menu-icon-hover'>
            <People/>
          </div>
         </div>
         </div>
         <div className='d-flex align-items-center profile'>
          <div>
            <PersonCircle/>
          </div>
          <b className='username ps-3'>{user.displayName}</b>
          <div>
            <Plus/>
          </div>
          <div>
            <ChatLeftDots/>
          </div>
          <div>
            <Bell/>
          </div>
          <div>
            <button type='button' className='btn background-white' title='logout'>
              <Power className='cursor-pointer'/>
            </button>
          </div>
          
          <div>

          </div>
         </div>
         
        
         
         
          
        
         
    </div>
  )
}
