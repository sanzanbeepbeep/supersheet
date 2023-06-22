import React from 'react'

const NavbarBottom = () => {
  return (
    <div className='flex flex-row justify-between items-center border-t-2 border-black my-2'>
        <div className='basis-1/6 item-center ml-10'>
            <p>contract us</p>
            <p>mail</p>
        </div>
        <div className='flex flex-row justify-evenly basis-1/6 items-center'>
          <p>copy right 2022</p>
        </div>
    </div>
  )
}

export default NavbarBottom