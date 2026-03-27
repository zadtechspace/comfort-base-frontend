
import axios from 'axios'
import { Eye, EyeClosed, EyeClosedIcon } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import comfortbaselogo from "../../assets/image/comfortbaselogo.jpg"
import {authContext} from '../../Components/Authcontext/Authcontext'
import { useForm } from 'react-hook-form'
// import { toast } from 'sonner'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { toast } from 'sonner'

const signupSchema = yup.object({
    firstName: yup.string().required("First Name is required").min(3, "must be at least 3 character"),
    lastName: yup.string().required("Last Name is required").min(3, "must be at least 3 character"),
    email: yup.string().required("Email is required").email("Please enter a valid email"),
    password: yup.string().required("Password is required").min(6, "must be at least 6 character"),
})
const SignUpForm = () => {
    const navigate = useNavigate()
    const [emailexist, setEmailExist] = useState("")
 
const { register, handleSubmit, formState:{errors}} = useForm(
    {resolver:yupResolver(signupSchema)

    }
)
// useEffect(() => {
//   console.log(register)
// }, [])

// const signup = useContext(authContext)

const [isSubmitting, setIsSubmitting] = useState(false)
const signup = async(Data)=>{
              
              // setSubmitting(true) 
              // e.preventDefault()
              
            
      
              setIsSubmitting(true)
              try {
                  const res = await fetch("http://localhost:4000/auth/register", {
                      method: "POST",
                      body: JSON.stringify(Data),
                      headers: {
                          "Content-Type": "application/json"
                      }
                  })
                  const data = await res.json()
                  if (res.status === 200) {
                      console.log( "You are welcome")
                      toast.success("Account created successfully")
                      navigate("/login")
                  }
                  if(res.status===401){
                      setEmailExist(data.message)
                      toast.error(data.message)
                   
                  }
                  console.log(data)
                } catch (error) {
                    console.log(error)
              } 
              finally {
                  setIsSubmitting(false)
              }
          }

    // const onSubmit =(data)=>{
    //     console.log(data)
    // }

  return (

        
    // <div className=''>
    //     <form action="" className="bg-gray-100 min-h-screen flex items-center justify-center">

            
    //         <div className="flex gap-6 flex-col bg-gray-500 shadow-lg rounded-lg max-w-md w-full p-8">

    //             <h2 className="text-lg text-white  font-semibold text-center mb-6">
    //                 Welcome to Comfort Base Food & Spicy Limited
    //             </h2>
              
               
    //             <input type="text" name='fullName' id='fullName'placeholder='Full Name' className='text-sm border-white shadow-md  p-2.5 bg-gray-100 rounded-2xl' onChange={handleInput}/> 

                 
    //             <input type="email" name='email' id='email'placeholder='Email' className='text-sm border-white shadow-md  p-2.5 bg-gray-100 rounded-2xl' onChange={handleInput}/>

        
    //             <input type="text" name='gender' id='gender'placeholder='Gender' className='text-sm border-white shadow-md  p-2.5 bg-gray-100 rounded-2xl' onChange={handleInput}/>

               
    //             <input type="text" name='email' id='age' placeholder='Age' className='text-sm border-white shadow-md  p-2.5 bg-gray-100 rounded-2xl' onChange={handleInput}/>

               
    //             <div className='flex gap-1 items-center'>
    //                 <input type={showPassword ? 'text' :"password"} name='password' id='password' placeholder='Password' className='text-sm border-white shadow-md w-md p-2.5 bg-gray-100 rounded-2xl' onChange={handleInput} />
    //                 <Eye onClick={show} className='bg-white rounded-full '/>
    //             </div>
                

    //             <button className='p-2 bg-green-800 mt-5 text-white font-semibold rounded-3xl' onClick={handleSubmit} >Sign Up</button>

    //                 <p className="mt-6 text-center text-sm text-gray-600">
    //                     Already have an account?{' '}
    //                     <Link to="/login" className="text-blue-500 hover:underline"> Login</Link>
    //                 </p>
    //         </div>
            
    //     </form>
    // </div>

     <section className="p-3 font-sans md:py-4 xl:px-48 bg-gray-600 h-screen">  
        <main 
        className="flex flex-col p-6 gap-6 shadow-sm shadow-gray-50 rounded-lg w-full  md:flex-row lg:justify-between lg:items-center bg-white">

            <form className=" text-sm md:w-96 xl:w-full xl:px-16" onSubmit={handleSubmit(signup)}>

                <div className="text-center flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold ">Create an account</h1>
                </div>
               
                <div className="flex flex-col gap-2 mt-8 ">
                    <label htmlFor="">First Name</label>
                    <input type="text" id="firstName" name="firstName" {...register("firstName")} 
                    className="border-2 shadow-sm  bg-gray-50  rounded-lg p-2 tranform hover:scale-101"/>
                    {errors.firstName && <p>{errors.firstName.message}</p>}


                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" {...register("lastName")}
                    className="border-2 shadow-sm  bg-gray-50  rounded-lg p-2 tranform hover:scale-101"/>
                      {errors.lastName && <p>{errors.lastName.message}</p>}

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" {...register("email")}
                    className="border-2 shadow-sm  bg-gray-50  rounded-lg p-2 tranform hover:scale-101"/>
                      {errors.email && <p>{errors.email.message}</p>}
                      <p>{emailexist}</p>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" {...register("password")} autoComplete="none" 
                    className="border-2 shadow-sm  bg-gray-50  rounded-lg p-2 tranform hover:scale-101 ease-linear"/>
                      {errors.password && <p>{errors.password.message}</p>}

                    <span>Show</span>
                </div>
             
                                <div className="flex flex-col mt-6 gap-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`bg-green-800 p-2 text-sm rounded-2xl text-white tranform ease-linear duration-300 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:scale-101'}`}
                                        >
                                            {isSubmitting ? (
                                                <span className="inline-flex items-center gap-2">
                                                    <svg className="w-4 h-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                                    </svg>
                                                    Creating...
                                                </span>
                                            ) : (
                                                'Create Account'
                                            )}
                                        </button>
                                </div>

                    <p className="mt-6 text-center text-sm ">
                         Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline"> Login</Link>
                    </p>

            </form>

            <div className="flex items-center-safe place-items-center-safe">
                <img src={comfortbaselogo} alt="" className="hidden md:block  tranform hover:scale-90 ease-linear duration-500 max-w-fit overflow-hidden rounded-full"/>
            </div>
        </main>
       
    </section>
  )
}





export default SignUpForm