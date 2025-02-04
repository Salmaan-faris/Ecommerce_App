import React from 'react'
import Hero from '../component/hero'
import LatestCollecion from '../component/LatestCollecion'
import Bestseller from '../component/Bestseller'
import Ourpolicy from '../component/Ourpolicy'
import Newsletter from '../component/Newsletter'



function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollecion/>
      <Bestseller/>
      <Ourpolicy/>
      <Newsletter/>
      
    </div>
  )
}

export default Home
