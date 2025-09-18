import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import pic from "./Pages/Images/About-Images/banner2.png"

import pic6 from "./Pages/Images/About-Images/igh Pressure Syringe, J Tube.webp"
import pic7 from "./Pages/Images/About-Images/Surgical Mask.jpg"
import pic8 from "./Pages/Images/About-Images/Surgical Cap.jpg"
import pic9 from "./Pages/Images/About-Images/Shoe Cover.jpg"
import pic10 from "./Pages/Images/About-Images/Surgical Gown.webp"
import pic11 from "./Pages/Images/About-Images/Disposable Aprons.webp"
import pic12 from "./Pages/Images/About-Images/Surgical Gloves.jpg"
import pic13 from "./Pages/Images/About-Images/Examination Gloves.jpg"
import pic14 from "./Pages/Images/About-Images/Eye Mask.jpg"
import { NavLink } from 'react-router-dom'

function Products() {
  return (
    <div className='pt-20'>
      {/* <Navbar /> */}
      <section className="relative banner h-[450px] bg-no-repeat  flex items-center bg-center justify-center" style={{ backgroundImage: `url(${pic})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Content */}
        <div className="relative container mx-auto px-20 flex flex-col md:flex-row justify-between items-center text-white">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold">OUR PRODUCTS</h2>
            <p className="mt-2">
              <NavLink to={"/"}><a><span className="text-cyan-500 font-semibold cursor-pointer">Home</span></a></NavLink>
             <NavLink to={"/blog"}> <a href="./singal_blog.html"><span className="text-gray-300 cursor-pointer"> / Blog</span></a></NavLink>
            </p>
          </div>
          {/* Right Text */}
          <div className="mt-4 md:mt-0 text-center md:text-right max-w-lg">
            <p className="text-lg font-medium">
              Insights on <span className="text-cyan-500 font-bold">Global Trade</span> – from
              <br /> medical devices &amp; IT consulting to
              <span className="text-cyan-500 font-bold">organic green tea</span>, bamboo,
              jaggery, and industrial metals.
            </p>
          </div>
        </div>
      </section>

        {/* OUR PRODUCTS------------ */}

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Generic Medicines */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white bg-gradient-to-r from-sky-500 to-sky-600 py-2 rounded mb-8">
            Generic Medicines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition">
              <img src={pic7} alt="Medicine 1" className="w-full h-48 object-contain p-4" />
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition">
              <img src={pic14} alt="Medicine 2" className="w-full h-48 object-contain p-4" />
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition">
              <img src={pic13} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
            </div>
          </div>
          {/* Laboratory Chemicals */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white bg-gradient-to-r from-sky-500 to-sky-600 py-2 rounded mb-8">
            Laboratory Chemicals &amp; Equipment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition">
              <img src={pic12} alt="Lab" className="w-full h-48 object-contain p-4" />
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition">
              <img src={pic11} alt="Microscope" className="w-full h-48 object-contain p-4" />
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition">
              <img src={pic8} alt="Tubes" className="w-full h-48 object-contain p-4" />
            </div>
          </div>
          {/* Orthopaedic Cast */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white bg-gradient-to-r from-sky-500 to-sky-600 py-2 rounded mb-8">
            Orthopaedic Cast
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
              <img src={pic9} alt="Bandages" className="w-full h-48 object-contain mb-2" />
              <p className="text-gray-700 font-semibold">Bandages</p>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
              <img src={pic10} alt="Crepe Bandages" className="w-full h-48 object-contain mb-2" />
              <p className="text-gray-700 font-semibold">Crepe Bandages</p>
            </div>
            <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
              <img src={pic6} alt="Bandages" className="w-full h-48 object-contain mb-2" />
              <p className="text-gray-700 font-semibold">Bandages</p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default Products