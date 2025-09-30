import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import pic from "./Pages/Images/indexPhoto/3rd.jpg"
import { NavLink } from 'react-router-dom'
import { FaPlay } from "react-icons/fa";
import { Play } from "lucide-react";

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
import pic111 from "./Pages/Images/About-Images/banner5.png"
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
        img: man2,
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
                        Swastik International is a renowned export firm specializing in
                        <span className="font-semibold text-gray-800 hover:text-cyan-500 transition">
                            Medical Devices, Laboratory Chemicals, Laboratory Equipment, Generic Medicines
                        </span>
                        and Disposable Items. We are committed to facilitating global trade by delivering top-quality products and services to international markets. With a strong focus on customer satisfaction and strict adherence to international standards, we have consistently remained a preferred partner for businesses aiming to expand their global presence.
                    </p>

                </section>
            </div>

            <section className="bg-[#f9f9f9] py-16 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-[#0BAAB6] font-semibold">Who We Are</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                            Driving Innovation in <br />
                            <span className="text-[#B88E2F]">Healthcare & Industries.</span>
                        </h2>
                        <p className="mt-4 text-gray-600">
                            {/* <strong>Since 2012, Operating across India & Abroad.</strong> */}
                        </p>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            <span className="font-semibold">Elete Biotech Pvt Ltd</span> is a
                            diversified enterprise engaged in multiple domains. We specialize in{" "}
                            <strong>medical devices</strong> and{" "}
                            <strong>software & IT consulting</strong>, while also expanding into{" "}
                            <strong>Arunachal green tea</strong>,{" "}
                            <strong>bamboo smoking jaguar</strong>,{" "}
                            <strong>organic gur (jaggery)</strong>, and{" "}
                            <strong>copper & aluminium scrap trading</strong>. Our focus is on
                            quality, innovation, and sustainable growth for healthcare, technology,
                            and eco-friendly industries.
                        </p>
                        <NavLink to={"/contact"}>
                            <button className="mt-6 bg-[#0BAAB6] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#088892] transition">
                                Contact us
                            </button>
                        </NavLink>


                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800">2,550+</h3>
                                <p className="text-gray-500 text-sm">Happy Clients</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800">12,000+</h3>
                                <p className="text-gray-500 text-sm">Projects & Deliveries</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800">150+</h3>
                                <p className="text-gray-500 text-sm">Products & Services</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800">15+</h3>
                                <p className="text-gray-500 text-sm">Global Partnerships</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image + Video */}
                    <div className="relative">
                        <img
                            src={pic111}
                            alt="Business Growth"
                            className="rounded-lg shadow-lg"
                        />
                        {/* Overlay badge */}
                        {/* <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-3">
                            <div className="bg-[#0BAAB6] text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
                                12
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    Years of Excellence
                                </p>
                                <span className="text-xs text-gray-500">Since 2012</span>
                            </div>
                        </div> */}

                        {/* Play button */}
                        {/* <div className="absolute bottom-2 right-6 bg-[#0BAAB6] text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-[#088892] transition">
                            <FaPlay />
                        </div> */}
                    </div>
                </div>

                {/* Cards Section */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group border-t-4 border-transparent hover:border-[#0BAAB6]">
                        <h4 className="font-bold text-gray-800 mb-2 group-hover:text-[#0BAAB6]">
                            Medical Devices
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Delivering advanced medical devices and diagnostic solutions to improve
                            patient care.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group border-t-4 border-transparent hover:border-[#0BAAB6]">
                        <h4 className="font-bold text-gray-800 mb-2 group-hover:text-[#0BAAB6]">
                            Technology Consulting
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Helping businesses grow with IT consulting, software development, and
                            digital transformation.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group border-t-4 border-transparent hover:border-[#0BAAB6]">
                        <h4 className="font-bold text-gray-800 mb-2 group-hover:text-[#0BAAB6]">
                            Sustainable Products
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Promoting eco-friendly products like Arunachal green tea, bamboo smoking
                            jaguar, and organic gur.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition group border-t-4 border-transparent hover:border-[#0BAAB6]">
                        <h4 className="font-bold text-gray-800 mb-2 group-hover:text-[#0BAAB6]">
                            Global Trade
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Trusted supplier of copper & aluminium scrap, supporting industries
                            worldwide with reliable sourcing.
                        </p>
                    </div>
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