import React from 'react'

const SearchsheetMain = () => {
  return (
    <div className='mt-10'>
      <label className="relative block w-1/6">
      <span className='sr-only'>Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24">
        </svg>
      </span>
      <input className="placeholder:text-black placeholder:italie block bg-white w-full border-black border-2 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" placeholder="กรุณาใส่ชื่อวิชา/รหัสวิชา" type="text" name="search"/>
    </label>
    </div>
  )
}

export default SearchsheetMain