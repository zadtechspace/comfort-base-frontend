import React, { useState } from 'react'
import comfortbaselogo from "../../assets/image/comfortbaselogo.jpg"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Eye, EyeClosed, Mail, Lock, ChefHat } from 'lucide-react'
import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'sonner'



const loginSchema = yup.object({
    email: yup.string().required("Email is required").email("Please enter a valid email"),
    password: yup.string().required("Password is required").min(6, "Must be at least 6 characters")
})



const Signin = () => {
    const [isLoading, setIsloading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema),
        email: "",
        password: ""
    })

    const Navigate = useNavigate()

    const handlelogin = async (Data) => {
        setIsloading(true)
        try {
            const res = await fetch("http://localhost:4000/auth/login", {
                method: "POST",
                body: JSON.stringify(Data),
                headers: {
                    "content-type": "application/json",
                }
            })

            const data = await res.json()
            const token = data.token

            if (token) {
                localStorage.setItem("jwttoken", token)
                console.log(data)
                toast.success("Login successful")
                Navigate("/user/dashboard")
            }

            if (res.status === 404) {
                toast.error("Email or Password is incorrect")
                console.log({ message: "Email or Password is incorrect" })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsloading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-100 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left side - Form */}
                    <div className="flex-1 p-8 lg:p-12">
                        <div className="max-w-md mx-auto">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4">
                                     <img src={comfortbaselogo} alt="Comfort Base Logo" className="w-full h-full object-cover rounded-full" />
                                </div>

                                <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>

                                <p className="text-gray-600">Sign in to your Comfort Base account</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit(handlelogin)} className="space-y-6">
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            {...register("email")}
                                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                </div>

                                {/* Password */}
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            {...register("password")}
                                            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                                            placeholder="Enter your password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword ? <EyeClosed className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-200 ${
                                        isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                                    }`}
                                >
                                    {isLoading ? (
                                        <span className="inline-flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                            </svg>
                                            Signing In...
                                        </span>
                                    ) : (
                                        'Sign In'
                                    )}
                                </button>

                                {/* Forgot Password & Sign Up Links */}
                                <div className="text-center space-y-2">
                                    <Link
                                        to="/forgotpassword"
                                        className="block text-sm text-amber-600 hover:text-amber-500 transition-colors duration-200"
                                    >
                                        Forgot Password?
                                    </Link>
                                    <p className="text-sm text-gray-600">
                                        Don't have an account?{' '}
                                        <Link to="/signup" className="font-medium text-amber-600 hover:text-amber-500 transition-colors duration-200">
                                            Sign up here
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right side - Image/Logo */}
                    <div className="hidden lg:flex flex-1 bg-gradient-to-br from-amber-400 to-orange-500 items-center justify-center p-12">
                        <div className="text-center">
                            <img
                                src={comfortbaselogo}
                                alt="Comfort Base Logo"
                                className="w-48 h-48 object-contain mx-auto mb-8 rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300"
                            />
                            <h2 className="text-2xl font-bold text-white mb-4">Welcome to Comfort Base</h2>
                            <p className="text-orange-100 text-lg">Foods & Spices Limited</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Signin