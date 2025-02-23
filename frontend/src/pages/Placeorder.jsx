import React, { useState } from 'react'
import Title from '../component/Title'
import Carttotal from '../component/Carttotal'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Placeorder() {
  const [method,setMethod] = useState('')
  const navigate = useNavigate()
  return (
    <div className=' flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-400'>
     {/* -------------left side ---------------*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
        <div className="text-xl sm:text-2xl my-1 ">
          <Title text1={'DELIVERY'} text2={ 'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 py-1.5  w-full px-3.5' type="text"  placeholder='FirstName' />
          <input className='border border-gray-300 py-1.5 px-3.5 w-full  ' type="text" placeholder='LastName' />
        </div>
        <input className='border border-gray-300 py-1.5 px-3.5 w-full  ' type="text" placeholder='Email' />
        
        <input className='border border-gray-300 py-1.5 px-3.5 w-full  ' type="text" placeholder='Address' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 py-1.5  w-full px-3.5' type="text"  placeholder='City' />
          <input className='border border-gray-300 py-1.5 px-3.5 w-full  ' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 py-1.5  w-full px-3.5' type="number"  placeholder='Zipcode' />
          <input className='border border-gray-300 py-1.5 px-3.5 w-full  ' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-300 py-1.5  w-full px-3.5' type="number"  placeholder='Phone' />

      </div>

    {/* -------Right side ------------ */}
      <div className="mt-8">
        <div className='mt-8 min-w-80'>
          <Carttotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/*---------------payment ---------------*/}
          <div className='flex gap-3 flex-col lg:flex-row'>
             <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border  border-gray-300 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 border  border-gray-300 h-3.5 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
             </div>
             <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 border  border-gray-300 h-3.5 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
             </div>
             <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border  border-gray-300 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 border border-gray-300 h-3.5 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-sm text-gray-500 mx-4 font-medium'>CASH ON DELIVERY</p>
              
             </div>

          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/order')} className='bg-black text-white px-16 py-3 text-sm' >PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placeorder
