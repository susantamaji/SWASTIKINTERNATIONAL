import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pic1 from "./Pages/Images/indexPhoto/1st.jpg";
import pic2 from "./Pages/Images/indexPhoto/2nd.jpg";
import pic3 from "./Pages/Images/indexPhoto/3rd.jpg";
import pic4 from "./Pages/Images/indexPhoto/medical.jpeg"
import pic5 from "./Pages/Images/indexPhoto/it.jpg"
import pic6 from "./Pages/Images/indexPhoto/tea.jpg"
import pic7 from "./Pages/Images/indexPhoto/ship.jpeg"
import pic8 from "./Pages/Images/indexPhoto/handshak.jpeg"
import pic9 from "./Pages/Images/indexPhoto/form.jpeg"
import { NavLink } from "react-router-dom";


function Index() {
    const slides = [pic1, pic2, pic3];
    const [current, setCurrent] = useState(0);

    // Auto-slide every 5s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    // Handlers
    const prevSlide = () =>
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    const nextSlide = () =>
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));


    const [openCard, setOpenCard] = useState(null); // track which card is open

    const toggleCard = (id) => {
        setOpenCard(openCard === id ? null : id); // toggle on/off
    };

    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            {/* <Navbar /> */}

            {/* Hero Section */}
            <section className="relative pt-10 h-[70vh] md:h-[70vh] w-full overflow-hidden">
                {/* Slides */}
                <div
                    className="flex transition-transform duration-700 h-full"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((img, index) => (
                        <div
                            key={index}
                            className="min-w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
                    <h3 className="text-sm md:text-lg uppercase tracking-wider text-gray-200">
                        We Are Active
                    </h3>
                    <h1 className="text-2xl md:text-5xl font-bold my-4 text-white">
                        To Ship Your Product Trusted
                    </h1>
                    <p className="max-w-2xl text-sm md:text-base mb-6 text-gray-200">
                        Swastik International is a trusted export–import company dealing in{" "}
                        <span className="font-semibold">Medical Devices</span>,{" "}
                        <span className="font-semibold">Software &amp; IT Consulting</span>,{" "}
                        <span className="font-semibold">Arunachal Green Tea</span>,{" "}
                        <span className="font-semibold">Bamboo Smoking Jaguar</span>,{" "}
                        <span className="font-semibold">Organic Gur (Jaggery)</span>, and{" "}
                        <span className="font-semibold">Copper &amp; Aluminium Scrap</span>.
                    </p>
                    <NavLink to={"/contact"}>
                        <a
                            href=""
                            className="bg-[#B88E2F] hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
                        >
                            Contact Now
                        </a></NavLink>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow transition"
                >
                    <i className="fa-solid fa-arrow-left-long text-gray-800"></i>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full shadow transition"
                >
                    <i className="fa-solid fa-arrow-right-long text-gray-800"></i>
                </button>

                {/* Indicators (dots) */}
                <div className="absolute bottom-4 flex justify-center w-full gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ${index === current ? "bg-white" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* our services section start-------------- */}
            <section className="py-16 px-6 md:px-12  translate-y-10 transition-all duration-700 will-change-transform animate-on-scroll">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold uppercase text-[#094B72]">Our Services</h2>
                    <p className="text-gray-800 mt-2 text-2xl">
                        We specialize in global trade of medical devices, IT consulting solutions, agro products, and industrial
                        scrap.
                    </p>
                </div>
                {/* Cards Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="bg-[#F4F5F7] shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                        <img src={pic4} alt="Medical Devices" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">Medical Devices</h3>
                            <p className="text-gray-900 mb-4">
                                High-quality and certified medical devices supplied globally with international compliance.
                            </p>

                            {/* Show/Hide Text */}
                            {openCard === 1 && (
                                <div className="text-gray-500 mb-4">
                                    Our product range includes surgical instruments, hospital equipment, and healthcare devices sourced from trusted Indian manufacturers.
                                </div>
                            )}

                            <button
                                onClick={() => toggleCard(1)}
                                className="text-yellow-600 flex items-center space-x-1 font-medium hover:underline"
                            >
                                <span>{openCard === 1 ? "Read Less" : "Read More"}</span>
                                <i data-feather="chevron-right" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#F4F5F7] shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                        <img src={pic5} alt="IT Consulting" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">Software & IT Consulting</h3>
                            <p className="text-gray-900 mb-4">
                                Providing world-class IT consulting and software export services for global clients.
                            </p>

                            {openCard === 2 && (
                                <div className="text-gray-500 mb-4">
                                    From enterprise software to customized IT solutions, we bridge India’s tech expertise with international businesses.
                                </div>
                            )}

                            <button
                                onClick={() => toggleCard(2)}
                                className="text-yellow-600 flex items-center space-x-1 font-medium hover:underline"
                            >
                                <span>{openCard === 2 ? "Read Less" : "Read More"}</span>
                                <i data-feather="chevron-right" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#F4F5F7] shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                        <img src={pic6} alt="Agro & Scrap Exports" className="w-full h-48 bg-cover" />
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">Agro & Scrap Exports</h3>
                            <p className="text-gray-900 mb-4">
                                Supplying organic Arunachal green tea, bamboo smoking jaguar, organic jaggery, and industrial scrap worldwide.
                            </p>

                            {openCard === 3 && (
                                <div className="text-gray-500 mb-4">
                                    We export premium agro products along with copper and aluminium scrap, serving industries and wholesalers across the globe.
                                </div>
                            )}

                            <button
                                onClick={() => toggleCard(3)}
                                className="text-yellow-600 flex items-center space-x-1 font-medium hover:underline"
                            >
                                <span>{openCard === 3 ? "Read Less" : "Read More"}</span>
                                <i data-feather="chevron-right" className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Hero Section */}
            <section
                className="relative bg-fixed bg-center bg-cover h-[80vh] flex items-center justify-center text-center translate-y-10 transition-all duration-700 will-change-transform animate-on-scroll"
                style={{ backgroundImage: `url(${pic7})` }}
            >
                {/* Overlay */}
                <div className="absolute bg-[#094B72] bg-opacity-70" />

                {/* Content */}
                <div className="relative z-10 px-4 md:px-8 text-yellow-300 max-w-3xl">
                    <p className="text-xl md:text-base tracking-widest uppercase font-bold">
                        We Export &amp; Import
                    </p>
                    <h1 className="text-2xl md:text-5xl font-bold my-4">
                        Trusted Partner for Medical Devices, IT Solutions &amp; Agro Products
                    </h1>
                    <p className="text-lg md:text-xl text-white font-medium">
                        Delivering Organic Green Tea, Bamboo Jaguar, Jaggery, and Metal Scrap worldwide
                    </p>
                    <NavLink to={"/contact"}>
                    <a
                        href="./contact.html"
                        className="mt-6 inline-block bg-[#d5911a] hover:bg-[#b29609] text-white transition px-6 py-3 rounded-lg font-semibold"
                    >
                        Contact With Us
                    </a></NavLink>
                </div>
            </section>

            <div>=
                {/* WHY CHOOSE US Section */}
                <section className="py-16 px-6 md:px-20 bg-white  translate-y-10 transition-all duration-700 will-change-transform animate-on-scroll">
                    <div className="grid md:grid-cols-3 gap-10 items-center">
                        {/* Left Image */}
                        <div>
                            <img src={pic8} alt="Handshake" className="shadow-lg transform transition duration-500 hover:scale-105" />
                        </div>
                        {/* Middle Content */}
                        <div>
                            <h2 className="text-2xl text-[#004D7B] md:text-3xl font-bold mb-4 relative">
                                WHY CHOOSE US?
                                <span className="block w-16 h-0.5 bg-yellow-500 mt-2" />
                            </h2>
                            <div className="p-6">
                                <p className="text-gray-600 mb-4">
                                    At <span className="font-semibold">Swastik International</span>, we are
                                    committed to connecting India’s finest products with global markets.
                                    From{" "}
                                    <span className="font-medium">medical devices and IT solutions</span> to{" "}
                                    <span className="font-medium">
                                        organic green tea, bamboo products, jaggery, and metal scrap
                                    </span>
                                    , we ensure world-class quality and reliability.
                                </p>

                                <p className="text-gray-600 mb-6">
                                    With a strong supply chain, certified products, and ethical business
                                    practices, we deliver excellence that builds lasting partnerships
                                    worldwide.
                                </p>

                                {/* Toggle Button */}
                                <button
                                    onClick={() => setShowMore(!showMore)}
                                    className="text-yellow-600 font-semibold flex items-center gap-2 hover:translate-x-2 transition"
                                >
                                    {showMore ? "READ LESS" : "READ MORE"}
                                    <i data-lucide={showMore ? "chevron-up" : "chevron-right"} />
                                </button>

                                {/* Hidden Content */}
                                {showMore && (
                                    <div className="mt-4 text-gray-700 space-y-3">
                                        <p>
                                            🌍 We export to multiple countries ensuring compliance with
                                            international standards.
                                        </p>
                                        <p>
                                            ✅ Our team focuses on sustainability, innovation, and customer
                                            satisfaction at every step.
                                        </p>
                                        <p>
                                            📦 From sourcing to logistics, we manage everything seamlessly to
                                            ensure timely delivery.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Right Features */}
                        <div className="space-y-6 border-l-2 border-red-500 pl-6">
                            {/* Feature */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white transform transition duration-500 group-hover:scale-110 group-hover:bg-[#004D7B]">
                                    <i className="fa-solid fa-handshake" />
                                </div>
                                <span className="font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                                    Trusted Global Partner
                                </span>
                            </div>
                            {/* Feature */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white transform transition duration-500 group-hover:scale-110 group-hover:bg-[#004D7B]">
                                    <i className="fa-solid fa-lock-open" />
                                </div>
                                <span className="font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                                    Quality &amp; Compliance
                                </span>
                            </div>
                            {/* Feature */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white transform transition duration-500 group-hover:scale-110 group-hover:bg-[#004D7B]">
                                    <i className="fa-solid fa-thumbs-up" />
                                </div>
                                <span className="font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                                    100% Customer Satisfaction
                                </span>
                            </div>
                            {/* Feature */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white transform transition duration-500 group-hover:scale-110 group-hover:bg-[#004D7B]">
                                    <i className="fa-solid fa-location-dot" />
                                </div>
                                <span className="font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                                    Global Reach
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Service Process */}

                <section className="py-16 text-center">
                    <div className="max-w-6xl mx-auto px-4 md:px-6">
                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#004D7B]">
                            OUR SERVICE PROCESS
                        </h2>
                        <p className="text-gray-800 text-2xl mb-8 md:mb-12">
                            We follow a streamlined process that ensures efficiency, quality, and trust at every step.
                            From understanding client requirements and sourcing premium products to rigorous quality
                            checks and on-time delivery, our service process is designed to build long-term partnerships
                            and deliver exceptional value worldwide.
                        </p>

                        {/* Responsive Line */}
                        <div className="hidden md:block">
                            <hr className="w-[900px] z-10 h-1 bg-[#004D7B] relative left-20 top-[90px]" />
                        </div>
                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center animate-on-scroll  translate-y-10">
                                <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center border-2 border-[#004D7B] rounded-full bg-white shadow-md transition transform group-hover:scale-110">
                                    <i className="fa-solid fa-plane-circle-check text-3xl md:text-4xl text-gray-500" />
                                    <span className="absolute -left-3 -top-3 bg-yellow-500 text-gray-600 text-xs md:text-sm w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold">1</span>
                                </div>
                                <p className="mt-4 font-semibold text-gray-700 text-sm md:text-base">SELECT FREIGHT</p>
                            </div>
                            {/* Step 2 */}
                            <div className="flex flex-col items-center animate-on-scroll  translate-y-10">
                                <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center border-2 border-[#004D7B] rounded-full bg-white shadow-md transition transform group-hover:scale-110">
                                    <i className="fa-solid fa-file-invoice-dollar text-3xl md:text-4xl text-gray-500" />
                                    <span className="absolute -left-3 -top-3 bg-yellow-500 text-gray-600 text-xs md:text-sm w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold">2</span>
                                </div>
                                <p className="mt-4 font-semibold text-gray-700 text-sm md:text-base">CREATE INVOICE</p>
                            </div>
                            {/* Step 3 */}
                            <div className="flex flex-col items-center animate-on-scroll  translate-y-10">
                                <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center border-2 border-[#004D7B] rounded-full bg-white shadow-md transition transform group-hover:scale-110">
                                    <i className="fa-solid fa-building-lock text-3xl md:text-4xl text-gray-500" />
                                    <span className="absolute -left-3 -top-3 bg-yellow-500 text-gray-600 text-xs md:text-sm w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold">3</span>
                                </div>
                                <p className="mt-4 font-semibold text-gray-700 text-sm md:text-base">SECURE PAYMENT</p>
                            </div>
                            {/* Step 4 */}
                            <div className="flex flex-col items-center animate-on-scroll  translate-y-10">
                                <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center border-2 border-[#004D7B] rounded-full bg-white shadow-md transition transform group-hover:scale-110">
                                    <i className="fa-solid fa-truck-ramp-box text-3xl md:text-4xl text-gray-500" />
                                    <span className="absolute -left-3 -top-3 bg-yellow-500 text-gray-600 text-xs md:text-sm w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold">4</span>
                                </div>
                                <p className="mt-4 font-semibold text-gray-700 text-sm md:text-base">FAST DELIVERY</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section
                className="relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${pic9})` }}
            >
                {/* Blue Overlay (only left half) */}
                <div className="absolute top-0 left-0 h-full w-1/2 bg-[#2081b8]/30" />

                <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
                    {/* Form */}
                    <div className="bg-transparent text-white">
                        <h2 className="text-3xl font-bold mb-2">GET A FREE QUOTE</h2>
                        <p className="mb-6 tracking-widest text-sm font-bold">
                            WE ALWAYS USE BEST &amp; FASTEST FLEETS
                        </p>
                        <form className="space-y-4">
                            {/* Full Name */}
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-cyan-500 outline-none transition"
                            />
                            {/* Email + Mobile */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="px-4 py-3 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-[#B88E2F] outline-none transition"
                                />
                                <input
                                    type="text"
                                    placeholder="Mobile"
                                    className="px-4 py-3 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-[#B88E2F] outline-none transition"
                                />
                            </div>
                            {/* Destination From + To */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Destination From"
                                    className="px-4 py-3 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-[#B88E2F] outline-none transition"
                                />
                                <input
                                    type="text"
                                    placeholder="Destination To"
                                    className="px-4 py-3 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-[#B88E2F] outline-none transition"
                                />
                            </div>
                            {/* Shipping Type + Date */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Shipping Type"
                                    className="px-4 py-3 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-[#B88E2F] outline-none transition"
                                />
                                <input
                                    type="date"
                                    className="px-4 py-3 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-[#B88E2F] outline-none transition"
                                />
                            </div>
                            {/* Message */}
                            <textarea
                                rows={4}
                                placeholder="Message"
                                className="w-full px-4 py-3 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-[#B88E2F] outline-none transition"
                            />
                            {/* Button */}
                            <button
                                type="submit"
                                className="bg-[#c29b40] hover:bg-[#B88E2F] transition transform hover:scale-105 px-6 py-3 rounded-md font-semibold text-gray-200 shadow-md"
                            >
                                SEND US QUOTE
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Index;
