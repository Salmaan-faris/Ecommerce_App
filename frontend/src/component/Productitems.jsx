import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

function Productitems({id,image,price ,name}) {
    const  {currency}= useContext(Shopcontext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/products/${id}`} >
        <div className='overflow-hidden pt-3'>
            <img src={image[0]} alt="" className='transition ease-in-out hover:scale-110' />
            <div>
                <p className='text-sm pt-3 pb-1'>{name}</p>
                <p className='text-sm font-medium'>{currency} {price} </p>
            </div>

        </div>
       
    </Link>
  )
}

export default Productitems
