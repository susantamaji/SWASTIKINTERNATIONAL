import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import pic from "./Pages/Images/Services-Photos/shipe.jpg"
import { NavLink } from 'react-router-dom'

import pic1 from "./Pages/Images/About-Images/DialysisCatheter.png"
import pic2 from "./Pages/Images/About-Images/blood.jpg"
import pic3 from "./Pages/Images/About-Images/Dialyzer.avif"
import pic4 from "./Pages/Images/About-Images/Central Venous Catheter & Kit.jpg"
import pic5 from "./Pages/Images/About-Images/On Off Kits.webp"
import pic6 from "./Pages/Images/About-Images/igh Pressure Syringe, J Tube.webp"

import pic7 from "./Pages/Images/About-Images/Surgical Mask.jpg"
import pic8 from "./Pages/Images/About-Images/Surgical Cap.jpg"
import pic9 from "./Pages/Images/About-Images/Shoe Cover.jpg"
import pic10 from "./Pages/Images/About-Images/Surgical Gown.webp"
import pic11 from "./Pages/Images/About-Images/Disposable Aprons.webp"
import pic12 from "./Pages/Images/About-Images/Surgical Gloves.jpg"
import pic13 from "./Pages/Images/About-Images/Examination Gloves.jpg"
import pic14 from "./Pages/Images/About-Images/Eye Mask.jpg"

import man from "./Pages/Images/Testimonials-Photos/man.jpg"
import man2 from "./Pages/Images/Testimonials-Photos/man2.jpg"
import girl from "./Pages/Images/Testimonials-Photos/girls.webp"
import girl2 from "./Pages/Images/Testimonials-Photos/girls2.jpg"
import { ChevronLeft, ChevronRight } from "lucide-react";


const testimonials = [
    {
        name: "Dr. Aakash Verma",
        role: "Orthopedic Surgeon",
        date: "Jan 15, 2023",
        text: "The quality of medical devices we received has been outstanding. The orthopaedic casts and bandages are durable, patient-friendly, and meet international standards. I can confidently recommend their products to other healthcare professionals.",
        img: man,
    },
    {
        name: "Prof. Neha Sharma",
        role: "Head of Chemistry Lab, Delhi University",
        date: "Mar 10, 2023",
        text: "Their laboratory chemicals and equipment have greatly improved the accuracy of our experiments. From glassware to advanced microscopes, the products are reliable, precise, and delivered on time.",
        img: girl2,
    },
    {
        name: "Dr. Smita Kulkarni",
        role: "Pharmaceutical Distributor",
        date: "Aug 2, 2023",
        text: "We have been sourcing generic medicines from them for over a year now. The pricing is competitive, packaging is professional, and the medicines are WHO-GMP certified. Excellent service and transparency throughout.",
        img: girl,
    },
    {
        name: "Rahul Khanna",
        role: "Pathologist, Mumbai",
        date: "Nov 25, 2023",
        text: "Our diagnostic center relies on their laboratory equipment. The centrifuges, testing tubes, and other devices are robust and user-friendly. Their customer support is quick and very professional.",
        img:man2,
    },
];


function About() {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className='pt-20'>
                {/* Hero Section */}
                <section className="relative bg-gray-900 text-white">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img src={pic} alt="Ship Export" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                    {/* Content */}
                    <div className="relative max-w-7xl mx-auto px-6 py-20 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 hover:text-cyan-500 transition duration-300">ABOUT US</h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
                            We freight to all over the world The best logistic company,
                            <span className="font-bold text-cyan-500 hover:text-white transition">FAST</span> and
                            <span className="font-bold text-cyan-500 hover:text-white transition">SAFELY!</span>
                        </p>
                        {/* Breadcrumb */}
                        <p className="mt-4 text-sm font-bold">
                            <a href="#" className="text-cyan-500 hover:underline"> <NavLink to={"/"}>Home</NavLink></a> /
                            <span className="text-gray-300"><NavLink>Our Services</NavLink></span>
                        </p>
                    </div>
                </section>
                {/* About Content */}
                <section className="py-12 px-6 md:px-16 lg:px-24 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 transition">ABOUT US</h2>
                    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Swastik International is a renowned export firm for <span className="font-semibold text-gray-800 hover:text-red-500 transition">Medical Devices, Laboratory Chemicals, Laboratory Equipment, Generic Medicine</span> and Disposable Items committed to facilitating global trade by delivering top-quality products and services to international markets. With a strong focus on customer satisfaction and adherence to international standards, we have consistently been a preferred partner for businesses seeking to expand their global reach.
                    </p>
                </section>
            </div>

            <section className="py-12 bg-gray-50"> {/* Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-sky-700 to-sky-500 inline-block px-6 py-2 rounded-md shadow">
                        Our Products </h2>
                </div> {/* Products Grid */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Product Card */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic1} alt="Dialysis Catheter" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Dialysis Catheter</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic2} alt="Blood Line" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Blood Line</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic3} alt="Dialyzer" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Dialyzer</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic4} alt="Central Venous Catheter & Kit" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Central Venous Catheter &amp; Kit</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic5} alt="On Off Kits" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">On Off Kits</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic6} alt="High Pressure Syringe, J Tube" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">High Pressure Syringe, J Tube</h3>
                    </div>
                </div>
            </section>

            {/* Disposable mask--- */}
            <section className="py-12 bg-gray-50"> {/* Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white bg-gradient-to-r from-sky-700 to-sky-500 inline-block px-6 py-2 rounded-md shadow">
                        Disposable Items </h2>
                </div> {/* Products Grid */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Product Card */}
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic7} alt="Surgical Mask" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Surgical Mask</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic8} alt="Surgical Cap" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Surgical Cap</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic9} alt="Shoe Cover" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Shoe Cover</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic10} alt="Surgical Gown" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Surgical Gown</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic11} alt="Disposable Aprons" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Disposable Aprons</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic12} alt="Surgical Gloves" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Surgical Gloves</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic13} alt="Examination Gloves" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Examination Gloves</h3>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition transform duration-300">
                        <img src={pic14} alt="Eye Mask" className="h-28 object-contain mb-4" />
                        <h3 className="text-gray-800 font-medium text-center">Eye Mask</h3>
                    </div>
                </div> {/* Table Section */}
                <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-12 overflow-x-auto">
                    <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden text-sm">
                        <thead className="bg-sky-600 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">Product</th>
                                <th className="py-3 px-4 text-left">Size &amp; Information</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-100 transition">
                                <td className="py-3 px-4">Surgical Reinforced Gown</td>
                                <td className="py-3 px-4">Normal / Wraparound, SMMS, Size: M / L / XL</td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="py-3 px-4">Isolation Gown</td>
                                <td className="py-3 px-4">PP Spunbond / Impervious PP+PE Laminated, Size: M / L / XL</td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="py-3 px-4">3 Ply Mask</td>
                                <td className="py-3 px-4">Premium / Economy</td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="py-3 px-4">Shoe Cover</td>
                                <td className="py-3 px-4">Material: LLDPE / Non-Woven</td>
                            </tr>
                            <tr className="hover:bg-gray-100 transition">
                                <td className="py-3 px-4">Bouffant Cap</td>
                                <td className="py-3 px-4">Thin Non-Woven</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>


            <section className="bg-blue-50 py-16">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10">
                        Here is what our Clients are saying About us
                    </h2>

                    {/* Testimonial Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 transition-all duration-500">
                        <img
                            src={testimonials[current].img}
                            alt={testimonials[current].name}
                            className="w-28 h-28 rounded-full object-cover border-4 border-blue-200"
                        />
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {testimonials[current].name}
                            </h3>
                            <p className="text-gray-600 mb-2">{testimonials[current].role}</p>
                            <p className="text-gray-700 mb-3">{testimonials[current].text}</p>
                            <span className="text-sm text-gray-500">{testimonials[current].date}</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center mt-8 gap-6">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-white shadow hover:bg-blue-100 transition"
                        >
                            <ChevronLeft className="w-6 h-6 text-blue-700" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-3 h-3 rounded-full transition ${current === index ? "bg-blue-600" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-white shadow hover:bg-blue-100 transition"
                        >
                            <ChevronRight className="w-6 h-6 text-blue-700" />
                        </button>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default About