import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Products from '../../Components/Products'
import Order from '../Pages/Order'
import Carts from '../Pages/Carts'
import Profile from '../Pages/Profile'
import DashboardIndex from "../Pages/DashboardIndex"
import Checkout from '../Pages/Checkout'
import ProtectedRoute from '../../Components/ProtectedRoute'


const userNavbarItems = [
    {
        label:"Dashboard",
        path:"/user/dashboard"
    },
    {
        label:"Products",
        path:"/user/products",
       
    },
    {
        label:"Orders",
        path:"/user/order"
    },
    {
        label:"Carts",
        path:"/user/cart"
    },
    // {
    //     label:"Admin",
    //     path:"/admin"
    // },
    
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

            <Route element ={<ProtectedRoute/>}>

            <Route path={'/dashboard'} element={<DashboardIndex/>}/>

            <Route path={'/products'} element={<Products/>}/>
            <Route path={'/order'} element={<Order/>}/>
            <Route path={'/cart'} element={<Carts/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/checkout'} element={<Checkout/>}/>
            
            </Route>
            

            
        </Routes>

    
    {/* <Outlet/> */}
    </div>
    
  )
}

export default DashboardLayout