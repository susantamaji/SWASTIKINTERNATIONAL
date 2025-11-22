import React from 'react'
import pic from "./Images/newlogo.png"
import { NavLink } from 'react-router-dom'


function Footer() {
    return (
        <div>
            {/* footer--------- */}
            <footer className="bg-[#e5e8f5] text-black py-12 font-extralight translate-y-10 transition-all duration-700 will-change-transform animate-on-scroll">
                <div className="container font-semibold mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo + Info */}
                    <div>
                        <h2 className="flex items-center text-[18px] font-bold text-[#B88E2F]" >
                            <span className="px-2 py-1 mr-2" style={{ fontFamily: '"Bahnschrift SemiBold SemiConden", sans-serif' }}><img className="h-10 w-10 rounded-full object-cover" src={pic} alt />
                            </span> SWASTIK INTERNATIONAL
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed">
                            A trusted global partner in <span className="hover:text-yellow-500">export–import</span>, delivering
                            high-quality medical devices,IT solutions, Arunachal Pradesh Green Tea , Bamboo Smoked Tea , Organic & Natural Products,
                            {/* and industrial raw materials like copper &amp; aluminium scrap. */}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex items-center gap-2 hover:text-yellow-500 transition">
                                <i className="fas fa-phone-alt" /> +91 9831161331
                            </li>
                            <li className="flex items-center gap-2 hover:text-yellow-500 transition">
                                <i className="fas fa-envelope" /> info@swastikintl.com
                            </li>
                            <li className="flex items-center gap-2 hover:text-yellow-500 transition">
                                <i className="fas fa-map-marker-alt" /> 3/3, AGRASAIN STREET,LILUAH ,HOWRAH - 711204
,
                                W.B. India
                            </li>
                        </ul>
                        {/* Social Icons */}

                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-yellow-[#B88E2F] font-semibold mb-4 border-b-2 border-yellow-600 inline-block">QUICK LINKS</h3>
                        <ul className="space-y-2 flex flex-col text-sm">
                            <NavLink to={"/about"}><a href="#" className="hover:text-yellow-500 transition">About Us</a></NavLink>
                            <NavLink to={"/products"}><a href="#" className="hover:text-yellow-500 transition">Our Products</a></NavLink>
                            <NavLink to={"/services"}><a href="#" className="hover:text-yellow-500 transition">Medical Devices</a></NavLink>
                            {/* <NavLink to={"/products"}><a href="#" className="hover:text-yellow-500 transition">Agro Products</a></NavLink>
                            <NavLink to={"/products"}><a href="#" className="hover:text-yellow-500 transition">Industrial Supplies</a></NavLink>
                            <NavLink to={"/products"}><a href="#" className="hover:text-yellow-500 transition">IT Consulting</a></NavLink> */}
                           <NavLink to={"/contact"}><a href="#" className="hover:text-yellow-500 transition">Contact Us</a></NavLink>
                        </ul>
                    </div>
                    {/* Useful Links */}
                    {/* <div>
                        <h3 className="text-yellow-[#B88E2F] font-semibold mb-4 border-b-2 border-yellow-600 inline-block">USEFUL LINKS</h3>
                        <ul className="space-y-2 text-sm"> */}
                            {/* <li><a href="#" className="hover:text-yellow-500 transition">Export Solutions</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Import Services</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Quality Standards</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Certifications</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Client Testimonials</a></li>
                            <li><a href="#" className="hover:text-yellow-500 transition">Business Enquiry</a></li> */}
                        {/* </ul>
                    </div> */}
                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-yellow-[#B88E2F] font-semibold mb-4 border-b-2 border-yellow-600 inline-block">BUSINESS HOURS
                        </h3>
                        <p className="text-sm">Mon to Sat: 09:30 AM - 06:30 PM</p>
                        <p className="text-sm">Sunday: Closed</p>
                        {/* Newsletter */}
                        {/* <div className="mt-4 flex">
                            <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 rounded-l bg-yellow-[#329cbf] text-gray-900 focus:outline-none" />
                            <button className="bg-yellow-600 px-4 rounded-r hover:bg-yellow-700 transition">
                                <i className="fas fa-paper-plane text-cyan-900" />
                            </button>
                        </div> */}

                        <div className="flex gap-3 mt-4">
                            <a href="https://www.facebook.com/profile.php?id=100064560615109&mibextid=ZbWKwL" className="bg-yellow-[#B88E2F] p-2 rounded-full hover:text-yellow-500 transition">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="https://www.linkedin.com/in/swastik-international-17610338b/" className="bg-yellow-[#B88E2F] p-2 rounded-full hover:text-yellow-500 transition">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a href="https://www.instagram.com/swastik_intl17/" className="bg-yellow-[#B88E2F] p-2 rounded-full hover:text-yellow-500 transition">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="https://x.com/swastikintl17" className="bg-yellow-[#B88E2F] p-2 rounded-full hover:text-yellow-500 transition">
                                <i className="fab fa-twitter" />
                            </a>
                        </div>

                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-800">
                    <p>COPYRIGHT © 2025 <span className="text-yellow-800 hover:text-yellow-500">SWASTIK INTERNATIONAL</span>. ALL
                        RIGHTS RESERVED</p>
                    <p>DESIGNED &amp; DEVELOPED BY: <span className="text-yellow-800 hover:text-yellow-500">LK TECHNOLOGY</span></p>
                </div>
            </footer>

        </div>
    )
}

export default Footer