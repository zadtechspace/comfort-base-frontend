import React from 'react'
import comfortbaselogo from "../assets/image/comfortbaselogo.jpg"
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import { Icon, Search } from 'lucide-react'
import { useContext } from 'react'
// import { authContext } from './Authcontext/Authcontext'




const defaultNavBarItems= [{
    label:"Home",
    path:"/",
  },
  {
    label:"ProductList",
    path:"/productlist",
  },

  {
    label:"Contacts",
    path:"/contact"
  },
  {
    label:"About Us",
    path:"/aboutUs"  
  },

  {
    label:"Sign Up",
    path:"/signUp",
  },

  {
    label:"Dashboard",
    path:"/user",
  },


  {
    label:"Admin",
    path:"/admin",
   
  }
]
const Navbar = ({navBarMenu = defaultNavBarItems, profile}) => {

  
// const{user, login} = useContext(authContext)

// console.log(user)

  return (
    <div className='flex items-center justify-between p-2 bg-blue-950 text-gray-200'>
        <div className='place-items-center'>
          <Link to={'/'}><img src={comfortbaselogo} className='w-16 rounded-full' alt="" /></Link>
        </div>

        <div className=' flex items-center '>
          
            {
              navBarMenu.map((index,key)=>(
                
                  <Link to={index.path} key={key} className='shadow-3xl text-sm py-2 px-6 rounded-3xl'>{index.label}</Link>
                                  
              ))
            }
 
              <div style={{width: "50px", height: "50px", borderRadius: "50%",display:profile? "block":"none" }}>
                    <img src={profile?.userImage} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
                </div>
        </div>


    </div>
  )
}

export default Navbar