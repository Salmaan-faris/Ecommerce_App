import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

function SearchBar() {

    const {search ,setSearch , showSearch, setShowSearch}= useContext(Shopcontext)
    const [visible , setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=>{
      if( location.pathname.includes('collections')){
        setVisible(true)

      }else{
        setVisible(false)
      }
    },[location])

  return showSearch && visible ? (
    <div className='border-t border-b border-gray-300 bg-gray-50 text-center '>
      <div className='my-5 border border-gray-500 px-5 inline-flex items-center justify-center  rounded-full mx-3 w-3/2 py-2 sm:w-1/2 '>
        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder='search here' className='flex-1 outline-none bg-inherit text-sm' />
        <img src={assets.search_icon} className='w-4' alt="" />
      </div>
      <img src={assets.cross_icon} className='inline w-3 cursor-pointer' onClick={()=>{setShowSearch(false)}} alt="" />
    </div>
  ) : null
}

export default SearchBar
