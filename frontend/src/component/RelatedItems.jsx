import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/ShopContext'
import Title from './Title';
import Productitems from './Productitems';

const RelatedItems = ({category,subcategory}) => {

    const {products} = useContext(Shopcontext);
    const [related,setRelated] = useState([])
    useEffect(()=>{

        if (products.length > 0) {
            let productCopy = products.slice()

            productCopy = productCopy.filter((item)=>(category=== item.category))
            productCopy = productCopy.filter((item)=> subcategory=== item.subcategory)

            setRelated(productCopy.slice(0,5))
            console.log(productCopy.slice(0,6));
            
        }

    },[products])
  return (
    <div className='mt-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6  ">
            {
                related.map((item,index)=>(
                    <Productitems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }
        </div>
      
    </div>
  )
}

export default RelatedItems
