import React from 'react'

const BuyerMenu = () => {
  return (
    <div className='bg-gray-200 ml-6 mr-3 h-full rounded-medium'>
            <ul className='flex  flex-col gap-10 pt-8'>
                <li>
                    <a href='#' className='px-8 border-8 hover:border-l-8 hover:border-l-primary'>แก้ไขโปรไฟล์</a>
                </li>
                <li>
                    <a href='#' className='px-8 border-8 hover:border-l-8 hover:border-l-primary'>แก้ไขข้อมูลทางการเงิน</a>
                </li>
                <li>
                    <a href='#' className='px-8 border-8 hover:border-l-8 hover:border-l-primary'>นโยบายข้อมูลส่วนตัว</a>
                </li>
            </ul>
    </div>
  )
}

export default BuyerMenu