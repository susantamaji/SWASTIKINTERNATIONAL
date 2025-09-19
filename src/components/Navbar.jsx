import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // 🔹 Reusable classes for NavLinks
    const navLinkClasses = ({ isActive }) =>
        `relative transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full ${isActive ? "text-[#084e77] after:w-full font-bold" : "text-gray-800"
        }`;
    return (
        <div className="bg-[#fcfcfc] text-cyan-300 h-20 shadow fixed top-0 left-0 w-full z-50">
            {/* <div className="flex sticky top-0 justify-between items-center bg-white"> */}
            {/* Top Bar */}
            {/* <div className=" items-center text-[#B88E2F] font-bold text-sm flex justify-between z-50 px-4 py-2">
                    <div>📧 prakash@swastikintl.com | 📞 +91 9831161331</div>
                </div> */}

            {/* Google Translate */}
            {/* <div className="h-10 ">
                </div> */}
            {/* </div> */}

            {/* Navbar */}
            <header className="bg-[#f9f9f9] text-gray-800 h-20 shadow sticky top-0 z-40">


                <div className="flex items-center  pt-5 justify-between px-6 py-2">
                    <div className="text-2xl font-bold text-[#B88E2F] flex gap-4">
                        <span className="text font-bahnschrift">SWASTIK INTERNATIONAL</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 font-medium text-2xl items-center">
                        <li>
                            <NavLink to="/" className={navLinkClasses}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={navLinkClasses}>
                                About
                            </NavLink>
                        </li>

                        {/* Dropdown */}
                        <li className="relative group text-[#B88E2F]">
                            <NavLink to="/products" className={navLinkClasses}>
                                <span className="flex items-center">
                                    Products
                                    {/* <svg
                                        className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg> */}
                                </span>
                            </NavLink>

                            {/* Dropdown Menu */}
                            {/* <ul className="absolute left-0 w-56 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 hover:bg-[#2081b8] hover:text-white"
                                    >
                                        Vascular Access
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="block px-4 py-2 hover:bg-[#2081b8] hover:text-white"
                                    >
                                        Stoppers &amp; Stop Cocks
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="block px-4 py-2 hover:bg-[#2081b8] hover:text-white"
                                    >
                                        Infusion Range
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="block px-4 py-2 hover:bg-[#2081b8] hover:text-white"
                                    >
                                        Hemodialysis Range
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="block px-4 py-2 hover:bg-[#2081b8] hover:text-white"
                                    >
                                        Respiratory Range
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="block px-4 py-2 hover:bg-[#2081b8] hover:text-white"
                                    >
                                        Speciality Products
                                    </a>
                                </li>
                            </ul> */}
                        </li>


                        <li>
                            <NavLink to="/services" className={navLinkClasses}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" className={navLinkClasses}>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={navLinkClasses}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            {/* <div id="google_translate_element"></div> */}
                        </li>
                    </ul>

                    {/* Hamburger */}
                    <div
                        className="md:hidden cursor-pointer space-y-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div
                            className={`w-6 h-0.5 bg-black transition ${isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <div
                            className={`w-6 h-0.5 bg-black transition ${isOpen ? "opacity-0" : ""
                                }`}
                        />
                        <div
                            className={`w-6 h-0.5 bg-black transition ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </div>
                </div>

                {/* Mobile Menu with Animation */}
                <ul
                    className={`flex flex-col space-y-4 px-6 md:hidden bg-[#9ab7bb] text-black text-[20px] transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[500px]" : "max-h-0"
                        }`}
                >
                    <li>
                        <NavLink to="/" className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>

            </header>
        </div>
    );
}

export default Navbar;
