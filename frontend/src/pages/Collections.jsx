import React, { useContext, useEffect, useState } from 'react'
import {Shopcontext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../component/Title'
import Productitems from '../component/Productitems'

function Collections() {

    const {products ,search , showSearch} = useContext(Shopcontext)
    const [showfilter, setShowfilter]= useState(false)
    const [filterProducts,setFilterProducts] = useState([])
    const [category,setCatogory] = useState([])
    const [subcategory,setSubCatogory] = useState([])
    const [sortType, setSortType] = useState('relevent')
    
    const togglecategory =(e)=>{
      if(category.includes(e.target.value)){
           setCatogory(prev=>prev.filter(item=> item !== e.target.value))
      }else{
        setCatogory(prev=>[...prev, e.target.value])
      }
    }

    const togglesubcategory=(e)=>{
      if(subcategory.includes(e.target.value)){
        setSubCatogory(prev=> prev.filter(item=> item !==e.target.value)) 
      }else{
        setSubCatogory(prev=> [...prev,e.target.value])
      }
    }

    const applyFilter=()=>{
 
      let productfilter= products.slice()

      if(showSearch && search){
        productfilter = productfilter.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))

      }

      if(category.length > 0){
          productfilter= productfilter.filter(item=> category.includes(item.category))
      }
      
      if(subcategory.length > 0 ){
        productfilter=productfilter.filter(item=> subcategory.includes(item.subCategory))
      }
      setFilterProducts(productfilter)
      
    }

    const sortproducts=()=>{
      let sortCopy = filterProducts.slice();

      switch(sortType){
        case 'lowtohigh':
          setFilterProducts(sortCopy.sort((a,b)=>(a.price - b.price)))
          break;

        case 'hightolow':
          setFilterProducts(sortCopy.sort((a,b)=>(b.price - a.price)))  
          break;

        default :
           applyFilter()
           break;
      }
    }

    
    useEffect(()=>{
      applyFilter()
    },[category ,subcategory , search ,showSearch])
    
   useEffect(()=>{
    sortproducts()
   },[sortType])

    return (
    <div className='pt-10 border-t border-gray-300 flex flex-col gap-1 sm:gap-10 sm:flex-row'>
      {/* filter option */}
      <div className='min-w-60'>
        <p onClick={()=>{setShowfilter(!showfilter)}} className=' gap-2 my-2 flex items-center cursor-pointer'>FILTERS

          <img src={assets.dropdown_icon} alt="" className={`my-2 h-3 ${showfilter ? 'rotate-90':''} sm:hidden`} />
        </p>
     {/* catrgory filter */}
         <div className={`border border-gray-300 pl-5 py-3  text-gray-700  ${showfilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-bold'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
               <p className='flex gap-2'>
                <input type="checkbox" value={'Men'} onChange={togglecategory} />Men
               </p>

               <p className='flex gap-2'>
                <input type="checkbox" value={'Women'} onChange={togglecategory} />Women
               </p>

               <p className='flex gap-2'>
                <input type="checkbox" value={'Kids'} onChange={togglecategory} />Kids
               </p>
            </div>
          
         </div>
       
         
          <div className={`border border-gray-300 pl-5 py-3  text-gray-700 mt-4 ${showfilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-bold'>
              TYPE
            </p>
            <div className='flex flex-col gap-2 text-sm font-medium text-gray-700'>
              <p className='gap-2'>
                <input type="checkbox" value={'Topwear'} onChange={togglesubcategory} /> Topwear
              </p>
              <p className='gap-2'>
                <input type="checkbox" value={'Bottomwear'} onChange={togglesubcategory} /> Bottomwear
              </p>
              <p className='gap-2'>
                <input type="checkbox" value={'Winterwear'} onChange={togglesubcategory} /> Winterwear
              </p>
            
            </div>
          </div>
         
      </div>
      <div className='flex-1'>
        <div className='flex justify-between text-base mb-4 sm:text-2xl'>
           <Title text1={'ALL'} text2={'PRODUCTS'} />
           {/* product sort */}
           <select onChange={(e)=>(setSortType(e.target.value))} className='border-2 border-gray-400 text-sm py-0' >
             <option value="relevent"> Sort by:Relevent</option>
             <option value="hightolow">Sort by:High to Low</option>
             <option value="lowtohigh">Sort by:Low to High</option>
           </select>

        </div>
        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <Productitems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collections
