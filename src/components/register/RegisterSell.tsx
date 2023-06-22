import React from 'react'
import Link from "next/link"


const RegisterSell = () => {
    return (
    <form className='flex flex-col max-w-md mx-auto gap-6 mt-10'>
            <h1 className='text-4xl font-bold'>มาลงทะเบียนผู้ขายกันเลย!</h1>
            <label className='block'>
                <span className='block'>นามปากกา :</span>
                <input type="text" className='pl-2 block w-full border-2 rounded bg-gray-200 h-8'/>
            </label>
            <label className='block'>
                <span className='block'>ชื่อจริง นามสกุล(มีคำนำหน้า) :</span>
                <input type="text" className='pl-2 block w-full border-2 rounded bg-gray-200 h-8'/>
            </label>
            <label className='block'>
                <span className='block'>เบอร์โทร :</span>
                <input className='pl-2 block w-full bg-gray-200 border-2 rounded h-8' onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}/>
            </label>
            <label className='block'>
                <span className='block'>ธนาคาร</span>
                <select className='pl-2 block w-full bg-gray-200 border-2 rounded h-8' placeholder='คลิกเพื่อเลือกบัญชีธนาคารของคุณ'>
                    <option>ไทยพาณิชย์</option>
                    <option>กสิกรไทย</option>
                </select>
            </label>
            <label className='block'>
                <span className='block'>เลขที่บัญชีธนาคาร :</span>
                <input className='pl-2 block w-full bg-gray-200 border-2 rounded h-8' onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}/>
            </label>
            <div className='flex justify-center'>
                <input type='checkbox'/>
                <div className='text-gray-400 text-xs ml-4'>
                    <p>By continuing, you agree with our</p>
                    <Link href='' className=''>Term & Conditions </Link>
                    <span>and Privacy Policy.</span>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link href='../sellsheet'>
                <button className=' bg-primary p-2 px-16 text-white underline font-extrabold hover:scale-125 ease-in-out duration-300'>ลงทะเบียน</button>
                </Link>
            </div>
    </form>
  )
}

export default RegisterSell