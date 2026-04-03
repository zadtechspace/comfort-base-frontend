import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

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
            toast.success("Logged out successfully")
        }
    } catch (error) {
        console.log(error)
    }
    
        localStorage.removeItem("jwttoken")

        Navigate("/signin")
     };
    
     
     doLogout()
    }, [Navigate])
    return null
}

export default Logout