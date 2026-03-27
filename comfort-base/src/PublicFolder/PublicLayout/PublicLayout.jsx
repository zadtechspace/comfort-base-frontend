import React from 'react'
import Navbar from '../../Components/Navbar'
import Homepage from '../Pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Aboutus from '../Pages/Aboutus'
import Contact from '../Pages/Contact'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import ProductList from '../Pages/ProductList'
import AuthProvider from '../../Components/Authcontext/Authcontext'
import Logout from '../Pages/Logout'
import VerifyUser from '../Pages/VerifyUser'
import Finduserbyemail from '../Pages/Forgotpassword/FindUserbyemail'
import UpdatePassword from '../Pages/Forgotpassword/UpdatePassword'

const PublicLayout = () => {
  return (
    <div>

      <AuthProvider>
        
        <Navbar/>

        <Routes>
            <Route path={"/"} element={<Homepage/>}/>
            <Route path={"/productlist"} element={<ProductList/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
            <Route path={"/aboutUs"} element={<Aboutus/>}/>
            <Route path={"/signUp"} element={<Signup/>}/>
            <Route path={"/login"} element={<Signin/>}/>
            <Route path={"/forgotpassword"} element={<Finduserbyemail/>}/>
            <Route path={"/forgotpassword/:token"} element={<UpdatePassword/>}/>
            <Route path={"/verifyuser/:token"} element={<VerifyUser/>}/>

            <Route path={"/logout"} element={<Logout/>}/>
        </Routes>
        
      </AuthProvider>
        
    </div>
  )
}

export default PublicLayout