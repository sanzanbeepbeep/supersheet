import React from 'react'

const Contractme = () => {
  return (
    <div className='bg-gray-200 h-full w-full rounded-medium'>
        <div className='flex flex-col pt-8 px-8'>
            <h1 className='font-bold text-4xl'>ติดต่อเรา</h1>
            <div className='flex flex-col justify-center items-center h-full mt-4 '>
                <textarea className='w-full border border-black rounded-small h-80 bg-white pl-2 ' placeholder='รายงานปัญหาของคุณได้ที่นี่...'></textarea>
                <input type='submit' className='bg-primary text-white rounded-small h-10 w-32 my-8 hover:bg-darkerprimary' placeholder='ส่ง'></input>
                <p>
                    หรือติดต่อเราได้ที่ Email:supersheet@gmail.com
                </p>
                <p>
                    หรือเบอร์โทรศัพท์: 089-566-7897 (ไอซ์)
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Contractme