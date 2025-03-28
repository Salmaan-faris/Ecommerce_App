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
import SearchBar from './component/Search'
import { ToastContainer, toast } from 'react-toastify';
import Login from './pages/Login'

function App() {
  return (
   <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw] '>
    <ToastContainer/>
    <Navbar/>
    <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>} / >
      <Route path='/about' element={<About/>} / >
      <Route path='/collections' element={<Collections/>} / >
      <Route path='/cart' element={<Cart/>} / >
      <Route path='/contact' element={<Contact/>} / >
      <Route path='/placeorder' element={<Placeorder/>} / >
      <Route path='/order' element={<Order/>} / >
      <Route path='/products/:productId' element={<Product/>} / >
      <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer/>
      
   </div>
  )
}

export default App
