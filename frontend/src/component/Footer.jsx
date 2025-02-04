import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">

        <div className=''>
            <img src={assets.logo} alt=""  className='w-36 mb-5'/>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate harum dignissimos, fugiat doloremque odio rem.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='gap-1 text-gray-600 flex flex-col'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>


        <div>
            <p className='text-xl mb-5 font-medium'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600 '>
                <li>+1-22-3453-6353</li>
                <li>contacus@gmail.com</li>
            </ul>
        </div>
        </div>
        <div>
            <hr className='text-gray-400' />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com -All Right Reserved.</p>
        </div>
       
    </div>
  )
}

export default Footer

