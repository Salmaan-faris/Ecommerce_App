import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../context/ShopContext'
import { assets } from '../assets/assets'

function Product() {

  const {productId} = useParams()
  const [productData, setProductData] = useState(false)
  const {products,currency}=useContext(Shopcontext)
  const [imageData,setImageData] = useState('')

  const fetchProductData = async ()=>{
     products.map ((item )=> {
      if(item._id === productId){
        setProductData(item)
        setImageData(item.image[0])
        console.log(item);
        
       
        
        return null;
        
      }
    })
    

  }

  useEffect(()=>{
    fetchProductData()
  },[productId, products])
  

  return productData ? (
    <div className='border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row" >
        <div className="flex flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex  sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
             {
              productData.image.map((item ,index)=>(
                <img onClick={()=>(setImageData(item))} src={item} key={index} className='w-[22%] p-2 cursor-pointer sm:w-full sm:mb-3 ' alt="" />
              ))
             }
          </div>
          <div className="w-full sm:w-[80%] ">\
            <img  src={imageData} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/* ----------product info----------- */}
        <div className="flex-1">
           <h3 className='font-medium text-2xl mt-2'>{productData.name}</h3>  
           <div className='flex items-center gap-2 mt-2'>
            <img src={assets.star_icon} alt="" className='w-3.5'/>
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_icon} alt="" className='w-3.5'/>
            <img src={assets.star_icon} alt="" className='w-3.5' />
            <img src={assets.star_dull_icon} alt="" className='w-3.5' />
            <p className='pl-2'>(123)</p>
           </div>
           <p className="font-medium mt-5 text-3xl">{currency}{productData.price}</p>
           <p className='text-gray-500 mt-5 md:w-4/5 '>{productData.description}</p>
        </div>
      </div>
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
