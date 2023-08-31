import React from 'react'

const SupportMenu = () => {
  return (
    <div className='bg-gray-200 ml-6 mr-3 h-full rounded-medium'>
            <ul className='flex  flex-col gap-10 pt-8'>
                <li>
                    <a href='/faq' className='px-8 border-8 hover:border-l-8 hover:border-l-primary'>คำถามที่พบบ่อย</a>
                </li>
                <li>
                    <a href='/support' className='px-8 border-8 hover:border-l-8 hover:border-l-primary'>ติดต่อเรา</a>
                </li>
            </ul>
    </div>
  )
}

export default SupportMenu