

import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute =  () => {

const token = localStorage.getItem("jwttoken")

  const navigate = useNavigate()

  useEffect(() => {

    if(token === null){
      navigate("/login")
    }
   
  const doVerifyToken = async(Data)=>{
        try {
          
          const res = await fetch("http://localhost:4000/auth/verifytoken",{
            method:"POST",
            body:JSON.stringify(Data),
            headers:{
              "Content-type":"application/json",
              "Authorization":`Bearer ${token}`

              
            }
          })
        
          const data =await res.json()
        
          if(data.success){
            navigate("/user")
          }
          else{
            navigate("/login")
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