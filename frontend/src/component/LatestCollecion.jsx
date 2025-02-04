import React, { useContext, useEffect, useState } from 'react'
import {Shopcontext} from '../context/ShopContext'
import Title from './Title'
import Productitems from './Productitems'

function LatestCollecion() {
    const {products} = useContext(Shopcontext)
    const [latestProduct,setLatestProduct] = useState([])

    useEffect(()=>{
        setLatestProduct(products.slice(0,10))
    },[])
    
  return (
    <div className='my-10' >
        <div className='text-center py-6 text-3xl'>

           <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        </div>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae atque quod fugit
          ipsa provident aliquid consequuntur mollitia minus ducimus eius!
        </p>

        {/* products are listing */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latestProduct.map((item, index) => (
                    <Productitems 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))} 
        </div>

    </div>
  )
}

export default LatestCollecion
