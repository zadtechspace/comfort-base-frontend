import { Bell, Search, User } from "lucide-react";
import comfortbaselogo from "../../assets/image/comfortbaselogo.jpg"

import React from 'react'
import { Link } from "react-router-dom";



const AdminNavbar = () => {
   return (
    <div className="flex gap-12 md:justify-between items-center p-4 bg-gray-300 shadow-sm">
      <div className=" w-18 md:w-full">
        <Link to={"/"}> <img src={comfortbaselogo} alt="" className='w-14 rounded-full '/></Link>
      </div>
      <div className="flex items-center gap-2 w-full max-w-md">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search products, orders..."
          className="text-sm w-full border-none outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </div>
  )
}

export default AdminNavbar
