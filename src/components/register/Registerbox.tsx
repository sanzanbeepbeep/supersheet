import React from 'react'
import Link from 'next/link'

const Loginbox = () => {
  return (
        <form className='flex flex-col max-w-md mx-auto gap-6 mt-10'>
            <h1>เข้าสู่ระบบ</h1>
            <h2 className='underline'>เป็นสมาชิกกับเราเพื่อรับประโยชน์สูงสุด !</h2>
            <label className='block'>
                <span className='block'>Username</span>
                <input type="text" className='block w-full border-2 rounded bg-gray-200 h-8'/>
            </label>
            <label className='block'>
                <span className='block'>Email</span>
                <input type="text" className='block w-full border-2 rounded bg-gray-200 h-8'/>
            </label>
            <label className='block'>
                <span className='block'>รหัสผ่าน</span>
                <input type="password" className='block w-full bg-gray-200 border-2 rounded h-8'/>
            </label>
            <label className='block'>
                <span className='block'>ยืนยันรหัสผ่าน</span>
                <input type="password" className='block w-full bg-gray-200 border-2 rounded h-8'/>
            </label>
            <label className='block'>
                <span className='block'>สถาบันการศึกษาของคุณ</span>
                <input type="text" className='block w-full border-2 rounded bg-gray-200 h-8'/>
            </label>
            <label className='block'>
                <span className='block'>คณะ</span>
                <input type="text" className='block w-full border-2 rounded bg-gray-200 h-8'/>
            </label>
            <label className='block'>
                <span className='block'>สาขา</span>
                <input type="text" className='block w-full border-2 rounded bg-gray-200 h-8'/>
            </label>
            <label className='block'>
                <span className='block'>ชั้นปีที่เรียน</span>
                <input type="text" className='block w-full border-2 rounded bg-gray-200 h-8'/>
            </label>
                <button className='border-2 border-primary bg-primary text-white w-1/2 mx-auto font-bold h-10 text-xl mt-4'>สมัครสมาชิก</button>
            <div className='flex flex-col items-center'>
                <p>หรือเข้าสู่ระบบด้วย</p>
                <div className='flex flex-row w-full my-7'>
                    <button className='border-2 border-loginmethod bg-loginmethod text-white w-1/4 mx-auto font-bold h-10 text-md'>Facebook</button>
                    <button className='border-2 border-loginmethod bg-loginmethod text-white w-1/4 mx-auto font-bold h-10 text-md'>Google</button>
                </div>
                <Link legacyBehavior href="/register">
                    <a className='underline'>ยังไม่มีบัญชีหรอ? สมัครสมาชิกกับเราสิ</a>
                </Link>
            </div>
        </form>
  )
}

export default Loginbox