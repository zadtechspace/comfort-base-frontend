import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Logout = () => {
    const Navigate = useNavigate()

    useEffect(() => {

     const doLogout= async(Data)=>{
        try {
           const res=  await fetch("http://localhost:4000/auth/logout",{
                method:"POST",
                body:JSON.stringify(Data),
                headers:{
                    "Content-type":"application/json",
                    "Authorization":`Bearer ${localStorage.getItem("jwttoken")}`
                }
            })

            const data = res.json()
         if(data.sucess){
            console.log(data.message)
         }
        } catch (error) {
            console.log(error)
        }

        localStorage.removeItem("jwttoken")

        Navigate("/login")
     };
    
     
     doLogout()
    }, [Navigate])
    return null
}

export default Logout