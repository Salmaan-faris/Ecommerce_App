import React, { useState } from 'react'

function Login() {
  const [currentstate , setCurrentState] = useState('Login')
  const onSubmitHandler = (event)=>{
      event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700 '>
       <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentstate}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-700 ' />
       </div>

       {currentstate === 'Login' ? '' : <input type="text" className='w-full py-2 px-4 border border-gray-500' placeholder='Enter Your Name' required /> }
       <input type="email" className='w-full py-2 px-4 border border-gray-500' placeholder='Email' required />
       <input type="password" className='w-full py-2 px-4 border border-gray-500' placeholder='Password' required />
       <div className="flex justify-between w-full text-sm mt-[-12px]">
        <p className='cursor-pointer'>forgot your password ?</p>
        {
          currentstate === 'Login' ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer' >Create account</p> : 
          <p onClick={()=>setCurrentState('Login')} className='cursor-pointer' >Login here</p>
        }
       </div>
       <button className='bg-black text-white py-2 px-6'>{currentstate === 'Login' ? 'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login
