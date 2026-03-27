import React from 'react'
import PublicLayout from './PublicFolder/PublicLayout/PublicLayout'

import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './UsersFolder/UserLayout/DashboardLayout'
import AdminLayout from './AdminFolder/Layout/AdminLayout'
import AuthProvider from './Components/Authcontext/Authcontext'
import ProtectedRoute from './Components/ProtectedRoute'
import { Toaster } from 'sonner'


const App = () => {
  return (
    <div>
      <AuthProvider>
        <Toaster richColors position="top-right" closeButton visibleToasts={3} />
        <div>

      <Routes>
        <Route path='/*' element={ <PublicLayout/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/user/*' element={ <DashboardLayout/>}/>
        </Route>
        <Route path='/admin/*' element={<AdminLayout/>}/>
      </Routes>
        </div>

      </AuthProvider>
     
      
    </div>
  )
}

export default App