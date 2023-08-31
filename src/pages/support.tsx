import React from 'react'
import Navbar from '../components/navbar/NavbarTop'
import ProfileMenu from '../components/Profile/ProfileMenu'
import SupportMenu from '../components/Profile/support/SupportMenu'
import Contractme from '../components/Profile/support/Contractme'


const profilebuyer = () => {
    return (
      <>
          <Navbar/>
          <div className='flex flex-row justify-center w-4/5 mx-auto my-16'>
              <div className='w-1/5'>
                  <ProfileMenu/>
              </div>
              <div>
                  <SupportMenu/>
              </div>
              <div className='w-3/6 mr-16'>
                  <Contractme/>
              </div>
          </div>
      </>
    )
  }
  
  export default profilebuyer