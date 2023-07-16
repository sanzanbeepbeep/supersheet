import React from 'react'

const ProfileMenu = () => {
  return (
    <div className='flex flex-col justify-center'>
        <div className='border-4 border-black h-32 w-32 rounded-full bg-primary mx-auto my-4'></div>
        <div className='flex flex-col justify-center my-4'>
            <h1 className='text-center'>ลุงเดช โซ่เงิน</h1>
            <p className='text-center'>Kasetsart University</p>
        </div>
        <div className='flex flex-row justify-center gap-2'>
            <div>
                <a className='group relative inline-block text-sm text-black focus:outline-none focus:ring' href='#'>
                    <span className='absolute inset-0 border-2 rounded-medium border-darkerprimary group-active:border-darkerprimary'></span>
                    <span className='block border-2 border-darkerprimary rounded-medium px-8 py-3 transition-transform active:border-primary active:bg-primary active:text-white group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white'>
                        ผู้ขาย
                    </span>
                </a>
            </div>
            <div>
                <a className='group relative inline-block text-sm text-black focus:outline-none focus:ring' href='#'>
                    <span className='absolute inset-0 border-2 rounded-medium border-darkerprimary group-active:border-darkerprimary'></span>
                    <span className='block border-2 border-darkerprimary rounded-medium px-8 py-3 transition-transform active:border-primary active:bg-primary active:text-white group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white'>
                        ผู้ซื้อ
                    </span>
                </a>
            </div>
        </div>
        <hr className='border border-black my-4'></hr>
        <div className='flex flex-col justify-center items-center gap-8 my-8'>
                <a href='#'>ชีทของฉัน</a>
                <a href='#'>ถ้วยรางวัลของฉัน</a>
                <a href='#'>รายรับของฉัน</a>
        </div>
        <hr className='border border-black my-4'></hr>
        <div className='flex flex-col justify-center items-center gap-8 my-8'>
            <div className='hover:bg-primary hover:rounded-full  hover:text-white px-20 py-4'>
                <a href='#'>ตั้งค่า</a>
            </div>
            <div className='hover:bg-primary hover:rounded-full  hover:text-white px-20 py-4'>
                <a href='#'>ช่วยเหลือ</a>
            </div>
        </div>
    </div>
  )
}

export default ProfileMenu