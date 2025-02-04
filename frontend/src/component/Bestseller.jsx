import React, { useContext, useState } from 'react'
import Title from './Title'
import { useEffect } from 'react'
import Productitems from './Productitems'
import { Shopcontext } from '../context/ShopContext'

function Bestseller() {

    const {products} = useContext(Shopcontext)

    const [bestsell,setBestSell] = useState([])
    useEffect(()=>{
        let bestproduct = products.filter((item)=>(
            item.bestseller===true
        )          
            );
        setBestSell(bestproduct.slice(0,5))
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-3 '>
          <Title text1={'BEST'} text2={'SELLERS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
             explicabo placeat iste odio excepturi dolores blanditiis modi perspiciatis necessitatibus?</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestsell.map((item,index)=>(
                     <Productitems key={index} id={item._id}  name={item.name} image={item.image} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default Bestseller



