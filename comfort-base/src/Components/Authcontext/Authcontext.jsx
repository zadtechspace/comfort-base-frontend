import React, { createContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const authContext = createContext()

const AuthProvider =({children})=>{

    // const [user, setUser] = useState([{name:"Ayobami Ibironke", email:"oppo159350@gmail.com", gender:"female"}])

    // const [submitting, setSubmitting] = useState(false)

    const login =()=>{
        alert("Login in...")
    }

   

    
    // const signup = async(formData)=>{
        
    //     setSubmitting(true) 
        
    //     try {
    //         const res = await fetch("localhost:4000/auth/register",{
    //             method:"POST",
    //             body: JSON.stringify(formData),
    //             headers:{
    //                 "content-type":"application/json"
    //             }
    //         })
            
    //         const data = await res.json()

    //         if(res.status === 200){
    //              console.log(data.message)
            
    //             navigate("/login")
    //         }
            
           
    //     } catch (error) {
    //         console.log(error)
    //     }finally{
    //         setSubmitting(false)
    //     }
        
    // }

      const signup = async(formData)=>{
            
            // setSubmitting(true) 
            // e.preventDefault()
            
          
            const Navigate = useNavigate()
    
            // setSubmitting(true)
            try {
                const res = await fetch("http://localhost:4000/auth/register", {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await response.json()
                if (res.status === 200) {
                    console.log( "You are welcome")
                    Navigate("/login")
                }
                console.log(data)
            } catch (error) {
                console.log(error)
            } 
            // finally {
            //     setSubmitting(false)
            // }
        }
    const value ={
        signup ,
        login
    }
    
    return(
        <authContext.Provider value={value}>{children}</authContext.Provider>
)
}
  

export default AuthProvider
