import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedItems from '../component/RelatedItems'

function Product() {

  const {productId} = useParams()
  const [productData, setProductData] = useState(false)
  const {products,currency}=useContext(Shopcontext)
  const [imageData,setImageData] = useState('')
  const [size,setSize] = useState('')

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
           <div className="flex gap-4 mt-8 flex-col">
            <p>Select Size</p>
            <div className="gap-2 flex">
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>(setSize(item))} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-black' : 'border-gray-300 '} `} key={index}>{item}</button>
              ))}
            </div>
           </div>
           <button className="mt-4 py-3 px-8 bg-black text-white text-sm active:bg-gray-700 ">ADD TO CART</button>
           <hr className='mt-4  sm:w-4/5' />
           <div className='flex flex-col mt-5 text-sm text-gray-500 gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery available in this products.</p>
            <p>Easy return policy within 7 days.</p>
           </div>
          

        </div>
        
      </div>
      {/* ---------x-----discription and review section--------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='py-3 px-5 text-sm border border-gray-300'>Description </b>
          <p className='py-3 px-5 text-sm border border-gray-300'> Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 py-6 px-6 text-sm text-gray-500">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae officiis voluptatibus aspernatur. Ad autem porro consequatur eius consequuntur, corporis sed, minima aliquam odio praesentium, facere impedit reiciendis omnis quo dolor.</p>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis omnis ut veniam quis ducimus dolor fugiat natus. Eligendi eum dolore ducimus ipsa quas libero nihil explicabo excepturi iusto maxime facilis, necessitatibus consequatur est! Impedit est eius quibusdam unde repellendus perspiciatis natus pariatur. Dolores provident doloribus deleniti id architecto consequatur.</p>
           </div>
      </div>
      {/* display related items */}
      <RelatedItems category={productData.category} subcategory={productData.subcategory} />
    </div>
    
  ) : <div className="opacity-0"></div>
}

export default Product
