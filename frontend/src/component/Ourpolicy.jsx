import React from 'react'
import { assets } from '../assets/assets'

function Ourpolicy() {
  return (
    <div className='justify-around flex flex-col gap-12 sm:flex-row text-center sm:gap-2 py-2 '>
      <div>
        <img src={assets.exchange_icon} alt="" className='w-14 m-auto mb-5' />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-500' >We Offer hussle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} alt=""  className='w-14 m-auto mb-5'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-500'>We Offer hussle free exchange policy</p>
      </div>
      <div>
        <img src={assets.support_img} alt="" className='w-14 m-auto mb-5' />
        <p className='font-semibold'> Easy Exchange Policy</p>
        <p className='text-gray-500'>We Offer hussle free exchange policy</p>
      </div>
    </div>
  )
}

export default Ourpolicy
