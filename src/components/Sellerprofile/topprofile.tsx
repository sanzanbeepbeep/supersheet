import React from 'react'

const topprofile = () => {
  return (
    <div className='flex justify-evenly my-16'>
        <div className='border-4 border-black h-48 w-48 rounded-full bg-primary'>
        </div>
        <div className='w-4/6 py-2'>
            <h1 className='font-bold text-xl'>ลุงเดช โซ่เงิน</h1>
            <p className='text-sm pt-1'>Kasetsart University</p> 
            <div className='py-4 flex justify-start items-start divide-x divide-gray-400 divide-solid'>
            <span className="text-center px-2"><span className="font-bold text-gray-700">4</span><span className="text-gray-600"> ชีทที่ขาย</span></span><span className="text-center px-2"><span className="font-bold text-gray-700">200</span><span className="text-gray-600"> ยอดซื้อทั้งหมด</span></span><span className="text-center px-2"></span>
            </div>
            <p>
            สวัสดีครับ ผมลุงเดชนะครับ ชีทที่ผมเขียนผมตั้งใจทุกชีทครับ อยากให้ลองได้อ่านกันครับผม
            </p>
        </div>
    </div>
  )
}

export default topprofile