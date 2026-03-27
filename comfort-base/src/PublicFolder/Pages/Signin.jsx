import React, { useState } from 'react'
import comfortbaselogo from "../../assets/image/comfortbaselogo.jpg"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'sonner'

const loginSchema =yup.object({
    email:yup.string().required("Email is required").email("please enter a valid email"),
    password:yup.string().required("Password is required").min(6,"character must be at least 6")
})



const Signin = () => {
    const [isLoading, setIsloading] = useState(false)
    
    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(loginSchema),
        email:"",
    password:""

})

// const submit=(data)=>{
// console.log(data)
// }

const Navigate = useNavigate()

const handlelogin = async(Data)=>{

    setIsloading(true)
    try {

        const res = await fetch("https://comfort-base-backend.onrender.com/auth/login",{
        method:"POST",
        body:JSON.stringify(Data),
        headers:{
            "content-type":"application/json",
        }
        
    })

    const data = await res.json()

    const token = data.token

    if(token){

        localStorage.setItem("jwttoken", token)
        console.log(data)
        toast.success("Login successful")
        Navigate("/user")
    }
   
    if(res.status===404){
        toast.error("Email or Password is incorrect")
        console.log({message:"Email or Password is incorrect"})
    }
    } catch (error) {
        console.log(error)
    }finally{
        setIsloading(false)
    }
}


  return (
    <section className="p-3 font-sans md:py-16 xl:px-48 ">  
        <main 
        className="flex flex-col p-6 gap-6 shadow-2xl shadow-gray-300 rounded-lg w-full  md:flex-row lg:justify-between md:items-center">

            <form className="font-medium text-sm md:w-96 lg:w-full lg:px-16" onSubmit={handleSubmit(handlelogin)}>

                <div className="text-center flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold ">Welcome On Board</h1>
                </div>
               
                <div className="flex flex-col gap-2 mt-8 ">
                  
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"  name="email" {...register("email")}
                    className="border-2 shadow-sm  bg-gray-50 font-normal rounded-lg p-2 tranform hover:scale-101 ease-linear "/>
                    {errors.email && <p>{errors.email.message}</p>}
                    

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" {...register("password")}
                    className="border-2 shadow-sm  bg-gray-50 font-normal rounded-lg p-2 tranform hover:scale-101 ease-linear"/>
                     {errors.password && <p>{errors.password.message}</p>}
                </div>
             
                <div className=" mt-6 gap-2">
                   

                    <button type='submit'  className="bg-green-700 p-2 text-base text-white  rounded-lg tranform hover:scale-101 ease-linear duration-300 w-full">{isLoading ? "Loading..." : "Sign In"}</button>
                    <Link to="/forgotpassword">Forgot Password</Link>
                </div>

            </form>

            <div className="flex justify-center items-center lg:w-full">
                <img src={comfortbaselogo} alt="" className=" md:w-96 tranform hover:scale-90 ease-linear duration-500 overflow-hidden rounded-full"/>
            </div>
        </main>
       
    </section>
  )
}

export default Signin