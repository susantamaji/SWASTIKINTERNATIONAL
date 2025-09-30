import React from 'react'
import Footer from './Footer'
import pic from "./Pages/Images/indexPhoto/2nd.jpg"
import pic1 from "./Pages/Images/Blog-images/flight.jpg"

import pic3 from "./Pages/Images/indexPhoto/tea.jpg"
import pic4 from "./Pages/Images/Blog-images/coperr.jpg"

import pic5 from "./Pages/Images/indexPhoto/gg.jpg"
import pic6 from "./Pages/Images/Blog-images/OrganicJaggery.jpg"
import pic7 from "./Pages/Images/indexPhoto/tea.jpg"

import pic8 from "./Pages/Images/Blog-images/medical.jpg"
import pic9 from "./Pages/Images/Blog-images/laptop.jpg"
import pic10 from "./Pages/Images/Blog-images/OrganicJaggery.jpg"
import pic11 from "./Pages/Images/Blog-images/Sustainability.jpg"

import myproducts from "./Pages/Images/indexPhoto/1st.jpg"

function Blog() {
  return (
    <div className='pt-20'>

      <section className="relative bg-cover bg-center h-[400px] flex items-center justify-center" style={{ backgroundImage: `url(${pic})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Content */}
        <div className="relative container mx-auto px-20 flex flex-col md:flex-row justify-between items-center text-white">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-bold">OUR BLOG</h2>
            <p className="mt-2">
              <a href="./index.html"><span className="text-cyan-500 font-semibold cursor-pointer">Home</span></a>
              <a href="./singal_blog.html"><span className="text-gray-300 cursor-pointer"> / Blog</span></a>
            </p>
          </div>
          {/* Right Text */}
          <div className="mt-4 md:mt-0 text-center md:text-right max-w-lg">
            <p className="text-lg font-medium">
              Insights on <span className="text-cyan-500 font-bold">Global Trade</span> – from
              <br /> medical devices &amp; IT consulting to
              <span className="text-cyan-500 font-bold">organic green tea</span>, bamboo,
              jaggery, and industrial metals.
            </p>
          </div>
        </div>
      </section>


      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-10">
          {/* BLOG CONTENT */}
          <div className="bg-white shadow-md rounded-md overflow-hidden p-6">
            <img src={myproducts} alt="Blog Post" className="w-full h-64 object-cover mb-6" />
            <h1 className="text-2xl font-bold mb-2">Global Demand for Organic Indian Products</h1>
            <p className="text-sm text-gray-500 mb-4">
              Posted on 8 March 2025 by <span className="font-medium">Swastik Team</span>
            </p>
            {/* Meta Info */}
            <div className="flex items-center flex-wrap gap-4 text-gray-500 text-sm mb-4">
              <span><i className="fa fa-eye" /> 150 Views</span>
              <span><i className="fa fa-comments" /> 18 Comments</span>
              <span><i className="fa fa-share-alt" /> 42 Shares</span>
              <span><i className="fa fa-tags" /> Medical Devices, Agro, Metals</span>
            </div>
            {/* Blog Paragraphs */}
            <p className="text-gray-700 mb-4">
              India’s export industry is rapidly expanding, with products like medical devices, organic food items, and IT
              services gaining global recognition. Swastik International is proud to be part of this journey, connecting
              Indian innovation and agriculture with the world.
            </p>
            <p className="text-gray-700 mb-4">
              From cutting-edge <strong>IT consulting</strong> to traditional <strong>Arunachal green tea</strong> and
              <strong>organic jaggery</strong>, we provide quality products that meet international standards and customer
              satisfaction.
            </p>
            <p className="text-gray-700 mb-4">
              Our focus on sustainability, ethical sourcing, and reliable partnerships ensures long-term growth for both our
              clients and producers.
            </p>
            {/* Bullet List */}
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Trusted sourcing of <strong>Medical Devices</strong></li>
              <li>Global exports of <strong>Organic Agro Products</strong></li>
              <li>Supplying <strong>Copper &amp; Aluminium Scrap</strong></li>
              <li>Reliable <strong>IT Consulting Services</strong></li>
            </ul>
            <p className="text-gray-700">
              With Swastik International, businesses across the globe access authentic, high-quality Indian products with
              transparency and trust.
            </p>
          </div>
          {/* YOU MAY ALSO LIKE */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4 inline-block">YOU MAY ALSO LIKE</h2>
            <div className="flex items-center gap-2 mt-2 mb-8">
              <div className="w-6 h-[2px] bg-cyan-800" />
              <div className="w-20 h-[2px] bg-cyan-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white shadow rounded-md overflow-hidden">
                <img src={pic3} alt="Related Post" className="w-full h-62 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Why Arunachal Green Tea is Winning Global Markets</h3>
                  <p className="text-sm text-gray-500">Posted on 2 March 2025 by Swastik Team</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white shadow rounded-md overflow-hidden">
                <img src={pic4} alt="Related Post" className="w-full h-62 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">The Growing Demand for Copper &amp; Aluminium Scrap</h3>
                  <p className="text-sm text-gray-500">Posted on 20 February 2025 by Swastik Team</p>
                </div>
              </div>
            </div>
          </div>
          {/* COMMENTS SECTION */}
          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold mb-6 inline-block">
              3 THOUGHTS ON “GLOBAL DEMAND FOR ORGANIC PRODUCTS”
            </h2>
            <div className="flex items-center gap-2 mt-2 mb-8">
              <div className="w-6 h-[2px] bg-cyan-800" />
              <div className="w-20 h-[2px] bg-cyan-500" />
            </div>
            {/* Comment 1 */}
            <div className="flex items-start gap-4 mb-6">
              <img src={pic5} className="w-14 h-14 rounded-full" alt="User" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-cyan-600 font-semibold">Anita Sharma</h4>
                  <span className="text-sm text-gray-500">5th March 2025 at 10:00 am</span>
                </div>
                <p className="text-gray-700 mt-2">
                  Very insightful! I didn’t know bamboo products from India were gaining so much popularity worldwide.
                </p>
                <button className="text-cyan-600 text-sm mt-2">REPLY</button>
              </div>
            </div>
            {/* Comment 2 */}
            <div className="flex items-start gap-4 mb-6 border-t pt-6">
              <img src={pic6} className="w-14 h-14 rounded-full" alt="User" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-cyan-600 font-semibold">John Carter</h4>
                  <span className="text-sm text-gray-500">4th March 2025 at 3:00 pm</span>
                </div>
                <p className="text-gray-700 mt-2">
                  Great article! I’ve been sourcing organic jaggery from India, and it’s amazing to see the demand grow.
                </p>
                <button className="text-cyan-600 text-sm mt-2">REPLY</button>
              </div>
            </div>
            {/* Comment 3 */}
            <div className="flex items-start gap-4 mb-6 border-t pt-6">
              <img src={pic7} className="w-14 h-14 rounded-full" alt="User" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-cyan-600 font-semibold">Mei Wong</h4>
                  <span className="text-sm text-gray-500">3rd March 2025 at 11:00 am</span>
                </div>
                <p className="text-gray-700 mt-2">
                  Copper scrap exports from India are reliable and sustainable. Keep up the great work!
                </p>
                <button className="text-cyan-600 text-sm mt-2">REPLY</button>
              </div>
            </div>
          </div>
          {/* LEAVE A COMMENT FORM */}
          <div className="p-6 flex flex-col justify-center w-full">
            <h2 className="text-xl font-semibold mb-2">Leave a Comment</h2>
            <p className="text-sm text-gray-500 mb-4">
              Your email address will not be published. Required fields are marked
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="border border-gray-500 rounded-md p-3 w-full" />
                <input type="email" placeholder="Email" className="border border-gray-500 rounded-md p-3 w-full" />
              </div>
              <textarea placeholder="Message" rows={5} className="border border-gray-500 rounded-md p-3 w-full" defaultValue={""} />
              <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-700">Submit</button>
            </form>
          </div>
        </div>
        {/* Right Side: Sidebar */}
        <aside className="space-y-8">
          {/* Search */}
          <div className="bg-white shadow-md p-4">
            <div className="flex items-center border rounded">
              <input type="text" placeholder="Search products, markets, news..." className="w-full px-3 py-2 outline-none" />
              <button className="p-2 text-cyan-500"><i data-lucide="search" /></button>
            </div>
          </div>
          {/* Categories */}
          <div className="bg-white shadow-md">
            <h3 className="bg-cyan-600 text-white px-4 py-2 font-bold">CATEGORIES</h3>
            <ul className="divide-y">
              <li className="px-4 py-3 hover:bg-cyan-500 hover:text-white flex justify-between">Medical Devices <i data-lucide="chevron-right" /></li>
              <li className="px-4 py-3 hover:bg-cyan-500 hover:text-white flex justify-between">IT Consulting <i data-lucide="chevron-right" /></li>
              <li className="px-4 py-3 hover:bg-cyan-500 hover:text-white flex justify-between">Agro Products <i data-lucide="chevron-right" /></li>
              <li className="px-4 py-3 hover:bg-cyan-500 hover:text-white flex justify-between">Bamboo &amp; Organic Goods <i data-lucide="chevron-right" /></li>
              <li className="px-4 py-3 hover:bg-cyan-500 hover:text-white flex justify-between">Metal Scrap Exports <i data-lucide="chevron-right" /></li>
            </ul>
          </div>
          {/* Latest Posts */}
          <div className="bg-white shadow-md">
            <h3 className="bg-gray-700 text-white px-4 py-2 font-bold">LATEST POSTS</h3>
            <ul className="divide-y">
              <li className="flex items-center gap-3 p-3">
                <img src={pic8} className="w-20 h-14 object-cover" />
                <div>
                  <p className="text-sm text-gray-700">How Indian Medical Devices Are Gaining Trust Worldwide</p>
                  <span className="text-xs text-gray-500">5th March 2025</span>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3">
                <img src={pic9} className="w-20 h-14 object-cover" />
                <div>
                  <p className="text-sm text-gray-700">IT Consulting: India’s Emerging Global Export</p>
                  <span className="text-xs text-gray-500">28th February 2025</span>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3">
                <img src={pic10} className="w-20 h-14 object-cover" />
                <div>
                  <p className="text-sm text-gray-700">The World is Turning to Organic Jaggery</p>
                  <span className="text-xs text-gray-500">20th February 2025</span>
                </div>
              </li>
              <li className="flex items-center gap-3 p-3">
                <img src={pic11} className="w-20 h-14 object-cover" />
                <div>
                  <p className="text-sm text-gray-700">Copper Scrap: India’s Key to Global Sustainability</p>
                  <span className="text-xs text-gray-500">15th February 2025</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Tags */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">Tags</h3>
            <div className="flex items-center gap-2 mt-2 mb-8">
              <div className="w-6 h-[2px] bg-cyan-600" />
              <div className="w-20 h-[2px] bg-cyan-500" />
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 rounded hover:bg-cyan-500 hover:text-white">Medical
                Devices</span>
              <span className="bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 rounded hover:bg-cyan-500 hover:text-white">IT
                Consulting</span>
              <span className="bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 rounded hover:bg-cyan-500 hover:text-white">Agro
                Products</span>
              <span className="bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 rounded hover:bg-cyan-500 hover:text-white">Green
                Tea</span>
              <span className="bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 rounded hover:bg-cyan-500 hover:text-white">Bamboo
                Products</span>
              <span className="bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 rounded hover:bg-cyan-500 hover:text-white">Organic
                Gur</span>
              <span className="bg-gray-100 px-4 py-2 text-sm font-bold text-gray-800 rounded hover:bg-cyan-500 hover:text-white">Metal
                Scrap</span>
            </div>
          </div>
        </aside>
      </div>



      <Footer />
    </div>
  )
}

export default Blog