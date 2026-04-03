import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";
import { ChefHat, Star, Truck, Shield, Sparkles } from 'lucide-react';
import Products from "../../Components/Products";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import comfortBaseLogo from "../../assets/image/comfortbaselogo.jpg";

function Home() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-yellow-50">

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            
            {/* Logo/Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-8 shadow-lg">
              <img src={comfortBaseLogo} alt="Comfort Base Logo" className="w-10 h-10 object-contain rounded-full" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Comfort Base
              <span className="block text-2xl md:text-4xl lg:text-5xl text-amber-600 font-semibold mt-2">
                Foods & Spices Limited
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the finest selection of quality products, spices, and culinary delights.
              Experience exceptional taste and unbeatable value.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <Sparkles className="w-5 h-5 mr-2" />
              <Link to="products" className="text-white hover:text-amber-200">
                Explore Our Collection
              </Link>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Only the finest ingredients and products for your culinary needs</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable delivery to your doorstep</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Brand</h3>
            <p className="text-gray-600">Years of experience serving quality products</p>
          </div>
        </div>

      
      </div>  

      <Footer/>

    </div>

  )
}
  
export default Home