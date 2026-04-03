import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

// Responsive profile page using Tailwind CSS
const Profile = () => {
  const { _id } = useParams()


 
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const[userInfo,setUserInfo]=useState({})
 

  // Yup schema for validation
  const schema = yup.object().shape({

    firstName: yup.string().trim(),

    lastName: yup.string().trim(),

    email: yup.string().trim().email('Invalid email address'),

    phone: yup.string().trim().matches(/^[0-9()+\-\s]*$/, 'Invalid phone number').nullable(),

    address: yup.string().trim().nullable(),

    profileImage: yup.mixed()
      .required("Image is required")
      .test("fileType", "Only image files are allowed", (value) => {
        return value && value.length > 0 && value[0] && value[0].type.startsWith("image/");
      }),
  })

  const { register, handleSubmit, reset, setValue, formState: { errors} } = useForm({
    resolver: yupResolver(schema),
    // defaultValues:userInfo
  })

 
  const getUserInfo = async () => {
    try {
    
     
      const res = await fetch(`https://comfort-base-backend.onrender.com/user/${_id}`, {
        method: 'GET',
        body:JSON.stringify(),
        headers: {
          'content-type': 'application/json',
          "authorization": `Bearer ${localStorage.getItem('jwttoken')}`
        }
      })
      const data = await res.json()
      setUserInfo(data.user)
      console.log(data.user)
      
      
     
    } catch (err) {
     console.log(err)
    } 
   
  }
  useEffect(() => {
    getUserInfo()
  }, [])
  

 


  const onSubmit = async (data) => {
    setIsLoading(true)
    setMessage('')
    try {
      const formData = new FormData();

      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("address", data.address);
      formData.append("profileImage", data.profileImage[0]);

      console.log("Submitting data:", data);

      const res = await fetch(`http://localhost:4000/user/update/${_id}`, {
        method: "PUT",
        body: formData,
        headers: {
          "authorization": `Bearer ${localStorage.getItem('jwttoken')}`
        }
      });

      const result = await res.json();

      if (!result.success) {
        setMessage("Failed to update profile");
        console.log("Failed to update profile");
      }

      if (res.status === 200) {
        console.log("Profile updated:", data);
        setMessage("Profile updated successfully");
        getUserInfo(); // Refresh the profile data
      }

    } catch (err) {
      console.error(err);
      setMessage('Save failed');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Left column: avatar and summary */}
          <aside className="md:w-1/3 bg-gradient-to-b from-rose-50 to-white dark:from-slate-700 dark:to-slate-800 p-6 flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-rose-300 dark:ring-slate-600">
              {userInfo.profileImage ? (
                <img src={userInfo.profileImage} alt="avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-rose-200 dark:bg-slate-600 flex items-center justify-center text-3xl text-rose-700 dark:text-slate-200">
                  {userInfo.firstName?.[0] ?? 'U'}{userInfo.lastName?.[0] ?? ''}
                </div>
              )}
            </div>
            <h2 className="mt-4 text-xl font-semibold text-slate-800 dark:text-slate-100">{userInfo.firstName} {userInfo.lastName}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{userInfo.email}</p>

            <form className="mt-6 w-full">
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-2">Change avatar</label>
              <input
                type="file"
                accept="image/*"   
                {...register("profileImage")}
                className="w-full text-sm text-slate-600"
              />
            </form>

            <div className="mt-6 w-full grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white/60 dark:bg-slate-700/40 p-3 rounded">
                <div className="text-xs text-slate-500">Orders</div>
                <div className="font-semibold text-lg text-slate-800 dark:text-slate-100">12</div>
              </div>
              <div className="bg-white/60 dark:bg-slate-700/40 p-3 rounded">
                <div className="text-xs text-slate-500">Saved</div>
                <div className="font-semibold text-lg text-slate-800 dark:text-slate-100">4</div>
              </div>
            </div>
          </aside>

          {/* Right column: editable form */}
          <main className="md:w-2/3 p-6 text-white">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">Profile</h3>
              {isLoading && <span className="text-sm text-slate-500">Loading...</span>}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">First name</label>
                  <input
                    {...register('firstName')}
                    
                    aria-invalid={errors.firstName ? 'true' : 'false'}
                    className={`mt-1 block w-full rounded-md border ${errors.firstName ? 'border-rose-500' : 'border-slate-200'} focus:border-rose-400 focus:ring-rose-200 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400`}
                    placeholder={userInfo.firstName}
                    defaultValue={userInfo.firstName}
                    
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-rose-600">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Last name</label>
                  <input
                    {...register('lastName')}
                    aria-invalid={errors.lastName ? 'true' : 'false'}
                    className={`mt-1 block w-full rounded-md border ${errors.lastName ? 'border-rose-500' : 'border-slate-200'} focus:border-rose-400 focus:ring-rose-200 dark:bg-slate-700 dark:border-slate-600`}
                   placeholder={userInfo.lastName}
                   defaultValue={userInfo.lastName}
                   
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-rose-600">{errors.lastName.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  className={`mt-1 block w-full rounded-md border ${errors.email ? 'border-rose-500' : 'border-slate-200'} focus:border-rose-400 focus:ring-rose-200 dark:bg-slate-700 dark:border-slate-600`}
                  placeholder=""
                  defaultValue={userInfo.email}
                  
                />
                {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email.message}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                  <input
                    {...register('phone')}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    className={`mt-1 block w-full rounded-md border ${errors.phone ? 'border-rose-500' : 'border-slate-200'} focus:border-rose-400 focus:ring-rose-200 dark:bg-slate-700 dark:border-slate-600`}
                    placeholder={userInfo.phone}
                    defaultValue={userInfo.phone}
                    
                  />
                  {errors.phone && <p className="mt-1 text-sm text-rose-600">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Location</label>
                  <input
                    {...register('address')}
                    aria-invalid={errors.address ? 'true' : 'false'}
                    className={`mt-1 block w-full rounded-md border ${errors.address ? 'border-rose-500' : 'border-slate-200'} focus:border-rose-400 focus:ring-rose-200 dark:bg-slate-700 dark:border-slate-600`}
                    placeholder={userInfo.address}
                    defaultValue={userInfo.address}
                  />
                  {errors.address && <p className="mt-1 text-sm text-rose-600">{errors.address.message}</p>}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md text-sm"
                >
                  {isLoading ? 'Saving...' : 'Save'}
                </button>

                <button
                  type="button"
                  onClick={() => {

                    reset()
                    setMessage('Cleared')
                  }}
                  className="inline-flex items-center px-3 py-2 border rounded-md text-sm text-slate-700 dark:text-slate-200"
                >
                  Reset
                </button>
                {message && <div className="text-sm text-rose-600 dark:text-rose-400">{message}</div>}
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Profile