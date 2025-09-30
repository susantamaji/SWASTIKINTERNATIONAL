import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import pic from "./Pages/Images/About-Images/banner2.png"

import pic6 from "./Pages/Images/About-Images/it1.png"
import pic7 from "./Pages/Images/About-Images/ecg.jpg"
import pic8 from "./Pages/Images/About-Images/it2.png"
import pic9 from "./Pages/Images/About-Images/it3.png"
import pic10 from "./Pages/Images/About-Images/aruna.jpg"
import pic11 from "./Pages/Images/About-Images/tea4.jpg"
import pic12 from "./Pages/Images/About-Images/bamboo.jpg"
import pic13 from "./Pages/Images/About-Images/egg.jpg"
import pic14 from "./Pages/Images/About-Images/vital.webp"

import picnew from "./Pages/Images/About-Images/new.jpg"
import picnew1 from "./Pages/Images/About-Images/new1.jpg"
import picnew2 from "./Pages/Images/About-Images/new3.jpg"

import video1st from "./Pages/Images/About-Images/video1st.mp4"
import video2nd from "./Pages/Images/About-Images/video2nd.mp4"
import { NavLink } from 'react-router-dom'
import { ChevronDown, ChevronUp, FlaskConical, Pill, Bandage, ChevronLeft, ChevronRight, Columns4 } from "lucide-react";

function Products() {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };


  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 1,
      src: video1st,
    },
    {
      id: 2,
      src: video2nd,
      poster: "https://images.pexels.com/photos/14849664/pexels-photo-14849664.jpeg",
    }
  ];


  const prevVideo = () => {
    setActiveVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setActiveVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

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
              <span className="text-cyan-500 font-bold">organic green tea</span>, bamboo smoke tea,
              jaggery, and industrial metals.
            </p>
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS------------ */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Generic Medicines */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("generic")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-sky-500 to-sky-600 text-white py-3 px-4 rounded-lg shadow-md font-bold text-lg sm:text-2xl hover:opacity-90 transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Pill className="w-6 h-6" /> Medical Devices
              </span>
              {openSection === "generic" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openSection === "generic" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
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
            )}
          </div>

          {/* Laboratory Chemicals */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("lab")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg shadow-md font-bold text-lg sm:text-2xl hover:opacity-90 transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <FlaskConical className="w-6 h-6" /> Software & IT Consulting
              </span>
              {openSection === "lab" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openSection === "lab" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={pic6} alt="Lab" className="w-full h-48 object-contain p-4" />
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={pic8} alt="Microscope" className="w-full h-48 object-contain p-4" />
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={pic9} alt="Tubes" className="w-full h-48 object-contain p-4" />
                </div>
              </div>
            )}
          </div>

          {/* Orthopaedic Cast */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("cast")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-4 rounded-lg shadow-md font-bold text-lg sm:text-2xl hover:opacity-90 transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Bandage className="w-6 h-6" /> Tea & Gur
              </span>
              {openSection === "cast" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openSection === "cast" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
                 <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={pic12} alt="Bandages" className="w-full h-48 object-contain mb-2" />
                  <p className="text-gray-700 font-semibold">Bamboo Smoke Tea</p>
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={pic10} alt="Bandages" className="w-full h-48 object-contain mb-2" />
                  <p className="text-gray-700 font-semibold">Arunachal Pradesh Tea</p>
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={pic11} alt="Crepe Bandages" className="w-full h-48 object-contain mb-2" />
                  <p className="text-gray-700 font-semibold">Indian Gur</p>
                </div>
               
              </div>
            )}
          </div>

          {/* Copper  */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("castf")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 px-4 rounded-lg shadow-md font-bold text-lg sm:text-2xl hover:opacity-90 transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
               <Columns4 className="w-6 h-6" /> Copper
                
              </span>
              {openSection === "castf" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openSection === "castf" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={picnew} alt="Bandages" className="w-full h-48 object-contain mb-2" />
                  {/* <p className="text-gray-700 font-semibold">Arunachal Pradesh Tea</p> */}
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={picnew1} alt="Crepe Bandages" className="w-full h-48 object-contain mb-2" />
                  {/* <p className="text-gray-700 font-semibold">Indian Gur</p> */}
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={picnew2} alt="Bandages" className="w-full h-48 object-contain mb-2" />
                  {/* <p className="text-gray-700 font-semibold">Bamboo Smoke Tea</p> */}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>


      {/* Video Carousel */}

      <section className=" bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="md:text-4xl font-bold text-cyan-600 mb-8">
            OUR WORK ➡️
          </h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Video */}
            <div className="rounded-2xl overflow-hidden bg-black">
              {videos[activeVideo].src.includes("youtube") ? (
                <iframe
                  src={videos[activeVideo].src + "&autoplay=1"}
                  title={`Video ${videos[activeVideo].id}`}
                  className="w-full h-60 sm:h-72 md:h-96"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  key={videos[activeVideo].id}
                  src={videos[activeVideo].src}
                  // poster={videos[activeVideo].poster}
                  controls
                  autoPlay
                  className="w-full h-60 sm:h-72 md:h-96 object-cover"
                />
              )}
            </div>

            {/* Caption */}
            <div className="p-4 bg-white shadow rounded-b-2xl">
              <h3 className="text-lg font-semibold text-gray-700">
                {/* Customer {videos[activeVideo].id} */}
              </h3>
              <p className="text-sm text-gray-500">
                “This testimonial highlights the great experience with our service.”
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevVideo}
              className="absolute top-1/2 -left-6 sm:-left-12 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-200 transition"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <button
              onClick={nextVideo}
              className="absolute top-1/2 -right-6 sm:-right-12 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-200 transition"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4 space-x-2">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideo(idx)}
                  className={`w-3 h-3 rounded-full ${idx === activeVideo ? "bg-cyan-600" : "bg-gray-300"
                    }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  )
}

export default Products