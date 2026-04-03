

import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute =  () => {

const token = localStorage.getItem("jwttoken")

  const navigate = useNavigate()

  useEffect(() => {

    if(token === null){
      navigate("/signin")
    }
   
  const doVerifyToken = async(Data)=>{
        try {
          
          const res = await fetch("https://comfort-base-backend.onrender.com/auth/verifytoken",{
            method:"POST",
            body:JSON.stringify(Data),
            headers:{
              "Content-type":"application/json",
              "Authorization":`Bearer ${token}`

              
            }
          })
        
          const data =await res.json()
        
          if(!data.success){
           navigate("/signin")
          }
         
        } catch (error) {
          console.log(error)
        }


      }
      doVerifyToken()
    return 
  }, [])
  
  return <Outlet/>
    
  
}

export default ProtectedRoute