import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Searchtopnav from '../Searchby/Searctopnav'
const Navbar = () => {
  return (
    <div className='flex flex-row justify-around items-center border-b-2 border-black my-2 pb-2'>
        <Image src="/Logo.png" alt='Logo' width={90} height={100}/>
        <div className='flex flex-row basis-1/2 justify-between'>
            <Searchtopnav/>
            <div className='trasition ease-in-out duration-300 hover:scale-110 hover:text-primary'>
             <Link href='/' className={`underline decoration-solid`}>หน้าหลัก</Link>
            </div>
            <div className='trasition ease-in-out duration-300 hover:scale-110 hover:text-primary hover:underline'>
              <Link href='/market'>ซื้อชีท</Link>
            </div>
            <div className='trasition ease-in-out duration-300 hover:scale-110 hover:text-primary hover:underline'>
              <Link href='/regissell'>ขายชีท</Link>
            </div>
            <div className='trasition ease-in-out duration-300 hover:scale-110 hover:text-primary hover:underline'>
              <Link href='/webboard'>เว็บบอร์ดพูดคุย</Link>
            </div>
            <div className='trasition ease-in-out duration-300 hover:scale-110 hover:text-primary hover:underline'>
              <Link href='/reviews'>รีวิวรายวิชา</Link>
            </div>
            <div className='trasition ease-in-out duration-300 hover:scale-110 hover:text-primary hover:underline'>
              <Link href='/learnroom'>Learn room</Link>
            </div>
        </div>
        <div className='flex flex-row justify-evenly basis-1/6 items-center'>
          <Link href='/login'>
            <form>
              <button type='submit' className='px-8 py-2 bg-primary text-white font-semibold hover:scale-110 duration-300'>เข้าสู่ระบบ</button>
            </form>
          </Link>
          <p>profile</p>
        </div>
    </div>
  )
}

export default Navbar