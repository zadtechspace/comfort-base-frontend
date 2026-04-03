import React, { use, useEffect, useState } from 'react'
import * as yup from "yup"

import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'

const Finduserbyemail = () => {
    // const [handleinput, sethandleinput] = useState("")

    const {register, handleSubmit} = useForm({

    })

  
    const Navigate =useNavigate()


    const submitemail =async (Data)=>{
    

        // console.log("Form data:", data)
        
        try {
            const res = await fetch("http://localhost:4000/auth/forgotpassword",{
                method:"POST",
                body:JSON.stringify(Data),
                headers:{
                    "content-type":"application/json"
                }

            })
            const data = await res.json()

            if(res.status===200){

                console.log(data, "User found")
                Navigate('/forgotpassword/:id')
            }else{
                console.log("User not found")
            }
            

          
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">

     
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Forgot Password
        </h2>

        <p className="text-sm text-gray-500 text-center mb-6">
            Enter your email address below and we'll send you a password reset link.
        </p>

        <form className="space-y-5" onSubmit={handleSubmit(submitemail)}>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
            </label>
            <input
            {...register("email")}
            type="email"
            id="email"
            required
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="you@example.com"
           
            />
        </div>

        <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
           
        >
            Send Reset Link
        </button>
        </form>

        <p className="mt-6 text-center text-sm">
        <a href="/signin" className="text-blue-600 hover:underline">Back to Login</a>
        </p>
    </div>

    
    </div>
  )
}

export default Finduserbyemail