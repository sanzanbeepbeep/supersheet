import React from 'react'
import Navbar from '../components/navbar/NavbarTop'
import ProfileMenu from '../components/Profile/ProfileMenuSeller'
import BuyerMenu from '../components/Profile/BuyerMenu'
import EditProfile from '../components/Profile/EditProfile'


const profilebuyer = () => {
  return (
    <>
        <Navbar/>
        <div className='flex flex-row justify-center w-4/5 mx-auto my-16'>
            <div className='w-1/5'>
                <ProfileMenu/>
            </div>
            <div>
                <BuyerMenu/>
            </div>
            <div className='w-3/6 mr-16'>
                <EditProfile/>
            </div>
        </div>
    </>
  )
}

export default profilebuyer