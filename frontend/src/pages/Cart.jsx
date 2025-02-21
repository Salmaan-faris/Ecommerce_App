import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from '../component/Title'

function Cart() {
  const {products, currency, cartItem}= useContext(Shopcontext)

  const [cartData, setCartData] = useState([])

  useEffect(()=>{
    const tempData = [];
    for(const items in cartItem){
      for(const item in cartItem[items]){
        if (cartItem[items][item] > 0) {
          tempData.push({
            _Id:items,
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
      <div className='text-2xl mb-3 text-center'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
    </div>
  )
}

export default Cart
