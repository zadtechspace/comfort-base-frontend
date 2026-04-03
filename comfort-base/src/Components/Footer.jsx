import React from 'react'
import comfortbaselogo from "../assets/image/comfortbaselogo.jpg"

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
       
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">

              <div className="flex gap-3 items-center mb-4">
                <img src={comfortbaselogo} alt="Comfort Base Logo" className='w-6 h-6 rounded-full items-center' />
                <h3 className="text-2xl font-bold">Comfort Base</h3>
              </div>

              <p className="text-gray-300 mb-4 max-w-md">
                Your trusted source for premium quality foods, spices, and culinary delights.
                Experience exceptional taste and unbeatable value with every purchase.
              </p>


              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.609.034 6.298.077 4.986.12 4.041.255 3.251.477 2.46.699 1.731.998 1.082 1.647.433 2.296.134 3.025-.088 3.816-.31 4.606-.445 5.551-.488 6.863-.531 8.174-.565 8.961-.565 12.582c0 3.621.034 4.408.077 5.719.043 1.312.178 2.257.4 3.047.222.79.521 1.519 1.17 2.168.649.649 1.378.948 2.168 1.17.79.222 1.735.357 3.047.4 1.312.043 2.099.077 5.72.077 3.621 0 4.408-.034 5.719-.077 1.312-.043 2.257-.178 3.047-.4.79-.222 1.519-.521 2.168-1.17.649-.649.948-1.378 1.17-2.168.222-.79.357-1.735.4-3.047.043-1.312.077-2.099.077-5.72 0-3.621-.034-4.408-.077-5.719-.043-1.312-.178-2.257-.4-3.047-.222-.79-.521-1.519-1.17-2.168C20.948.521 20.219.222 19.429 0 18.639-.222 17.694-.357 16.382-.4 15.07-.443 14.283-.477 10.662-.477c-3.721 0-4.508.034-5.82.077C3.53.034 2.585.169 1.795.391.995.613.266.912.617 1.561c.649.649.948 1.378 1.17 2.168.222.79.357 1.735.4 3.047.043 1.312.077 2.099.077 5.72 0 3.621-.034 4.408-.077 5.719-.043 1.312-.178 2.257-.4 3.047-.222.79-.521 1.519-1.17 2.168-.649.649-1.378.948-2.168 1.17-.79.222-1.735.357-3.047.4-1.312.043-2.099.077-5.72.077-3.621 0-4.408-.034-5.719-.077C.034 20.948.169 20.003.391 19.213c.222-.79.521-1.519 1.17-2.168.649-.649.948-1.378 1.17-2.168.222-.79.357-1.735.4-3.047.043-1.312.077-2.099.077-5.72zM12.017 5.838a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zM12.017 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                </a>

                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-gray-300 hover:text-amber-400 transition-colors">Products</Link></li>
                <li><Link to="/Aboutus"  className="text-gray-300 hover:text-amber-400 transition-colors">About Us</Link></li>
                <li><Link to="/user/dashboard" className="text-gray-300 hover:text-amber-400 transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>
                  📍 No 30 Ifelodun Community Rd 8, Service Area, Osogbo Osun State, Nigeria.
                </p>
                <p>📞 +234 703 989 3468</p>
                <p>✉️ comfortbasefoods&spicies@gmail.com</p>
                <p>🕒 Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Comfort Base Foods & Spices Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer