import React from 'react';
import { Heart, Award, Users, Leaf, Star, Truck, Shield } from 'lucide-react';

import comfortBaseLogo from '../../assets/image/comfortbaselogo.jpg';
import Footer from '../../Components/Footer';

const Aboutus = () => {

  return (

    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-25 to-yellow-25">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white">

        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full mb-6 sm:mb-8 backdrop-blur-sm border border-white/20">
            
              <img    
                src={comfortBaseLogo} 
                alt="Comfort Base Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-b-full"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              About Comfort Base
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto leading-relaxed px-4">
              Crafting culinary excellence since our founding, bringing the finest foods and spices to your table
            </p>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-pulse"></div>

        <div className="absolute bottom-8 right-8 w-16 h-16 sm:w-32 sm:h-32 bg-white/10 rounded-full animate-pulse delay-1000"></div>

        <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-white/5 rounded-full animate-bounce"></div>

      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Our Story</h2>

          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6 sm:mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 leading-tight">
              From Humble Beginnings to Culinary Excellence
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Comfort Base Foods & Spices Limited was born from a passion for authentic flavors and a commitment to quality.
                What started as a small family business in a local market has grown into a trusted name in the culinary world.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our founders recognized the need for premium quality spices and food products that could elevate everyday cooking
                into extraordinary culinary experiences. With years of expertise and dedication, we've built a reputation for
                sourcing the finest ingredients from around the world.
              </p>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Today, we continue to honor our heritage while embracing innovation, ensuring that every product we offer
                meets the highest standards of quality, freshness, and flavor.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 rounded-2xl p-6 sm:p-8 shadow-xl border border-amber-200/50">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center p-3 sm:p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">50K+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Quality Products</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/60 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">25+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Our Values</h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              These core principles guide everything we do, from sourcing to serving our customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Quality First</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">We never compromise on quality, ensuring every product meets the highest standards</p>
            </div>

            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Customer Focus</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Your satisfaction and culinary success are at the heart of everything we do</p>
            </div>

            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Sustainability</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">We source responsibly and work towards environmentally conscious practices</p>
            </div>

            <div className="group text-center p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-100">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Community</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Building strong relationships with our customers and local communities</p>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes Us Special */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">What Makes Us Special</h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6 sm:mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-center mb-4 sm:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Premium Sourcing</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We travel the world to source the finest spices and ingredients directly from trusted farmers
              and suppliers, ensuring authenticity and exceptional quality in every product.
            </p>
          </div>

          <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-center mb-4 sm:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Quality Assurance</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Every batch undergoes rigorous testing and quality control processes to guarantee purity,
              potency, and consistency in every product we deliver to your kitchen.
            </p>
          </div>

          <div className="group bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="text-center mb-4 sm:mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Reliable Service</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              From order to delivery, we ensure a seamless experience with fast, secure shipping and
              dedicated customer support to make your culinary journey enjoyable.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Our Mission</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
            To bring the world's finest culinary treasures to your kitchen, making exceptional taste
            and quality accessible to everyone who loves to cook and create memorable meals.
          </p>
          <div className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <img
              src={comfortBaseLogo} 
              alt="Comfort Base Logo"
              className="w-4 h-4 sm:w-5 sm:h-5 mr-2 object-contain rounded-full"
            />
            Crafting Culinary Excellence
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Aboutus;