import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../components/Images/newlogo.png"
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // 🔹 Reusable classes for NavLinks
    const navLinkClasses = ({ isActive }) =>
        `relative transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full ${isActive ? "text-[#084e77] after:w-full font-bold" : "text-gray-800"
        }`;
    return (
        <div className="w-full fixed top-0 left-0 z-50 shadow bg-[#fcfcfc]">
            <header className="h-20 flex items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center gap-2 text-2xl font-bold text-[#B88E2F]">
                    <img src={logo} className="h-10" alt="Logo" />
                    <span className="font-bahnschrift">SWASTIK INTERNATIONAL</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium text-lg items-center">
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
                    <li>
                        <NavLink to="/products" className={navLinkClasses}>
                            Products
                        </NavLink>
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
                </ul>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`block w-6 h-0.5 bg-black transition ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-black transition ${isOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-black transition ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </header>

            {/* Mobile Menu with Smooth Animation */}
            <div
                className={`md:hidden bg-[#f1f5f9] text-gray-800 text-lg font-medium overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
                    }`}
            >
                <ul className="flex flex-col space-y-4 px-6">
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
            </div>
        </div>
    );
}

export default Navbar;
