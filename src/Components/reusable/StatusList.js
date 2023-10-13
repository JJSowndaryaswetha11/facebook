import React from 'react'
import Status from './Status'
import { ImageList } from '../../Utils'
import profile from '../../images/images/pic1.jpeg'
import profile1 from '../../images/images/pic3.jpeg'
import profiles from '../../images/images/pic2.jpeg'
import profile2 from '../../images/images/post.jpeg'

export default function StatusList() {
  return (
    <div className='d-flex content-status'>
         <Status imgurl={ImageList[0].download_url} profileUrl={profile}
         name="Sowndarya"/>
         <Status imgurl={ImageList[1].download_url} profileUrl={profile1}
         name="Swetha"/>
         <Status imgurl={ImageList[2].download_url} profileUrl={profiles}
         name="Bala"/>
         <Status imgurl={ImageList[3].download_url} profileUrl={profile2}
         name="venkatesh"/>
         
        
    </div>
  )
}
