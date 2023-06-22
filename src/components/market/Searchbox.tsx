import React from 'react'

const Searchbox = () => {
  return (
    <label className="relative block">
      <span className='sr-only'>Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24">
        </svg>
      </span>
      <input className="placeholder:italie block bg-white w-full border-black border-2 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
    </label>

  )
}

export default Searchbox