import React from 'react'
import { Home, Box, List, Users, Settings } from "lucide-react";
import { Link } from 'react-router-dom';

const sidebarItems =[
    { path: "/admin", label: "Dashboard", icon: <Home  /> },
    { path: "/admin/product", label: "Products", icon: <Box /> },
    { path: "/admin/orders", label: "Orders", icon: <List /> },
    { path: "/admin/salecharts", label: "Customers", icon: <Users /> },
    { path: "/admin/settings", label: "Settings", icon: <Settings /> },
]
const Sidebar = () => {
  return (
    <div  className="sm:text-sm  w-32 md:w-64 h-screen bg-gray-900 text-white  ">

        <div className=" p-2 text-sm md:text-xl font-semibold md:font-bold text-center">
            <h1>ComFort Base</h1>
            <h1>Foods & Spicy Limited</h1>
        </div>

        <nav  className="text-sm mt-6">
            {
                sidebarItems.map((items,key)=>(
                    
                    <Link to ={items.path} key={key} className="flex items-center gap-3 px-2 md:px-4 py-2 hover:bg-gray-800">{items.icon}{items.label}</Link>
                ))
            }
        </nav>

        <div className="p-4 text-sm text-gray-400">© 2025 ZadCommerce</div>
    </div>
  )
}

export default Sidebar