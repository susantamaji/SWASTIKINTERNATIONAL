import React from 'react'
import pic from "./Images/newlogo.png"


function Footer() {
    return (
        <div>
            {/* footer--------- */}
            <footer className="bg-[#FFF3E3] text-black py-12  translate-y-10 transition-all duration-700 will-change-transform animate-on-scroll">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo + Info */}
                    <div>
                        <h2 className="flex items-center text-[18px] font-bold text-[#B88E2F]" >
                            <span className="px-2 py-1 mr-2" style={{ fontFamily: '"Bahnschrift SemiBold SemiConden", sans-serif' }}><img className="h-10 w-10 rounded-full object-cover" src={pic} alt />
                            </span> SWASTIK INTERNATIONAL
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed">
                            A trusted global partner in <span className="hover:text-yellow-500">export–import</span>, delivering
                            high-quality medical devices, IT solutions, organic green tea, bamboo crafts, jaggery,
                            and industrial raw materials like copper &amp; aluminium scrap.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex items-center gap-2 hover:text-yellow-500 transition">
                                <i className="fas fa-phone-alt" /> +91 9831161331
                            </li>
                            <li className="flex items-center gap-2 hover:text-yellow-500 transition">
                                <i className="fas fa-envelope" /> info@swastikintl.com
                            </li>
                            <li className="flex items-center gap-2 hover:text-yellow-500 transition">
                                <i className="fas fa-map-marker-alt" /> 184, Mahesh Colony, Serampore, Hooghly, Pin - 712 202,
                                W.B. India
                            </li>
                        </ul>
                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                            <a href="#" className="bg-yellow-[#B88E2F] p-2 rounded-full hover:text-yellow-500 transition">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className="bg-yellow-[#B88E2F] p-2 rounded-full hover:text-yellow-500 transition">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a href="#" className="bg-yellow-[#B88E2F] p-2 rounded-full hover:text-yellow-500 transition">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#" className="bg-yellow-[#B88E2F] p-2 rounded-full hover:text-yellow-500 transition">
                                <i className="fab fa-twitter" />
                            </a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-yellow-[#B88E2F] font-semibold mb-4 border-b-2 border-yellow-600 inline-block">QUICK LINKS</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-yellow-500 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Our Products</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Medical Devices</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Agro Products</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Industrial Supplies</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">IT Consulting</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Contact Us</a></li>
                        </ul>
                    </div>
                    {/* Useful Links */}
                    <div>
                        <h3 className="text-yellow-[#B88E2F] font-semibold mb-4 border-b-2 border-yellow-600 inline-block">USEFUL LINKS</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-yellow-500 transition">Export Solutions</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Import Services</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Quality Standards</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Certifications</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Client Testimonials</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Business Enquiry</a></li>
                        </ul>
                    </div>
                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-yellow-[#B88E2F] font-semibold mb-4 border-b-2 border-yellow-600 inline-block">BUSINESS HOURS
                        </h3>
                        <p className="text-sm">Mon to Sat: 09:30 AM - 06:30 PM</p>
                        <p className="text-sm">Sunday: Closed</p>
                        {/* Newsletter */}
                        <div className="mt-4 flex">
                            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded-l bg-yellow-[#B88E2F] text-gray-200 focus:outline-none" />
                            <button className="bg-cyan-600 px-4 rounded-r hover:bg-cyan-700 transition">
                                <i className="fas fa-paper-plane text-gray-700" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-200">
                    <p>COPYRIGHT © 2025 <span className="text-yellow-400 hover:text-yellow-500">SWASTIK INTERNATIONAL</span>. ALL
                        RIGHTS RESERVED</p>
                    <p>DESIGNED &amp; DEVELOPED BY: <span className="text-yellow-400 hover:text-yellow-500">LK TECHNOLOGY</span></p>
                </div>
            </footer>

        </div>
    )
}

export default Footer