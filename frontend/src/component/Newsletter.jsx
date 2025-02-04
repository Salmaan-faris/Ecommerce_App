import React from 'react'

function Newsletter() {

    const subHandler=(event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center py-2 mt-4'>
      <p className='text-gray-800 text-2xl font-medium '>Subscribe Now And Get 20% OFF</p>
      <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa officia magni sequi animi deleniti excepturi.</p>
      <form onSubmit={subHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 my-6 mx-auto'>
        <input type="email" required className='w-full outline-none sm:flex  '  placeholder='Enter Email Address' />
        <button type='submit' className='py-4 px-10 bg-black text-white cursor-pointer'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Newsletter
