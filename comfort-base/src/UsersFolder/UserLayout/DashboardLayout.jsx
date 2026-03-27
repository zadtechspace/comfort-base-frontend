import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Products from '../../PublicFolder/Pages/ProductList'
import Order from './Order'
import Contact from '../../PublicFolder/Pages/Contact'
import Carts from './Carts'
import Profile from './Profile'
import DashboardIndex from "./DashboardIndex"
import { Bell, Search, User } from "lucide-react";
import UserNavbar from '../Components/UserNavbar'
import ProductList from '../../PublicFolder/Pages/ProductList'


const userNavbarItems = [
    {
        label:"Products",
        path:"/user/products",
       
    },
    {
        label:"Orders",
        path:"/user/order"
    },
    {
        label:"Contact",
        path:"/user/contact"
    },
    {
        label:"Carts",
        path:"/user/cart"
    },
    {
        label:"Profile",
        path:"/user/profile"
    },
    {
        label:"Admin",
        path:"/admin"
    },
    
    {
        label:"logout",
        path:"/logout"
    }
  ]

  const defaultprofile ={
    userImage:"https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg",
    path:"/profile"
}
  


const DashboardLayout = () => {
  
  return (
    <div>

       

        {/* <UserNavbar/> */}
        <Navbar navBarMenu= {userNavbarItems} profile={defaultprofile}/>
       
        
        <Routes>
            
            <Route path={'/' }element={<DashboardIndex/>}/>

            <Route path={'/products'} element={<ProductList/>}/>
            <Route path={'/order'} element={<Order/>}/>
            <Route path={'/contact' }element={<Contact/>}/>
            <Route path={'/cart'} element={<Carts/>}/>
            <Route path={'/profile'} element={<Profile/>}/>

            
        </Routes>

        <Bell/>
        <Search/>
        <User/>
    
    {/* <Outlet/> */}
    </div>
    
  )
}

export default DashboardLayout