import { Bell, Box, Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import comfortbaselogo from "../../assets/image/comfortbaselogo.jpg"

const UserNavbar = () => {

  const userNavbarItems = [
    {
        label:"Products",
        path:"user/products",
       
    },
    {
        label:"Orders",
        path:"user/order"
    },
    {
        label:"Contact",
        path:"user/contact"
    },
    {
        label:"Carts",
        path:"user/cart"
    },
    {
        label:"Profile",
        path:"user/profile"
    },
    {
        label:"Admin",
        path:"/admin"
    },{
     
      Icon:<Bell/>
    }
  ]

  const defaultprofile ={
    userImage:"https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg",
    path:"/profile"
}
  return (
    <div className='flex justify-between items-center bg-white shadow-sm p-4'>

      <div className='w-full'>
        <img src={comfortbaselogo} alt="" className='w-14 rounded-full'/>
      </div>

      <div className='flex justify-between items-center w-full'>
      {
        userNavbarItems.map((items, key)=>(
          <nav  key={key} className='flex'>
                <Link to={items.path}>{items.Icon}{items.label}</Link>
          </nav>
          
        ))
      }
      <img src={defaultprofile.userImage} alt="" className='w-14 rounded-full'/>
      </div>

      
    </div>
  )
}

export default UserNavbar