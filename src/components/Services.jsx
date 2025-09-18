import React from 'react'
import Footer from './Footer'
import pic from "./Pages/Images/Services-Photos/shipe.jpg"

import pic1 from "./Pages/Images/Blog-images/doc.jpeg"
import pic2 from "./Pages/Images/Services-Photos/it.jpeg"
import pic3 from "./Pages/Images/Services-Photos/tea.jpeg"
import pic4 from "./Pages/Images/Services-Photos/bamboo.jpg"
import pic5 from "./Pages/Images/Services-Photos/gur2.jpeg"
import pic6 from "./Pages/Images/Services-Photos/Copper.jpg"

import pic7 from "./Pages/Images/Services-Photos/cow-dung.webp"
import pic8 from "./Pages/Images/Services-Photos/dunk.jpg"
import pic9 from "./Pages/Images/Services-Photos/greenTea.jpg"
import pic10 from "./Pages/Images/Services-Photos/bambooTea2.jpg"



function Services() {
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
                    {/* Cards Grid */}
                    <div className="container mx-auto px-20 grid gap-8 md:grid-cols-3 p-4">
                        {/* Card 1 */}
                        <div className="bg-transparent shadow-md rounded-md overflow-hidden relative">
                            <img src={pic1} alt="Medical Devices" className="w-full h-56 bg-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[#b37f08]">Medical Devices Export</h3>
                                <p className="text-gray-600 mt-2">
                                    Supplying high-quality and certified medical equipment, instruments, and healthcare solutions
                                    to global markets with trust and reliability.
                                </p>
                                <a href="#" className="mt-4 inline-block text-cyan-400 font-semibold">READ MORE →</a>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-600 rounded-tl-full clip-triangle">
                                <span className="absolute text-white text-2xl font-bold" style={{ top: '70%', left: '70%', transform: 'translate(-50%, -50%)' }}>+</span>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-transparent shadow-md rounded-md overflow-hidden relative">
                            <img src={pic2} alt="IT Consulting" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[#b37f08]">IT Consulting &amp; Software</h3>
                                <p className="text-gray-600 mt-2">
                                    Providing professional IT consulting, software development, and digital solutions
                                    to enhance global business operations.
                                </p>
                                <a href="#" className="mt-4 inline-block text-cyan-400 font-semibold">READ MORE →</a>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-600 rounded-tl-full clip-triangle">
                                <span className="absolute text-white text-2xl font-bold" style={{ top: '70%', left: '70%', transform: 'translate(-50%, -50%)' }}>+</span>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white shadow-md rounded-md overflow-hidden relative">
                            <img src={pic3} alt="Green Tea Export" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[#b37f08]">Arunachal Green Tea</h3>
                                <p className="text-gray-600 mt-2">
                                    Exporting the finest organic green tea from the hills of Arunachal Pradesh,
                                    known for its purity, aroma, and health benefits.
                                </p>
                                <a href="#" className="mt-4 inline-block text-cyan-600 font-semibold">READ MORE →</a>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-600 rounded-tl-full clip-triangle">
                                <span className="absolute text-white text-2xl font-bold" style={{ top: '70%', left: '70%', transform: 'translate(-50%, -50%)' }}>+</span>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white shadow-md rounded-md overflow-hidden relative">
                            <img src={pic4} alt="Bamboo Products" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[#b37f08]">Bamboo Products</h3>
                                <p className="text-gray-600 mt-2">
                                    Supplying eco-friendly bamboo-based products including smoking jaguar and handicrafts,
                                    supporting sustainable lifestyles.
                                </p>
                                <a href="#" className="mt-4 inline-block text-cyan-600 font-semibold">READ MORE →</a>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-600 rounded-tl-full clip-triangle">
                                <span className="absolute text-white text-2xl font-bold" style={{ top: '70%', left: '70%', transform: 'translate(-50%, -50%)' }}>+</span>
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-white shadow-md rounded-md overflow-hidden relative">
                            <img src={pic5} alt="Organic Jaggery" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[#b37f08]">Organic Jaggery (Gur)</h3>
                                <p className="text-gray-600 mt-2">
                                    Delivering natural, chemical-free jaggery products that preserve
                                    traditional Indian taste and health values.
                                </p>
                                <a href="#" className="mt-4 inline-block text-cyan-600 font-semibold">READ MORE →</a>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-600 rounded-tl-full clip-triangle">
                                <span className="absolute text-white text-2xl font-bold" style={{ top: '70%', left: '70%', transform: 'translate(-50%, -50%)' }}>+</span>
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="bg-white shadow-md rounded-md overflow-hidden relative">
                            <img src={pic6} alt="Metal Scrap Export" className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[#b37f08]">Copper &amp; Aluminium Scrap</h3>
                                <p className="text-gray-600 mt-2">
                                    Exporting high-grade copper and aluminium scrap materials
                                    for industrial use across international markets.
                                </p>
                                <a href="#" className="mt-4 inline-block text-cyan-600 font-semibold">READ MORE →</a>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-600 rounded-tl-full clip-triangle">
                                <span className="absolute text-white text-2xl font-bold" style={{ top: '70%', left: '70%', transform: 'translate(-50%, -50%)' }}>+</span>
                            </div>
                        </div>
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
                            <h2 className="text-2xl font-bold">Shuddh Go-Khad</h2>
                            <p className="text-sm">100% Natural Cow Dung Products from India</p>
                        </div>
                        <div className="flex justify-around mt-6">
                            <div>
                                <img className="h-50" src={pic7} alt />
                            </div>
                            <div>
                                <img className="h-50" src={pic8} alt />
                            </div>
                        </div>
                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Exporter of */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Exporter of:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-600" /> Dry Cow Dung (25kg
                                        / 50kg bags)</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-600" /> Cow Dung Cakes (10
                                        pc, 20 pc packs)</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-600" /> Cow Dung Compost –
                                        Organic Fertilizer</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-check-circle text-green-600" /> Cow Dung Powder –
                                        Fertilizer/Incense</li>
                                </ul>
                            </div>
                            {/* Applications */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Applications:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2"><i className="fas fa-leaf text-green-600" /> Organic farming</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-fire text-red-500" /> Traditional fuel</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-praying-hands text-yellow-500" /> Religious use
                                    </li>
                                    <li className="flex items-center gap-2"><i className="fas fa-box text-blue-600" /> Export-ready | Small &amp; bulk
                                        orders</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-cyan-600" /> Based in India</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-globe text-indigo-600" /> Shipping globally</li>
                                </ul>
                            </div>
                            {/* Why Choose Us */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Choose Us?</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-center gap-2"><i className="fas fa-tractor text-green-600" /> Direct sourcing from
                                        Indian villages</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-box-open text-blue-600" /> Clean &amp; well-packed
                                        material</li>
                                    <li className="flex items-center gap-2"><i className="fas fa-tags text-red-500" /> Competitive pricing &amp; global
                                        shipping</li>
                                </ul>
                            </div>
                            {/* Contact */}
                            <div className="pt-4 border-t">
                                <h4 className="font-semibold text-gray-800 mb-2">📞 Contact Us:</h4>
                                <p className="flex items-center gap-2"><i className="fas fa-phone-alt text-green-600" /> +91 8240690052</p>
                                <p className="flex items-center gap-2"><i className="fas fa-envelope text-cyan-600" /> <a href="mailto:swastikintl17@gmail.com" className="hover:underline">swastikintl17@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    {/* Arunachal Tea Treasures Card */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="bg-cyan-700 text-white text-center py-4">
                            <h2 className="text-2xl font-bold">Arunachal Tea Treasures</h2>
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
                                    <h3 className="text-lg font-semibold text-green-700 mb-2">Bamboo Smoke Tea <span className="text-sm text-gray-500">(Exclusive)</span></h3>
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
                                        +91 8240690052</p>
                                    <p className="flex items-center justify-center gap-2"><i className="fas fa-envelope text-cyan-600" /> <a href="mailto:swastikintl17@gmail.com" className="hover:underline">swastikintl17@gmail.com</a></p>
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