import React from 'react'
import Footer from './Footer'

import pic from "./Pages/Images/indexPhoto/3rd.jpg"
import pichand from "./Pages/Images/Contact-Photos/group.jpeg"
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <div className='pt-20'>

      <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center" style={{ backgroundImage: `url(${pic})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content */}
        <div className="relative container mx-auto px-20 flex flex-col md:flex-row justify-between items-center text-white">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold">CONTACT US</h2>
            <p className="mt-2">
              <NavLink to={"/"}><a href="./index.html"><span className="text-cyan-500 font-semibold cursor-pointer">Home</span></a></NavLink>
              <NavLink to={"/about"}><a href=""><span className="text-gray-300 cursor-pointer"> / About Us</span></a></NavLink>
            </p>
          </div>
          {/* Right Text */}
          <div className="mt-4 md:mt-0 text-center md:text-right max-w-lg">
            <p className="text-lg font-medium leading-relaxed">
              Swastik International Exports connects the world with<br />
              <span className="text-cyan-500 font-bold">Bamboo Smoke Tea</span>,
              <span className="text-cyan-500 font-bold">Medical Devices</span>,
              <span className="text-cyan-500 font-bold">IT Solutions</span>,<br />
              <span className="text-cyan-500 font-bold">Arunachal Green Tea</span>,
              <span className="text-cyan-500 font-bold">Organic Jaggery</span>, and
              {/* <span className="text-cyan-500 font-bold">Metal Scrap</span><br /> */}
              — delivered with <span className="text-cyan-500 font-bold">speed</span> and
              <span className="text-cyan-500 font-bold">trust</span>.
            </p>
          </div>
        </div>
      </section>

      {/* details------------------ */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <form action="#" method="POST" className="md:col-span-2 space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Full Name" className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500 outline-none" />
              <input type="text" placeholder="Company" className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500 outline-none" />
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="email" placeholder="Email" className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500 outline-none" />
              <input type="text" placeholder="Phone Number" className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500 outline-none" />
            </div>
            {/* Message */}
            <textarea rows={5} placeholder="Message" className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-500 outline-none" defaultValue={""} />
            {/* Submit */}
            <button type="submit" className="bg-cyan-600 text-white px-6 py-2 rounded-md shadow hover:bg-cyan-700 transition">
              Submit
            </button>
          </form>
          {/* Office Info Card */}
          <div className="bg-gray-100 rounded-lg shadow-md">
            <div className="bg-cyan-600 text-white text-lg font-semibold px-4 py-3 rounded-t-lg">
              CORPORATE OFFICE
            </div>
            <div className="p-6 space-y-5 text-gray-700">
              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="text-cyan-600 text-xl">📍</span>
                <p><strong>Address:</strong><br />
                  Swastik International Exports,<br />
                  184, Mahesh Colony, Serampore, <br /> Hooghly, Pin - 712 202, W.B. India
                </p>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-3">
                <span className="text-cyan-600 text-xl"><i className="fa-brands fa-whatsapp text-green-500" /></span>
                <p><strong>Whatsapp No:</strong><br />+91 8240690052</p>
              </div>
              {/* Fax */}
              <div className="flex items-center gap-3">
                <span className="text-cyan-600 text-xl">📞</span>
                <p><strong>Telephone No:</strong><br /> +91 8240690052</p>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="text-cyan-600 text-xl">✉️</span>
                <p><strong>Email:</strong><br />
                  <a href="mailto:swastikintl17@gmail.com" className="text-cyan-600 hover:underline">
                    info@swastikintl.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* map section------------- */}
<iframe className="w-full mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27161.729981662887!2d88.30754700249197!3d22.61847523534856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e01d381e59%3A0x50a001ffa49111f8!2sLiluah%2C%20Howrah%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1757453393599!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


      <Footer />
    </div>
  )
}

export default Contact