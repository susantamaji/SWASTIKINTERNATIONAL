import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact from './components/Contact'
import Products from './components/Products'
import Index from './components/Index'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Blog from './components/Blog'

function App() {
  return (
    <div className='bg-[#ffffff] font-bahnschrift'>
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blog' element={<Blog/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App