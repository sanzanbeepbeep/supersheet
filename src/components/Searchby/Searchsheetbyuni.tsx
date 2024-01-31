import React from 'react'
import Link from 'next/link'




const Searchsheetbyuni = () => {
  const uni_icons = ['AU_icon.png','BU_icon.png','BUU_icon.png','CMU_icon.png','CU_icon.png','KKU_icon.png','KMUTNB_icon.png','KU_icon.png','MFU_icon.png','MU_icon.png','SU_icon.png','SWU_icon.png','TU_icon.png']

  return (
    <>
      <div className='flex justify-start text-4xl font-bold mt-6'>
        ค้นหาจากมหาวิทยาลัย
      </div>
      <div className='flex mx-auto grid grid-cols-5 justify-items-center gap-y-6 mt-2 w-8/12'>
          {uni_icons.map((filename, index) => (
            <Link href={{
              pathname: '/market',
              query: { university: filename.split('_')[0] }
            }} key={index} className='w-fit'>
              <img src={`/uni_icons/${filename}`} alt="uicon" className="w-fit shadow-xl" />
            </Link>
          ))}
      </div>
    </>
  )
}

export default Searchsheetbyuni