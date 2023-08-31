import React from 'react'

const EditProfile = () => {
  return (
    <div className='bg-gray-200 h-full w-full rounded-medium'>
        <div className='flex flex-col pt-8 pl-8'>
            <h1>แก้ไขโปรไฟล์</h1>
            <div className='flex flex-row items-center h-20 mt-4'>
                <img className='h-12 w-12 border-black border-4 rounded-full bg-primary my-4' src='' alt='p'></img>
                <input type='file' className='pl-10' placeholder='แก้ไขโปรไฟล์'></input>
            </div>
            <div className='flex flex-row items-center h-20 mt-4'>
                <h1 className='w-1/4'>ชื่อผู้ใช้</h1>
                <input type='text' className='w-2/4 border border-black rounded-small h-10 bg-gray-200 pl-2 placeholder:text-black' placeholder='ตามในข้อมูล'></input>
            </div>
            <div className='flex flex-row items-center h-20 mt-4'>
                <h1 className='w-1/4'>คำอธิบายโปรไฟล์</h1>
                <textarea className='w-2/4 border border-black rounded-small h-20 bg-gray-200 pl-2 ' placeholder=''></textarea>
            </div>
            <div className='flex flex-row items-center h-20 mt-4'>
                <h1 className='w-1/4'>มหาวิทยาลัย</h1>
                <select className='w-2/4 border border-black rounded-small h-10 bg-gray-200 pl-2'>
                    <option value=''>มหาวิทยาลัย</option>
                    <option value=''>มหาวิทยาลัย</option>
                    <option value=''>มหาวิทยาลัย</option>
                </select>
            </div>
        </div>
            <div className='bg-primary w-32 rounded-medium text-center h-8 float-right mr-16 mt-44'>
                <input type='submit' className='text-white pt-1' placeholder='บันทึกการตั้งค่า'></input>
            </div>
    </div>
  )
}

export default EditProfile