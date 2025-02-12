import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink } from 'react-router-dom'
import { Shopcontext } from '../context/ShopContext'

function Navbar() {

    const [menuvis, setMenuvis] = useState(false)
    const {setSearch , setShowSearch} =  useContext(Shopcontext)

  return (
    <div className='flex justify-between items-center py-5 font-medium'>
      <Link to='/'>
      <img src={assets.logo} alt=""  className='w-36' />
      </Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-600'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
        <NavLink to='/collections' className='flex flex-col items-center gap-1' >
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 '>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
        
      </ul>
      <div className="flex items-center gap-6">
        <img onClick={()=>{setShowSearch(true)}} src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
        <div className="group relative">
            <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer' />
            <div className="dropdown-menu group-hover:block hidden absolute right-0 pt-4">
               <div className="flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 rounded "> 
                 <p className='cursor-pointer hover:text-black'>My Profile </p>
                 <p className='cursor-pointer hover:text-black'>My Order</p>
                 <p className='cursor-pointer hover:text-black'>Logout</p>
               </div>
            </div>
        </div>
        <Link to='/cart' className='relative'> 
            <img src={assets.cart_icon} alt=""  className='w-5 min-w-5'/>
            <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>10</p>
        </Link>
        <img src={assets.menu_icon} alt=""  className='w-5 sm:hidden cursor-pointer' onClick={()=>{
            setMenuvis(true)
        }} />
      </div>
      
      {/* sidevbar menu for the small screen */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${menuvis ? 'w-full':'w-0'}`}>

        <div className="flex flex-col text-gray-600"> 
           <div onClick={()=>{setMenuvis(false)}} className="flex items-center gap-4 p-3 cursor-pointer ">
             <img src={assets.dropdown_icon} alt="" className='rotate-180 h-4' />
             <p>back</p>
           </div>
           
             <NavLink onClick={()=>{setMenuvis(false)}} className='py-2 pl-5 ' to='/'>HOME</NavLink>
             <NavLink onClick={()=>{setMenuvis(false)}} className='py-2 pl-5  ' to='/about'>ABOUT</NavLink>
             <NavLink onClick={()=>{setMenuvis(false)}} className='py-2 pl-5 ' to='/collections' >COLLECTION</NavLink>
             <NavLink onClick={()=>{setMenuvis(false)}} className='py-2 pl-5 ' to='/contact'>CONTACT</NavLink>
           
        </div>
      </div>
    </div>
  )
}

export default Navbar
