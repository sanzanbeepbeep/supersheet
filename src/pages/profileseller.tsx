import React from 'react'
import Navbartop from '../components/navbar/NavbarTop'
import Topprofile from '../components/Sellerprofile/topprofile'
import Achivement from '../components/Sellerprofile/achivement'
import Card from '../components/Cardshow/Showitems'

const ProfileSeller = () => {

  return (
    <>
      <Navbartop/>
      <Topprofile/>
      <Achivement/>
      <div className='w-10/12 mx-auto'>
        <p className='font-extrabold text-3xl'>ชีทของผู้เขียน</p>
      </div>
      <Card/>
    </>
  )
}

export default ProfileSeller