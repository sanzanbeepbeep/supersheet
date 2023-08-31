import React from 'react'

const EditMoney = () => {
  return (
    <div className='bg-gray-200 h-full w-full rounded-medium'>
        <div className='flex flex-col pt-8 pl-8'>
            <h1>แก้ไขข้อมูลทางการเงิน</h1>
            <div className='flex flex-row items-center h-20 mt-4'>
                <h1 className='w-1/4'>ชื่อผู้รับเงิน</h1>
                <input type='text' className='w-2/4 border border-black rounded-small h-10 bg-gray-200 pl-2 placeholder:text-black' placeholder='ตามในข้อมูล'></input>
            </div>
            <div className='flex flex-row items-center h-20 mt-4'>
                <h1 className='w-1/4'>ชื่อธนาคาร</h1>
                <select className='w-2/4 border border-black rounded-small h-10 bg-gray-200 pl-2'>
                    <option value=''>ธนาคาร</option>
                    <option value=''>ธนาคาร</option>
                    <option value=''>ธนาคาร</option>
                </select>
            </div>
            <div className='flex flex-row items-center h-20 mt-4'>
                <h1 className='w-1/4'>เลขบัญชี</h1>
                <input type='text' className='w-2/4 border border-black rounded-small h-10 bg-gray-200 pl-2 placeholder:text-black' placeholder='ตามในข้อมูล'></input>
            </div>
            <div className='flex justify-center'>
                <p className='w-3/5 text-left text-red-500 mt-16 text-2xl'>
                    กรุณาตรวจสอบข้อมูลให้ถูกต้อง หากเกิดการโอนเงินผิดพลาดไปยังบัญชีอื่น ด้วยเหตุอันเนื่องมาจากท่านกรอกข้อมูลเกียวกับบัญชีผิดพลาด ทางเราจะไม่รับผิดชอบ
                </p>
            </div>
        </div>
            <div className='bg-primary w-32 rounded-medium text-center h-8 float-right mr-16 mt-44'>
                <input type='submit' className='text-white pt-1' placeholder='บันทึกการตั้งค่า'></input>
            </div>
    </div>
  )
}

export default EditMoney