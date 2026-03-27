import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate, useParams } from 'react-router-dom'

const UpdatePassword= () => {
  
  const {register,handleSubmit}= useForm({})
  
  useEffect(() => {
    updatepass()
  }, [])
  
  const {token}= useParams()
      const updatepass = async(token)=>{
        console.log(data)
         try {
          const res =await fetch(`http://localhost:4000/auth/forgetpassword/${token}`,{
            method:"POST",
            body:JSON.stringify(token),
            headers:{
              "content-type":"application/json"
            }
           
          })
          const data = res.json()

          if(data.success){
            console.log("Password reset successfully")
            Navigate("/login")

          }

          console.log(data)


         } catch (error) {
          console.log(error)
         }
      }








  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">
            Change Password
          </h2>

          <form id="changePasswordForm" class="space-y-5" onSubmit={handleSubmit(updatepass)}>
            {/* <!-- New Password --> */}
            <div>
              <label for="newPassword" class="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                placeholder="Enter new password"
                required
                minlength="6"
                class="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                {...register("password")}
              />
            </div>

            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              class="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            >
              Update Password
            </button>
          </form>

          {/* <!-- Message --> */}
          <p id="message" class="text-center mt-4 text-sm font-medium"></p>

          {/* <!-- Back link --> */}
          <div class="mt-6 text-center">

            <Link to={"/login"} class="text-blue-600 hover:underline text-sm">Back to Login</Link>
            
          </div>
        </div>

    </div>
  )
}

export default UpdatePassword