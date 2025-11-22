import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import pic from "./Pages/Images/About-Images/baner.png"

import pic6 from "./Pages/Images/About-Images/it1.png"
import pic8 from "./Pages/Images/About-Images/it2.png"
import pic9 from "./Pages/Images/About-Images/it3.png"
import pic10 from "./Pages/Images/About-Images/aruna.jpg"
import pic11 from "./Pages/Images/About-Images/tea4.jpg"
import pic12 from "./Pages/Images/About-Images/bamboo.jpg"

import pic13 from "./Pages/Images/Products/Browndove Dialyser.jpg"
import abcdi from "./Pages/Images/Products/pristine-dialyser-bd-130-polyethrsulfone.jpg"
import abcdj from "./Pages/Images/Products/pristine-dialyser-bd-240-polyethrsulfone.jpg"
import abcdk from "./Pages/Images/Products/pristine-dialyser-bd-260-polyethrsulfone.jpg"

import abcde from "./Pages/Images/Products/post-pump-bloodlines.jpg"
import abcdf from "./Pages/Images/Products/pre-pump-bloodlines.jpg"
import pic7 from "./Pages/Images/Products/curum-advance-bloodlines.jpg"
import ab from "./Pages/Images/Products/curum-bloodlines.jpg"


import abcdn from "./Pages/Images/Products/triple-lumen-catheter short term.jpg"
import abc from "./Pages/Images/Products/double-lumen-catheter short term.jpg"
import abcdl from "./Pages/Images/Products/single-lumen-catheter short term.jpg"
import pic14 from "./Pages/Images/Products/capd-catheter long term.jpg"
import abcd from "./Pages/Images/Products/perm-catheter long term.jpg"


import pic144 from "./Pages/Images/Products/browndove-av-fistula-needle.jpg"
import abcdg from "./Pages/Images/Products/priming-tube-.jpg"
import abcdh from "./Pages/Images/Products/pristine-avf-needles.jpg"
import abcdm from "./Pages/Images/Products/Transducer protector- Eco Filter.jpg"
// 17

import pic145 from "./Pages/Images/About-Images/center.jpg"
import picnew from "./Pages/Images/About-Images/new.jpg"
import picnew1 from "./Pages/Images/About-Images/new1.jpg"
import picnew2 from "./Pages/Images/About-Images/new3.jpg"
import pic111 from "./Pages/Images/About-Images/powder.jpg"
import pic112 from "./Pages/Images/About-Images/gur.jpg"

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
      <section className="relative banner h-[450px] bg-no-repeat flex items-center bg-bottom justify-center" style={{ backgroundImage: `url(${pic})` }}>
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
              Insights on <span className="text-cyan-500 font-bold">Global Trade</span> –
              <br /> medical devices , &amp; IT consulting ,
              <span className="text-cyan-500 font-bold">Arunachal Pradesh Green Tea</span>, Bamboo smoked tea and Organic Jaggery”
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
              className="w-full flex justify-between items-center bg-gradient-to-r from-sky-700 to-sky-400 text-white py-3 px-4 rounded-lg shadow-md font-bold text-lg sm:text-2xl hover:opacity-90 transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Pill className="w-6 h-6" /> Medical Devices
              </span>
              {openSection === "generic" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openSection === "generic" && (
              <div className="grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
                <div className="bg-white rounded-lg pb-4  shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={pic13} alt="Medicine 1" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">Browndove Dialyser</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcdi} alt="Medicine 2" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">pristine-dialyser-bd-130-polyethrsulfone</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcdj} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">pristine-dialyser-bd-240-polyethrsulfone</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcdk} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">pristine-dialyser-bd-260-polyethrsulfone</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcde} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">post-pump-bloodlines</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcdf} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">pre-pump-bloodlines</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={pic7} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">curum-advance-bloodlines</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={ab} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">triple-lumen-catheter</p>
                </div>
                {/* ****************** */}
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcdn} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">double-lumen-cathete</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abc} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">single-lumen-catheter</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcdl} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">capd-catheter</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={pic14} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">perm-catheter</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcd} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">browndove-av-fistula-needle</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={pic144} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">priming-tube</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcdg} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">pristine-avf-needles</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcdh} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">Transducer protector- Eco Filter</p>
                </div>
                <div className="bg-white rounded-lg pb-4 shadow hover:shadow-xl hover:scale-105 transition">
                  <img src={abcdm} alt="Medicine 3" className="w-full h-48 object-contain p-4" />
                  <p className="text-gray-700 font-semibold">Transducer protector- Eco Filter</p>
                </div>
             

              </div>
            )}
          </div>

          {/* Laboratory Chemicals */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection("lab")}
              className="w-full flex justify-between items-center bg-gradient-to-r from-green-700 to-green-400 text-white py-3 px-4 rounded-lg shadow-md font-bold text-lg sm:text-2xl hover:opacity-90 transition cursor-pointer"
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
              className="w-full flex justify-between items-center bg-gradient-to-r from-purple-700 to-purple-400 text-white py-3 px-4 rounded-lg shadow-md font-bold text-lg sm:text-2xl hover:opacity-90 transition cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Bandage className="w-6 h-6" /> Tea , & Jaggery
              </span>
              {openSection === "cast" ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openSection === "cast" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={pic12} alt="Bandages" className="w-full h-48 object-contain mb-2" />
                  <p className="text-gray-700 font-semibold">Bamboo Smoked Tea</p>
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={pic10} alt="Bandages" className="w-full h-48 object-contain mb-2" />
                  <p className="text-gray-700 font-semibold">Arunachal Green Tea</p>
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={pic11} alt="Crepe Bandages" className="w-full h-48 object-contain mb-2" />
                  <p className="text-gray-700 font-semibold">Organic Jaggery</p>
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={pic112} alt="Crepe Bandages" className="w-full h-48 object-contain mb-2" />
                  <p className="text-gray-700 font-semibold">Organic Jaggery</p>
                </div>
                <div className="bg-white rounded-lg shadow hover:shadow-xl hover:scale-105 transition p-4 text-center">
                  <img src={pic111} alt="Crepe Bandages" className="w-full h-48 object-contain mb-2" />
                  <p className="text-gray-700 font-semibold">Organic Jaggery</p>
                </div>

              </div>
            )}
          </div>
          {/* Copper  */}
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
                  src={videos[activeVideo].src + ""}
                  title={`Video ${videos[activeVideo].id}`}
                  className="w-full h-60 sm:h-72 md:h-96"
                  // allow="encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  key={videos[activeVideo].id}
                  src={videos[activeVideo].src}
                  // poster={videos[activeVideo].poster}
                  controls
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