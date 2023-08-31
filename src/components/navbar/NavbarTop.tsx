import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Searchtopnav from '../Searchby/Searctopnav'
import { useUrl } from 'nextjs-current-url'


const Navbar = () => {

  
  const {href: currentUrl, pathname} = useUrl() ?? {}
  console.log(pathname)
  





  return (
    <div className='flex flex-row justify-around items-center border-b-2 border-black my-2 pb-2'>
        <Image src="/Logo.png" alt='Logo' width={90} height={100}/>
        <div className='flex flex-row basis-1/2 justify-between'>
            <Searchtopnav/>
            <div className='trasition ease-in-out hover:scale-110 hover:text-primary hover:underline'>
             <Link id='Main' href='/' className={`${pathname === '/' ? "underline" : ""}`}>หน้าหลัก</Link>
            </div>
            <div className='trasition ease-in-out hover:scale-110 hover:text-primary hover:underline'>
              <Link id='Market' href='/market' className={`${pathname === '/market' ? "underline" : ""}`}>ซื้อชีท</Link>
            </div>
            <div className='trasition ease-in-out hover:scale-110 hover:text-primary hover:underline'>
              <Link id='Regis' href='/regissell' className={`${pathname === '/regissell' ? "underline" : ""}`}>ขายชีท</Link>
            </div>
            <div className='trasition ease-in-out hover:scale-110 hover:text-primary hover:underline'>
              <Link id='Webboard' href='/webboard'>เว็บบอร์ดพูดคุย</Link>
            </div>
            <div className='trasition ease-in-out hover:scale-110 hover:text-primary hover:underline'>
              <Link id='Reviews' href='/reviews'>รีวิวรายวิชา</Link>
            </div>
            <div className='trasition ease-in-out hover:scale-110 hover:text-primary hover:underline'>
              <Link href='/learnroom'>Learn room</Link>
            </div>
        </div>
        <div className='flex flex-row justify-evenly basis-1/6 items-center'>
          <Link href='/login'>
            <form>
              <button type='submit' className='px-8 py-2 bg-primary text-white font-semibold duration-300 hover:bg-black'>เข้าสู่ระบบ</button>
            </form>
          </Link>
          <p>profile</p>
        </div>
    </div>
  )
}

export default Navbar