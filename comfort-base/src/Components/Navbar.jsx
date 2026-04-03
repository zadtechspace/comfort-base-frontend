import React, { useState } from 'react'
import comfortbaselogo from "../assets/image/comfortbaselogo.jpg"
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import { Menu, X, Search,ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
// import { authContext } from './Authcontext/Authcontext'




const defaultNavBarItems= [
  {
    label:"Home",
    path:"/",
  },
  {
    label:"Products",
    path:"/products",
  },
  {
    label:"About Us",
    path:"/aboutUs"
  },
  {
    label:"Sign In",
    path:"/signin",
  },


]
const Navbar = ({navBarMenu = defaultNavBarItems, profile}) => {

const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// const{user, login} = useContext(authContext)

// console.log(user)

  return (
    <nav className='bg-blue-950 text-gray-200 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link to={'/user/dashboard'} className='flex items-center'>
              <img src={comfortbaselogo} className='w-10 h-10 rounded-full object-cover' alt="Comfort Base Logo" />
              <span className='ml-2 text-lg font-semibold hidden sm:block'>Comfort Base</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {
                navBarMenu.map((item, index) => (
                  <Link 
                    to={item.path} 
                    key={index} 
                    className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-800'
                  >
                    {item.label}
                  </Link>
                ))
              }
            </div>
          </div>

          {/* Profile & Mobile Menu Button */}
          <div className='flex items-center space-x-4'>

             <Link to="/user/cart"   className="relative">
                <ShoppingCart size={20} />
                {/* Cart count badge */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {}
                </span>
              </Link>
            
            {/* Profile Image */}
            {profile && (
              <div className='w-8 h-8 rounded-full overflow-hidden'>
                <Link to={"/user/profile"}>
                  <img src={profile.userImage} alt="Profile" className='w-full h-full object-cover'  />
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='text-gray-300 hover:text-white p-2 rounded-md hover:bg-blue-800 transition-colors duration-200'
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900 border-t border-blue-800'>
            {
              navBarMenu.map((item, index) => (
                <Link 
                  to={item.path} 
                  key={index} 
                  className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors duration-200'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))
            }
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar













// import React from 'react'
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-black text-white px-4 py-3 flex justify-between items-center">
      
//       {/* Logo */}
//       <h1 className="text-xl font-bold">Comfort Base Foods & Spices Limited</h1>

//       {/* Links */}
//       <div className="hidden md:flex gap-6">
//         <Link to="/">Home</Link>
//         <Link to="/user/cart">Cart</Link>
//         <Link to="/login">Login</Link>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden">
//         ☰
//       </div>
//     </nav>
//   );
// }

// export default Navbar;