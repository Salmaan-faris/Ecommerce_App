import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from './Title'


const Carttotal = () => {
    const {cartItem, products , currency, delivery_fee, } = useContext(Shopcontext)
   

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const items in cartItem){
            let itemInfo = products.find((product)=>product._id === items)
            for(const item in cartItem[items]){
                try {
                    if (cartItem[items][item]>0) {
                        totalAmount += itemInfo.price * cartItem[items][item]
                        
                    }
                } catch (error) {
                    
                }
            }
        } return totalAmount;

    }
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTAL'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm '>
        <div className=' flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>

        </div>
        
        <div className=' flex justify-between'>
          <p>Shipping fee</p>
          <p>{currency}{delivery_fee}.00</p>
        </div>
        <hr className=' border-gray-400' />
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency} {getCartAmount() === 0 ?  0 : getCartAmount() + delivery_fee}.00 </b>
        </div>
      </div>
    </div>
  )
}

export default Carttotal
