import React from 'react'
import NavbarTop from '../components/navbar/NavbarTop'
import RegisterSell from '../components/register/RegisterSell'
import { signIn } from 'next-auth/react'

const sell = () => {
  return (
    <>
    <NavbarTop/>
    <div className='flex flex-col justify-center items-center gap-4 my-10'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className='font-bold text-3xl'>สวัสดี! คุณผู้ขาย</h1>
            <p>เรารู้ว่าคุณไฟแรงและนั่นเป็นสิ่งที่เรารัก</p>
            <p>เรา &quot;สัญญา&quot; ว่าการลงทะเบียนจะง่ายสุดๆ มาเริ่มไปด้วยกันเลย</p>
        </div>
        <div className=' bg-primary p-4 mb-4 hover:scale-125 ease-in-out duration-300'>
            <button onClick={() => signIn()} className='underline text-white'>คลิกเพื่อเข้าสู่ระบบก่อนลงขายชีท</button>
        </div>
    </div>
    <RegisterSell/>
    </>
  )
}

export default sell