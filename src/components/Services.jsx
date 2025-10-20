import React, { useState } from 'react'
import Footer from './Footer'
import pic from "./Pages/Images/indexPhoto/1st.jpg"

import pic1 from "./Pages/Images/Blog-images/medical-equipment-1000x1000.png"
import pic2 from "./Pages/Images/Services-Photos/it2.png"
import pic3 from "./Pages/Images/Services-Photos/tea2.webp"
import pic4 from "./Pages/Images/Services-Photos/bambooss.jpg"
import pic5 from "./Pages/Images/Services-Photos/gur3.jpg"
import pic6 from "./Pages/Images/Services-Photos/copperr.jpg"

import pic7 from "./Pages/Images/Services-Photos/gursm.jpg"
import pic8 from "./Pages/Images/Services-Photos/gurssm.jpg"
import pic9 from "./Pages/Images/Services-Photos/greenTea.jpg"
import pic10 from "./Pages/Images/Services-Photos/bambooTea2.jpg"



function Services() {

    // Track which card is open
    const [openCard, setOpenCard] = useState(null);

    // Data for cards
    const cards = [
        {
            id: 1,
            img: pic1,
            title: "Medical Devices Export",
            short: "Supplying high-quality and certified medical equipment, instruments, and healthcare solutions to global markets with trust and reliability.",
            more: "We ensure all devices comply with international safety standards. Our portfolio includes diagnostic tools, surgical instruments, and hospital supplies."
        },
        {
            id: 2,
            img: pic2,
            title: "IT Consulting & Software",
            short: "Providing professional IT consulting, software development, and digital solutions to enhance global business operations.",
            more: "Our team delivers tailored solutions in cloud computing, ERP systems, and cybersecurity. We empower companies to scale digitally."
        },
        {
            id: 3,
            img: pic3,
            title: "Arunachal Pradesh Green Tea",
            short: "Exporting the finest organic green tea from the hills of Arunachal Pradesh, known for its purity, aroma, and health benefits.",
            more: "Rich in antioxidants and cultivated in pristine environments, our tea is highly demanded by health-conscious consumers worldwide."
        },
        {
            id: 4,
            img: pic4,
            title: "Bamboo Smoke Tea",
            short: "Supplying eco-friendly bamboo-based products including smoking jaguar and handicrafts, supporting sustainable lifestyles.",
            more: "Our bamboo products are sourced responsibly and crafted to preserve tradition while promoting green living."
        },
        {
            id: 5,
            img: pic5,
            title: "Organic Jaggery (Gur)",
            short: "Delivering natural, chemical-free jaggery products that preserve traditional Indian taste and health values.",
            more: "We offer jaggery blocks, powder, and liquid jaggery—perfect for sweetening without refined sugar, rich in minerals and iron."
        },
        // {
        //     id: 6,
        //     img: pic6,
        //     title: "Copper & Aluminium Scrap",
        //     short: "Exporting high-grade copper and aluminium scrap materials for industrial use across international markets.",
        //     more: "Our scrap is carefully sorted and processed to meet export quality standards, ensuring reliable supply for industries."
        // }
    ];
    return (
        <div className='pt-20'>

            <div>
                <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center" style={{ backgroundImage: `url(${pic})` }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/70 " />
                    {/* Content */}
                    <div className="relative container mx-auto px-20 flex flex-col md:flex-row justify-between items-center text-white">
                        {/* Left Text */}
                        <div>
                            <h2 className="text-3xl font-bold">OUR SERVICES</h2>
                            <p className="mt-2">
                                <a href="./index.html"><span className="text-cyan-500 font-semibold cursor-pointer">Home</span></a>
                                <a href="./service.html"><span className="text-gray-300 cursor-pointer"> / Our Services</span></a>
                            </p>
                        </div>
                        {/* Right Text */}
                        <div className="mt-4 md:mt-0 text-center md:text-right max-w-lg">
                            <p className="text-lg font-medium">
                                We freight to all over the world The best logistic <br />company,
                                <span className="text-cyan-500 font-bold">FAST</span>
                                and <span className="text-cyan-500 font-bold">SAFELY!</span>
                            </p>
                        </div>
                    </div>
                </section>
                {/* our Services */}
                <section className="py-12 bg-white">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">OUR SERVICES</h2>
                        <p className="text-gray-500 mt-2 px-20">
                            Swastik International is a renowned export firm for Medical Devices, Laboratory Chemical,
                            Laboratory Equipment, Generic Medicine and Disposable Items committed to facilitating
                            global trade by delivering top-quality products and services to international markets. With a
                            strong focus on customer satisfaction and adherence to international standards, we have
                            consistently been a preferred partner for businesses seeking to expand their global reach.
                        </p>
                    </div>
                    <div className="container mx-auto px-20 grid gap-8 md:grid-cols-3 p-4">
                        {cards.map((card) => (
                            <div key={card.id} className="bg-white shadow-md rounded-md overflow-hidden relative">
                                <img src={card.img} alt={card.title} className="w-full h-68 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-[#b37f08]">{card.title}</h3>
                                    <p className="text-gray-600 mt-2">
                                        {card.short}
                                    </p>

                                    {/* Toggle More Text */}
                                    {openCard === card.id && (
                                        <p className="text-gray-700 mt-2">{card.more}</p>
                                    )}

                                    <button 
                                        onClick={() => setOpenCard(openCard === card.id ? null : card.id)}
                                        className="mt-4 inline-block text-cyan-600 font-semibold cursor-pointer"
                                    >
                                        {openCard === card.id ? "SHOW LESS ←" : "READ MORE →"}
                                    </button>
                                </div>

                                {/* Triangle icon */}
                                <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-600 rounded-tl-full clip-triangle">
                                    <span
                                        className="absolute text-white text-2xl font-bold"
                                        style={{ top: "70%", left: "70%", transform: "translate(-50%, -50%)" }}
                                    >
                                        +
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* our list section ----------------- */}
            <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24">
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Shuddh Go-Khad Card */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="bg-cyan-700 text-white text-center py-4">
                            <h2 className="text-2xl font-bold">Shuddh Gur</h2>
                            <p className="text-sm">100% Natural & Organic Jaggery from India</p>
                        </div>

                        <div className="flex justify-around mt-6">
                            <div>
                                <img className="h-50" src={pic7} alt="Jaggery Blocks" />
                            </div>
                            <div>
                                <img className="h-50" src={pic8} alt="Jaggery Powder" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Exporter of */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Exporter of:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-check-circle text-green-600" /> Jaggery Blocks (1kg, 5kg, 10kg packs)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-check-circle text-green-600" /> Jaggery Powder (500g, 1kg packs)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-check-circle text-green-600" /> Liquid Jaggery (traditional recipe)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-check-circle text-green-600" /> Flavored Jaggery (ginger, sesame, turmeric blends)
                                    </li>
                                </ul>
                            </div>

                            {/* Applications */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Applications:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-utensils text-amber-600" /> Natural sweetener in food & beverages
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-leaf text-green-600" /> Health & Ayurveda remedies
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-candy-cane text-pink-500" /> Confectionery & traditional sweets
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-box text-blue-600" /> Export-ready | Small & bulk orders
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-map-marker-alt text-cyan-600" /> Based in India
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-globe text-indigo-600" /> Shipping globally
                                    </li>
                                </ul>
                            </div>

                            {/* Why Choose Us */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Choose Us?</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-tractor text-green-600" /> Direct sourcing from Indian farmers
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-box-open text-blue-600" /> Hygienically processed & well-packed
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-heart text-red-500" /> 100% natural, no chemicals or additives
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <i className="fas fa-tags text-amber-600" /> Competitive pricing & global shipping
                                    </li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="pt-4 border-t">
                                <h4 className="font-semibold text-gray-800 mb-2">📞 Contact Us:</h4>
                                <p className="flex items-center gap-2">
                                    <i className="fas fa-phone-alt text-green-600" /> +91 9831161331
                                </p>
                                <p className="flex items-center gap-2">
                                    <i className="fas fa-envelope text-cyan-600" />
                                    <a href="mailto:info@swastikintl.com" className="hover:underline">
                                        info@swastikintl.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Arunachal Tea Treasures Card */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="bg-cyan-700 text-white text-center py-4">
                            <h2 className="text-2xl font-bold">Arunachal Pradesh Tea Treasures</h2>
                            <p className="text-sm">Premium Green Tea &amp; Bamboo Smoke Tea</p>
                        </div>
                        {/* Content */}
                        <div className="p-6 space-y-6">
                            <div className="flex justify-around">
                                <div>
                                    <img className="h-50" src={pic9} alt />
                                </div>
                                <div>
                                    <img className="h-50" src={pic10} alt />
                                </div>
                            </div>
                            {/* Products */}
                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Green Tea */}
                                <div>
                                    <h3 className="text-lg font-semibold text-green-700 mb-2">Green Tea</h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center gap-2"><i className="fas fa-leaf text-green-600" /> Grown in the misty
                                            highlands</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-hand-holding-heart text-red-500" /> Hand-plucked
                                            for freshness</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-heartbeat text-yellow-500" /> Rich in
                                            antioxidants &amp; boosts metabolism</li>
                                    </ul>
                                </div>
                                {/* Bamboo Smoke Tea */}
                                <div>
                                    <h3 className="text-lg font-semibold text-green-700 mb-2">Bamboo  Smoke Tea <span className="text-sm text-gray-500">(Exclusive)</span></h3>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-center gap-2"><i className="fas fa-fire text-cyan-600" /> Smoked inside bamboo over
                                            wood fire</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-coffee text-brown-600" /> Unique earthy aroma
                                        </li>
                                        <li className="flex items-center gap-2"><i className="fas fa-spa text-green-500" /> Age-old traditional
                                            methods</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Benefits */}
                            <div className="bg-green-100 p-4 rounded-md">
                                <h3 className="text-lg font-semibold text-green-800 mb-3">Benefits of Bamboo Smoke Tea</h3>
                                <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2"><i className="fas fa-shield-virus text-green-600" /> Boosts Immunity
                                        </li>
                                        <li className="flex items-center gap-2"><i className="fas fa-bacteria text-yellow-500" /> Improves Digestion
                                        </li>
                                        <li className="flex items-center gap-2"><i className="fas fa-smile-beam text-blue-500" /> Relieves Stress</li>
                                    </ul>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2"><i className="fas fa-sync-alt text-green-600" /> Natural Detox</li>
                                        <li className="flex items-center gap-2"><i className="fas fa-weight text-red-500" /> Supports Weight
                                            Management</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Contact */}
                            <div className="pt-4 border-t text-center">
                                <p className="text-gray-700 mb-2"><strong>Packaging:</strong> 50g | 100g | 250g | Bulk orders</p>
                                <p className="text-green-700 font-semibold">Export Ready – Supplying globally with certifications</p>
                                <div className="mt-4 space-y-2">
                                    <p className="flex items-center justify-center gap-2"><i className="fab fa-whatsapp text-green-600" /> WhatsApp:
                                        +91 9831161331</p>
                                    <p className="flex items-center justify-center gap-2"><i className="fas fa-envelope text-cyan-600" /> <a href="mailto:info@swastikintl.com" className="hover:underline">info@swastikintl.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}

export default Services