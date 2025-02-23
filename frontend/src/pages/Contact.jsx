import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import Newsletter from '../component/Newsletter'

function Contact() {
  return (
    <div>
      <div className='text-2xl border-t pt-10 text-center '>
        <Title text1={"CONTACT"} text2={'US'} />
      </div>
      <div className='flex flex-col justify-center md:flex-row gap-6 my-10 mb-20 '>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-5 '>
          <p className='text-gray-600 font-semibold text-xl' >Our Store</p>
          <p className='text-gray-500'>Calicut ,Kerala <br />India</p>
          <p className='text-gray-500'>Tel: +1-22-3453-6353 <br />Email: contacus@gmail.com</p>
          <p className='text-gray-600 font-semibold text-xl'>Career at Forever</p>
          <p className='text-gray-500'>Learn more about our team and job opening </p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore More</button>
        </div>
      </div>
      <Newsletter/>
    </div>
  )
}

export default Contact
