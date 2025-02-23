 import React from 'react'
 import Title from '../component/Title'
 import { assets } from '../assets/assets'
 import Newsletter from '../component/Newsletter'
 
 function About() {
   return (
    <div>
      <div className='text-2xl pt-8 border-t border-gray-400 text-center'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="flex flex-col md:flex-row mt-10 gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center  gap-6 text-gray-500 md:w-1/2'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facere assumenda consectetur rem sed praesentium fuga optio delectus sint labore, voluptates illum similique asperiores 
            consequuntur incidunt facilis maiores iusto. Possimus libero iure deleniti labore nam aliquam placeat quas officiis dolorem?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maxime vero voluptatibus. Rerum architecto excepturi velit ullam minus? Laboriosam, eaque magnam voluptas ducimus labore minima,
             quidem assumenda suscipit debitis corrupti cum, excepturi maiores explicabo.
          </p>
          <b className='text-gray-800'>Our Mission </b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sit magni aliquid, dolore nisi vel magnam eum fugiat, nam odio veritatis corrupti earum animi! Assumenda in 
              natus fugiat, quasi itaque repellat magni recusandae repudiandae optio adipisci provident non sit laboriosam cum vero odit facere dolorem?</p>
        </div>
      </div>
      <div className='text-xl py-4 mt-5'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row mb-18 text-sm gap-5  '>
         <div className="flex flex-col py-8 px-10 md:px-16 border border-gray-300 sm:py-20 gap-5"> 
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates rem temporibus. Ad accusantium
             quaerat officia accusamus dicta voluptates molestiae maiores non? Eligendi assumenda expedita quae impedit eius, nisi quod?</p>
         </div>
         <div className="flex flex-col py-8 px-10 md:px-16  border-gray-300 border sm:py-20 gap-5"> 
          <b>Convenience :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates rem temporibus. Ad accusantium
             quaerat officia accusamus dicta voluptates molestiae maiores non? Eligendi assumenda expedita quae impedit eius, nisi quod?</p>
         </div>
         <div className="flex flex-col py-8 px-10 md:px-16 border  border-gray-300 sm:py-20 gap-5"> 
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptates rem temporibus. Ad accusantium
             quaerat officia accusamus dicta voluptates molestiae maiores non? Eligendi assumenda expedita quae impedit eius, nisi quod?</p>
         </div>
      </div>
      <Newsletter/>
    </div>
   )
 }
 
 export default About
 