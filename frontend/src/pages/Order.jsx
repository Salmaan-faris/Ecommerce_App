import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from '../component/Title'

function Order() {
  const {currency , products} = useContext(Shopcontext)
  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className='py-4  border-b border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                <div >
                  <p className='font-medium sm:text-base'>{item.name}</p>
                  <div className="flex  items-center gap-3 text-base mt-2 text-gray-700">
                    <p className='text-lg'>{currency}{item.price} </p>
                    <p>Quantity : 1</p>
                    <p>Size : M</p>
                  </div>
                  <p className='mt-2'>Date : <span className='text-gray-500'>22-02-25</span></p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between ">
                 <div className="flex items-center gap-3">
                  <p className='h-2 min-w-2 rounded-full bg-green-400'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                 </div>
                 <button className='border border-gray-400 px-4 text-sm font-medium py-2 rounded-sm '>Track order</button>
              </div>
            </div>
          ))
        }
      </div>   
    </div>
  )
}

export default Order
