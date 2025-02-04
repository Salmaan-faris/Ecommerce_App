import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Placeorder from './pages/Placeorder'
import Order from './pages/Order'
import Product from './pages/product'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  return (
   <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw] '>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} / >
      <Route path='/about' element={<About/>} / >
      <Route path='/collections' element={<Collections/>} / >
      <Route path='/cart' element={<Cart/>} / >
      <Route path='/contact' element={<Contact/>} / >
      <Route path='/placeorder' element={<Placeorder/>} / >
      <Route path='/order' element={<Order/>} / >
      <Route path='/product' element={<Product/>} / >
    </Routes>
    <Footer/>
      
   </div>
  )
}

export default App
