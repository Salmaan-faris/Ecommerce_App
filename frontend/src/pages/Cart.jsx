import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import Carttotal from '../component/Carttotal'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {products, currency, cartItem ,updateQuantity}= useContext(Shopcontext)

  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const tempData = [];
    for(const items in cartItem){
      for(const item in cartItem[items]){
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id:items,
            size:item,
            quantity : cartItem[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  },[cartItem])


  return (
    <div className='border-t border-gray-400 pt-14 '>
      <div className='text-2xl mb-3 '>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=>product._id===item._id);
            console.log(productData)
            return (
              <div key={index} className='py-4 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-col-[4fr_2fr_0.5fr] items-center gap-4 '>
                <div className='flex  items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border border-gray-300'>{item.size}</p>
                    </div>
                  </div>                 
                </div>
                <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null :updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 px-1 py-1 sm:max-w-16 sm:px-3 border-gray-400  ' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 sm:w-5 mr-4 cursor-pointer' alt="" />
              </div>
              
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className="w-full sm:w-[450px]">
          <Carttotal/>
          <div className="w-full text-end ">
            <button onClick={()=>navigate('/placeorder')}  className='bg-black text-white text-sm py-3 px-8 my-8 '>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
